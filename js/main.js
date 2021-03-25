const toggleBar = document.querySelector('.toggle-bar');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social');

toggleBar.addEventListener('click', () => {
  toggleBar.classList.toggle('active');
  nav.classList.toggle('active');
  social.classList.toggle('active');
});
