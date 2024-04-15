import './style/style.css';
import { homeContent } from './javascript/home.js';
import { menuContent } from './javascript/menu.js';
import { contactContent } from './javascript/contact.js';

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const tabSwitch = {
  'home': homeContent(),
  'menu': menuContent(),
  'contact': contactContent()
};

const content = document.getElementById('content');
const navbar = document.querySelector('.navbar');

content.appendChild(homeContent());

navbar.addEventListener('click', e => {
  const button = e.target;
  if (!button.classList.contains('selected')) {
    const oldSection = document.querySelector('.selected');
    oldSection.classList.remove('selected');
    button.classList.add('selected');
    removeAllChildNodes(content);
    content.appendChild(tabSwitch[button.id]);
  }
});
