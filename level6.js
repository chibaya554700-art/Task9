(() => {
  const CORRECT = 2;
  const KEY = 'level6_complete';

  window.checkDoor = (n) => {
    const res = document.getElementById('result');
    if (!res) return;
    if (n === CORRECT) {
      res.className = 'success-message';
      res.textContent = '🎉 Congratulations! You found the correct door! You completed all 6 levels! 🏆';
      localStorage.setItem(KEY, '1');
    } else {
      res.className = 'error-message';
      res.textContent = '❌ Wrong door! Try again!';
      
      res.style.transform = 'scale(1.03)';
      setTimeout(() => (res.style.transform = ''), 160);
    }
  };

  
  window.addEventListener('keydown', (e) => {
    if (['1', '2', '3'].includes(e.key)) checkDoor(Number(e.key));
  });
})();