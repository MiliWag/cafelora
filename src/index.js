import './style.css';
import { Layer } from './Layer/index';
import { Drink } from './Drink/index';

console.log('funguju!');

// rozbalovací menu
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

// Tlačítko na objednání produktu

const order = document.querySelector('.order-btn');
const selectedOrder = document.querySelector('.drink__cup');
let isOrdered = true;

order.addEventListener('click', (e) => {
  if (isOrdered) {
    order.textContent = 'Zrušit';
    selectedOrder.classList.add('drink__cup--selected');
    isOrdered = false;
  } else {
    order.textContent = 'Objednat';
    selectedOrder.classList.remove('drink__cup--selected');
    isOrdered = true;
  }
});

// Seznam ingrediencí
/*let layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

layers.forEach((layer) => {
  const appElm = document.querySelector('.drink__info');
  appElm.innerHTML += Layer(layer);
});*/
