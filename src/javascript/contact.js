import '../style/contact.css';
import Profile from '../img/profile.jpg';

const contactPerson = function({name, photo, position, email, phone}) {
  const section = document.createElement('div');
  const contactName = document.createElement('h2');
  contactName.textContent = name;
  section.appendChild(contactName);

  const contactPosition = document.createElement('div');
  contactPosition.textContent = position;
  section.appendChild(contactPosition);

  section.appendChild(photo);

  const emailAdress = document.createElement('div');
  emailAdress.textContent = `Email: ${email}`;
  section.appendChild(emailAdress);

  const phoneNumber = document.createElement('div');
  phoneNumber.textContent = `Phone: ${phone}`;
  section.appendChild(phoneNumber);
  
  section.classList.add('contact-person-section');
  return section;
}

const profilePic = function () {
  const pic = new Image();
  pic.src = Profile;
  return pic;
}


const ceo = contactPerson(
  {
    name: 'Jean-Marie Arouet',
    photo: profilePic(),
    position: 'Owner',
    email: 'jma@chezodin.com',
    phone: '06 32 54 32 45'
  }
);

const chef = contactPerson(
  {
    name: 'Rollo',
    photo: profilePic(),
    position: 'Chef',
    email: 'rollo@chezodin.com',
    phone: '06 33 54 32 45'
  }
);

const contactContent = function () {
  const contactDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = 'Contact';
  contactDiv.appendChild(header);
  
  contactDiv.appendChild(ceo);
  contactDiv.appendChild(chef);

  contactDiv.classList.add('contact-content');
  return contactDiv;
}

export { contactContent };
