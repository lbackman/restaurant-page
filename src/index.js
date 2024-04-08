import './style.css';
import {homeContent} from './home.js';

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const content = document.getElementById('content');

removeAllChildNodes(content);

const home = homeContent();
content.appendChild(home);
