import '../style/home.css';
import Arms from '../img/normandie.svg';

const homeContent = function () {
  const homeDiv = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Chez Odin';
  homeDiv.appendChild(header);
  const paragraphs = [
    'Welcome to Chez Odin, the restaurant with a Norman flair',
    'Where French meets Scandinavian!'
  ];

  paragraphs.forEach((paragraph) => {
    const para = document.createElement('p');
    para.textContent = paragraph;
    homeDiv.appendChild(para);
  });
  const coatOfArms = new Image();
  coatOfArms.src = Arms;
  homeDiv.appendChild(coatOfArms);
  homeDiv.classList.add('home-content');
  return homeDiv;
}

export { homeContent };
