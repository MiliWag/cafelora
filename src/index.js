import './style.css';

console.log('funguju!');

const nav = document.querySelector('#nav-btn');
const navigation = document.querySelector('nav');
const allItems = document.querySelectorAll('.nav_link');

nav.addEventListener('click', (e) => {
  navigation.classList.toggle('nav-closed');
});

allItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigation.classList.toggle('nav-closed');
  });
});
