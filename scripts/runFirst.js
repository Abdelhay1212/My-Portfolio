// Check for dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
} else {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
}
