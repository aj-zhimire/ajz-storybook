~~~~~// Tiny JS for mobile menu and reading-time demo (placeholder)
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize word cloud
  initWordCloud("By Doin' -a Sawon's Chemistry Corner.");
});

// Word cloud implementation (lightweight) — updated to link to new page
function initWordCloud(phrase) {
  const container = document.getElementById('wordCloud');
  if (!container) return;

  // configurable palette and size range
  const colors = ['#ef476f','#ffd166','#06d6a0','#118ab2','#073b4c','#f77f00','#9b5de5','#00bbf9'];
  const minSize = 14; // px
  const maxSize = 44; // px

  // split phrase into words but keep contractions and hyphens as part of words
  const words = phrase.split(/\s+/).filter(Boolean);

  // create elements
  container.innerHTML = '';
  words.forEach((w, i) => {
    // wrap each word in a link that opens the under-construction page
    const a = document.createElement('a');
    a.className = 'cloud-link';
    a.href = 'sawon-atoms.html';
    a.setAttribute('aria-label', `Open Sawon's showcase: ${w}`);

    // visual word node
    const span = document.createElement('span');
    span.className = 'cloud-word';
    span.textContent = w;

    // size based on index randomness (repeatable-ish)
    const rand = (Math.abs(hashString(w + i)) % 100) / 100;
    const size = Math.round(minSize + (maxSize - minSize) * rand);
    span.style.fontSize = size + 'px';

    // color
    span.style.color = colors[(Math.abs(hashString(w)) % colors.length)];

    // slight rotation
    const rot = Math.round(-20 + 40 * rand);
    span.style.transform = `rotate(${rot}deg)`;

    // accessibility
    span.setAttribute('aria-hidden', 'true');

    a.appendChild(span);
    container.appendChild(a);
  });

  // No custom click handler required — links navigate to sawon-atoms.html by default
}

// small deterministic hash for simple randomization
function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

// Follow Card Component Module
const FollowCard = {
  isFollowing: false,
  
  init() {
    this.isFollowing = localStorage.getItem('ajz-following') === 'true';
    this.updateUI();
    this.bindEvents();
  },
  
  bindEvents() {
    // Smooth scroll to follow card (now at bottom)
    const followLink = document.querySelector('a[href="#follow-card"]');
    if (followLink) {
      followLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('follow-card').scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Center the card in viewport for better visibility
        });
      });
    }
  },
  
  toggle() {
    if (!this.isFollowing) {
      this.startFollowing();
    } else {
      this.stopFollowing();
    }
  },
  
  startFollowing() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          this.showWelcomeNotification();
          this.setFollowing(true);
        } else {
          this.fallbackToBookmark();
        }
        this.updateUI();
      });
    } else {
      this.fallbackToBookmark();
    }
  },
  
  stopFollowing() {
    this.setFollowing(false);
    this.updateUI();
    this.showUnfollowNotification();
  },
  
  setFollowing(status) {
    this.isFollowing = status;
    localStorage.setItem('ajz-following', status.toString());
    if (status) {
      localStorage.setItem('ajz-follow-date', new Date().toISOString());
    }
  },
  
  showWelcomeNotification() {
    new Notification('AJZ Storybook', {
      body: "You're now following! You'll get notified of new stories and discoveries.",
      icon: 'favicon.ico',
      tag: 'follow-welcome'
    });
  },
  
  showUnfollowNotification() {
    if (Notification.permission === 'granted') {
      new Notification('AJZ Storybook', {
        body: "You've unfollowed. You can follow again anytime!",
        icon: 'favicon.ico',
        tag: 'unfollow-confirm'
      });
    }
  },
  
  fallbackToBookmark() {
    this.setFollowing(true);
    localStorage.setItem('ajz-follow-method', 'bookmark');
    
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(document.title, window.location.href, "");
    } else if (window.external && ('AddFavorite' in window.external)) {
      window.external.AddFavorite(window.location.href, document.title);
    } else {
      alert('Following via bookmark! Press Ctrl+D (Cmd+D on Mac) to save this page.');
    }
    this.updateUI();
  },
  
  updateUI() {
    const followBtn = document.getElementById('followBtn');
    const followIcon = document.getElementById('followIcon');
    const followText = document.getElementById('followText');
    const followStatus = document.getElementById('followStatus');
    
    if (!followBtn) return;
    
    if (this.isFollowing) {
      followIcon.textContent = '✓';
      followText.textContent = 'Following';
      followBtn.classList.add('following');
      followStatus.textContent = "You'll be notified of new content!";
      followStatus.className = 'follow-status active';
    } else {
      followIcon.textContent = '⭐';
      followText.textContent = 'Follow';
      followBtn.classList.remove('following');
      followStatus.textContent = '';
      followStatus.className = 'follow-status';
    }
  },
  
  // Method to notify followers (call this when you publish new content)
  notifyFollowers(title, message) {
    if (this.isFollowing && Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        icon: 'favicon.ico',
        tag: 'new-content',
        requireInteraction: true
      });
    }
  }
};

// Global function for the onclick handler
function toggleFollow() {
  FollowCard.toggle();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  FollowCard.init();
});