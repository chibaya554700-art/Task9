
(() => {
  const KEY = 'level3', MAX = 6;
  const d = id => document.getElementById(id);
  const display = d('levelDisplay'), badge = d('levelBadge'), prog = d('levelProgress'), btn = d('levelUpBtn');

  let lvl = parseInt(localStorage.getItem(KEY), 10) || 1;

  function render() {
    if (display) display.textContent = `Level: ${lvl}`;
    if (badge) badge.textContent = `Level ${lvl}/${MAX}`;
    if (prog) prog.style.width = `${Math.round((lvl / MAX) * 100)}%`;
    if (btn) btn.disabled = lvl >= MAX;
  }

  window.levelUp = () => {
    if (lvl < MAX) {
      lvl++;
      localStorage.setItem(KEY, lvl);
      render();
      if (display) { display.style.transform = 'scale(1.15)'; setTimeout(()=>display.style.transform='scale(1)',150); }
    } else {
      alert('Maximum level reached!');
    }
  };

  window.addEventListener('keydown', e => {
    const t = e.target && e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
    if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); levelUp(); }
  });

  if (display) display.addEventListener('dblclick', () => {
    if (confirm('Reset level to 1?')) { lvl = 1; localStorage.setItem(KEY, lvl); render(); }
  });

  // init
  render();
})();