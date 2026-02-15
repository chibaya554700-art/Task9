(() => {
  const input = document.getElementById('nameInput');
  const msg = document.getElementById('message');

  const setMsg = (text, cls) => {
    msg.className = cls || '';
    msg.textContent = text;
  };

  window.validateForm = () => {
    const name = (input.value || '').trim();
    if (!name) return setMsg('❌ Error: Please enter your name!', 'error-message');
    if (name.length < 2) return setMsg('❌ Error: Name is too short.', 'error-message');
    if (!/^[A-Za-z\s'-]+$/.test(name)) return setMsg('❌ Error: Use letters, spaces, \' or - only.', 'error-message');

    localStorage.setItem('level4_name', name); // optional persistence
    setMsg(`✅ Success! Welcome, ${name}! 🎉`, 'success-message');
  };

  input.addEventListener('keypress', e => { if (e.key === 'Enter') validateForm(); });
})();