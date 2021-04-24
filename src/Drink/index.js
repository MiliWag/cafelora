'use strict';

import './style.css';
import { Layer } from '../Layer/index';

let props = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

export const Drink = (props) => {
  const drinkList = document.querySelector('.drinks-list');

  const drink = document.createElement('div');
  drink.className = 'drink';
  drinkList.appendChild(drink);

  const drinkProduct = document.createElement('div');
  drinkProduct.className = 'drink__product';
  drink.appendChild(drinkProduct);

  const drinkCup = document.createElement('div');
  drinkCup.className = 'drink__cup';
  drinkProduct.appendChild(drinkCup);

  const img = document.createElement('img');
  img.src = `/assets/cups/${props.id}.png`;
  drinkCup.appendChild(img);

  const drinkInfo = document.createElement('div');
  drinkInfo.className = 'drink__info';
  drinkProduct.appendChild(drinkInfo);

  const h3Elm = document.createElement('h3');
  h3Elm.textContent = `${props.name}`;
  drinkInfo.appendChild(h3Elm);

  const drinkControls = document.createElement('div');
  drinkControls.className = 'drink__controls';
  drink.appendChild(drinkControls);

  // tlačítko objednávky
  const orderButton = document.createElement('button');
  orderButton.className = 'order-btn';
  orderButton.textContent = 'Objednat';
  drinkControls.appendChild(orderButton);

  // funkce, která mění Objednat na Zrušit
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

  props.layers.forEach((layer) => {
    const appElm = document.querySelector('.drink__info');
    appElm.innerHTML += Layer(layer);
  });

  return drink;
};

Drink(props);

/* `<div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  </div>`*/
