// Theme toggle (persists)
(function(){
  const key = 'omar-theme';
  const initial = localStorage.getItem(key);
  if (initial) document.documentElement.setAttribute('data-theme', initial);
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (cur === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem(key, cur);
  });
})();

// Copy email helper
function copyEmail(){
  const email = 'omarshafie05@gmail.com';
  navigator.clipboard.writeText(email).then(()=>{
    alert('Email copied to clipboard: ' + email);
  });
}