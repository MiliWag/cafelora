'use strict';
import './style.css';

let props = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

export const Layer = (props) => {
  return `<h3>Cappuccino</h3>
<div class="layer">
<div class="layer__color" style="background-color: ${props.color}"></div>
<div class="layer__label">${props.label}</div>
</div>`;
};

const layer = document.querySelector('.drink__info');
layer.innerHTML = Layer(props);
