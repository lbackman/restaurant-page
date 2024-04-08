console.log('home page');

const homeContent = function () {
  const homeDiv = document.createElement('div');
  const paragraphs = [
    'Welcome to Chez Odin, the restaurant with a Norman flair',
    'Where French meets Scandinavian!'
  ];

  paragraphs.forEach((paragraph) => {
    const para = document.createElement('p');
    para.textContent = paragraph;
    homeDiv.appendChild(para);
  });

  return homeDiv;
}

export { homeContent };
