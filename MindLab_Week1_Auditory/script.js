// ---------- LocalStorage helpers ----------
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// ---------- Progress across days ----------
function updateDayProgress(day) {
  const list = document.querySelector(`[data-day-list="${day}"]`);
  const items = list.querySelectorAll('input[type="checkbox"]');
  const done = Array.from(items).filter(i => i.checked).length;
  const pct = items.length ? Math.round((done / items.length) * 100) : 0;
  const label = document.querySelector(`[data-day-progress="${day}"]`);
  if (label) label.textContent = pct + '%';
  return {done, total: items.length};
}

function updateOverallCompletion() {
  const days = ['mon','tue','wed','thu','fri','sat','sun'];
  let done = 0, total = 0;
  days.forEach(d => {
    const p = updateDayProgress(d);
    done += p.done; total += p.total;
  });
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById('completion').textContent = pct + '%';
  store.set('overallCompletion', pct);
}

// ---------- Persist checkboxes ----------
function loadCheckboxes() {
  const saved = store.get('checkboxes', {});
  document.querySelectorAll('.todo input[type="checkbox"]').forEach((cb, idx) => {
    const key = cbKey(cb);
    if (saved[key] !== undefined) cb.checked = !!saved[key];
    cb.addEventListener('change', () => {
      const cur = store.get('checkboxes', {});
      cur[key] = cb.checked;
      store.set('checkboxes', cur);
      updateOverallCompletion();
    });
  });
  updateOverallCompletion();
}

function cbKey(cb) {
  // Build a unique key based on day + item text
  const li = cb.closest('li');
  const ul = cb.closest('ul');
  const day = ul.getAttribute('data-day-list');
  const text = li.textContent.trim();
  return `${day}::${text}`;
}

// ---------- Inline edit for tasks ----------
function enableInlineEditing() {
  document.querySelectorAll('.todo li').forEach(li => {
    li.addEventListener('dblclick', () => {
      const label = li.querySelector('label');
      if (!label) return;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = label.textContent.trim();
      input.className = 'inline-editor';
      li.replaceChild(input, label);
      input.focus();
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') commit();
      });
      input.addEventListener('blur', commit);
      function commit() {
        const newLabel = document.createElement('label');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        // Keep existing checkbox state if present in storage
        const oldKey = cbKey(li.querySelector('input[type="checkbox"]') || {closest:()=>li});
        const saved = store.get('checkboxes', {});
        const wasChecked = saved[oldKey] || false;
        cb.checked = wasChecked;
        newLabel.appendChild(cb);
        newLabel.appendChild(document.createTextNode(' ' + input.value));
        li.replaceChild(newLabel, input);
        // Re-register listeners
        cb.addEventListener('change', () => {
          const cur = store.get('checkboxes', {});
          const key = cbKey(cb);
          cur[key] = cb.checked;
          store.set('checkboxes', cur);
          updateOverallCompletion();
        });
        updateOverallCompletion();
      }
    });
  });
}

// ---------- Journal persistence ----------
function bindJournal(id) {
  const el = document.getElementById(id);
  const saved = store.get('journal_'+id, '');
  el.value = saved;
  el.addEventListener('input', () => store.set('journal_'+id, el.value));
}

function exportNotes() {
  const data = {
    created_at: new Date().toISOString(),
    journal: {
      memo: store.get('journal_journal-memo', ''),
      experiment: store.get('journal_journal-experiment', ''),
      bridge: store.get('journal_journal-bridge', '')
    },
    checkboxes: store.get('checkboxes', {}),
    completion: store.get('overallCompletion', 0)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mindlab_week1_export.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function clearNotes() {
  if (!confirm('Clear journal and checklist data? This cannot be undone.')) return;
  ['journal_journal-memo', 'journal_journal-experiment', 'journal_journal-bridge', 'checkboxes', 'overallCompletion']
    .forEach(k => localStorage.removeItem(k));
  location.reload();
}

// ---------- Tone generator (Web Audio API) ----------
let audioCtx = null, osc = null, gain = null, panner = null;
function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    osc = audioCtx.createOscillator();
    gain = audioCtx.createGain();
    panner = audioCtx.createStereoPanner();
    osc.type = 'sine';
    osc.frequency.value = 440;
    gain.gain.value = 0.0;
    osc.connect(panner).connect(gain).connect(audioCtx.destination);
    osc.start();
  }
}

function setFrequency(val) {
  ensureAudio();
  osc.frequency.setValueAtTime(Number(val), audioCtx.currentTime);
}

function setPan(val) {
  ensureAudio();
  panner.pan.setValueAtTime(Number(val), audioCtx.currentTime);
}

function startTone() {
  ensureAudio();
  gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
}

function stopTone() {
  if (!gain || !audioCtx) return;
  gain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.05);
}

// ---------- Pomodoro ----------
let intervalId = null;
let remaining = 25*60; // seconds
function formatTime(s) {
  const m = Math.floor(s/60);
  const r = s % 60;
  return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
}

function setMode(mode) {
  const focusMin = Number(document.getElementById('focus-min').value) || 25;
  const breakMin = Number(document.getElementById('break-min').value) || 5;
  remaining = (mode === 'focus' ? focusMin : breakMin) * 60;
  document.getElementById('time-display').textContent = formatTime(remaining);
  document.getElementById('mode').value = mode;
}

function startTimer() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      const nextMode = document.getElementById('mode').value === 'focus' ? 'break' : 'focus';
      setMode(nextMode);
      const ding = new AudioContext();
      const o = ding.createOscillator();
      const g = ding.createGain();
      o.type = 'triangle'; o.frequency.value = 880;
      g.gain.value = 0.05;
      o.connect(g).connect(ding.destination);
      o.start(); setTimeout(()=>{o.stop(); ding.close();}, 350);
    }
    document.getElementById('time-display').textContent = formatTime(remaining);
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  pauseTimer();
  setMode(document.getElementById('mode').value);
}

// ---------- Quick add boxes ----------
function addQuickAddInputs() {
  document.querySelectorAll('details .day-content').forEach(dc => {
    const day = dc.parentElement.getAttribute('data-day');
    const wrap = document.createElement('div');
    wrap.className = 'row';
    wrap.style.marginTop = '6px';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add a custom task and press Enter…';
    input.style.flex = '1';
    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.addEventListener('click', () => addTask(day, input));
    input.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter') addTask(day, input);
    });
    wrap.appendChild(input);
    wrap.appendChild(btn);
    dc.appendChild(wrap);
  });
}
function addTask(day, inputEl) {
  const text = (inputEl.value || '').trim();
  if (!text) return;
  const ul = document.querySelector(`[data-day-list="${day}"]`);
  const li = document.createElement('li');
  const label = document.createElement('label');
  const cb = document.createElement('input');
  cb.type = 'checkbox';
  label.appendChild(cb);
  label.appendChild(document.createTextNode(' ' + text));
  li.appendChild(label);
  ul.appendChild(li);
  inputEl.value = '';
  // rebind events
  cb.addEventListener('change', () => {
    const cur = store.get('checkboxes', {});
    const key = `${day}::${text}`;
    cur[key] = cb.checked;
    store.set('checkboxes', cur);
    updateOverallCompletion();
  });
  enableInlineEditing();
  updateOverallCompletion();
}

// ---------- Init ----------
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Checkboxes + edit
  loadCheckboxes();
  enableInlineEditing();
  addQuickAddInputs();

  // Journal binding
  ['journal-memo','journal-experiment','journal-bridge'].forEach(bindJournal);
  document.getElementById('export-json').addEventListener('click', exportNotes);
  document.getElementById('clear-notes').addEventListener('click', clearNotes);

  // Tone generator
  const freq = document.getElementById('freq');
  const label = document.getElementById('freq-label');
  freq.addEventListener('input', () => {
    label.textContent = freq.value;
    setFrequency(freq.value);
  });
  document.getElementById('tone-start').addEventListener('click', startTone);
  document.getElementById('tone-stop').addEventListener('click', stopTone);
  document.querySelectorAll('.pan-btn').forEach(b => b.addEventListener('click', ()=> setPan(b.dataset.pan)));

  // Timer
  setMode('focus');
  document.getElementById('mode').addEventListener('change', (e)=> setMode(e.target.value));
  document.getElementById('start-pomo').addEventListener('click', startTimer);
  document.getElementById('pause-pomo').addEventListener('click', pauseTimer);
  document.getElementById('reset-pomo').addEventListener('click', resetTimer);
});
