(() => {
  const KEY = 'level5_coins', $ = id => document.getElementById(id);
  let coins = parseInt(localStorage.getItem(KEY), 10) || 0;

  function render() {
    const el = $('coinDisplay');
    if (el) el.textContent = `🪙 ${coins}`;
  }

  function save() { localStorage.setItem(KEY, coins); }

  window.increaseCoins = () => {
    coins++;
    save();
    render();
    const el = $('coinDisplay'); if (el) { el.style.transform = 'scale(1.15)'; setTimeout(()=>el.style.transform='scale(1)',150); }
  };

  window.decreaseCoins = () => {
    if (coins <= 0) return alert('Cannot go below 0 coins!');
    coins--;
    save();
    render();
    const el = $('coinDisplay'); if (el) { el.style.transform = 'scale(0.9)'; setTimeout(()=>el.style.transform='scale(1)',150); }
  };


  window.addEventListener('keydown', e => {
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
    if (e.key === '+' || e.key === 'Add' || e.key === 'ArrowUp') increaseCoins();
    if (e.key === '-' || e.key === 'Subtract' || e.key === 'ArrowDown') decreaseCoins();
  });

  
  const disp = $('coinDisplay');
  if (disp) disp.addEventListener('dblclick', () => {
    if (confirm('Reset coins to 0?')) { coins = 0; save(); render(); }
  });

  render();
})();