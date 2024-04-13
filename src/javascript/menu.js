import '../style/menu.css';

const menuCategory = function({header, items}) {
  const section = document.createElement('div');
  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = header;
  section.appendChild(sectionHeader);

  items.forEach((menuItem) => {
    const menuRow = document.createElement('p');
    const item = document.createElement('span');
    const price = document.createElement('span');
    [item.textContent, price.textContent] = menuItem;
    menuRow.appendChild(item);
    menuRow.appendChild(document.createElement('div'));
    menuRow.appendChild(price);
    section.appendChild(menuRow);
  });

  section.classList.add('menu-section');
  return section;
}

const starters = menuCategory(
  {
    header: 'Starters',
    items: [
      ['Omelette de la Mère Poulard', '€6.50'],
      ['Moules à la normande', '€7.00'],
      ['Tarte au Camembert', '€8.50']
    ]
  }
);

const mains = menuCategory(
  {
    header: 'Main Dishes',
    items: [
      ['Poule au blanc', '€12.50'],
      ['Tripes à la mode de Caen', '€14.00'],
      ['Sole à la meunière', '€14.00']
    ]
  }
);

const desserts = menuCategory(
  {
    header: 'Desserts',
    items: [
      ['Tatin de pommes au calvados', '€7.50'],
      ['Tarte normande', '€8.00'],
      ['Plateau de fromage', '€12.00']
    ]
  }
);

const drinks = menuCategory(
  {
    header: 'Drinks',
    items: [
      ['White wine', '€4.50'],
      ['Red wine', '€4.50'],
      ['Calvados', '€5.00']
    ]
  }
);

const menuContent = function () {
  const menuDiv = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = 'Menu';
  menuDiv.appendChild(header);
  menuDiv.appendChild(starters);
  menuDiv.appendChild(mains);
  menuDiv.appendChild(desserts);
  menuDiv.appendChild(drinks);
  menuDiv.classList.add('menu-content');
  return menuDiv;
}

export { menuContent };
