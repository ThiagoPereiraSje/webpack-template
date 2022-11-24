import './index.css';
import Icon from './img/icon.png';
import { canvas } from './ui/canvas'

function printMe() {
  console.log('Imprima algo diferente!');
}

const div = document.createElement('div');
const icon = new Image();
icon.src = Icon;

const btn = document.createElement('button');
btn.innerText = 'Click here!';
btn.onclick = printMe;

div.appendChild(canvas);
div.appendChild(icon);
div.appendChild(btn);

document.body.appendChild(div);