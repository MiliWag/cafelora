import './style.css';

console.log('funguju!');

const nav = document.querySelector('#nav-btn');

nav.addEventListener('click', (e) => {
  const navigation = document.querySelector('nav');
  navigation.classList.toggle('nav-closed');
});
