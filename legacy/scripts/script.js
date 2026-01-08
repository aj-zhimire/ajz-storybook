// Tiny JS for mobile menu and reading-time demo (placeholder)

// Load HTML partials for elements with data-include before other initializations
async function loadIncludes() {
  let hasIncludes = true;
  
  // Keep looping until no more includes are found
  while (hasIncludes) {
    const includes = document.querySelectorAll('[data-include]');
    
    if (includes.length === 0) {
      hasIncludes = false;
      break;
    }
    
    // Process one level at a time
    for (const el of includes) {
      const url = el.getAttribute('data-include');
      if (!url) continue;
      
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        const text = await res.text();
        el.outerHTML = text;
      } catch (err) {
        console.error('❌ Include error:', url, err);
        el.remove(); // Remove failed includes to prevent infinite loop
      }
    }
    
    // Small delay to let DOM settle
    await new Promise(resolve => setTimeout(resolve, 10));
  }
}

// Single initialization after includes are loaded
document.addEventListener('DOMContentLoaded', async () => {
  await loadIncludes();

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
