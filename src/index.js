import './style/style.css';
import {homeContent} from './javascript/home.js';
import {menuContent} from './javascript/menu.js'

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const content = document.getElementById('content');

removeAllChildNodes(content);

const home = homeContent();
const menu = menuContent();
content.appendChild(home);
content.appendChild(menu);
