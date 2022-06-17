import './content.css';
export default createContact;

const text1 = "Contact Goik's Restaurant!";
const text2 = "Map";
const text3 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137126.52665332388!2d18.43080811907896!3d74.
42445404995105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45bdf181870a1d07%3A0x927c85745dee2378!2sBear%20Island!5e0!3
m2!1sen!2sbr!4v1655477332311!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
const text4 = "Did I already said that this is a fake restaurant? Read footer. Phone: +AA (BB) CCCCC-DDDD - Call us and make a reservation!"
const text5 = `If you liked what did you see, send me a message at <a href="https://github.com/Goik28">Goik28</a> on github!`

function createContact() {
    const contact = document.createElement('main');
    const title = document.createElement('h1');
    title.textContent = text1;
    const groupMap = document.createElement("div");
    groupMap.style.textAlign = "center";
    const flair1 = document.createElement('h2');
    flair1.textContent = text2;
    const flair2 = document.createElement('p');
    flair2.innerHTML = text3;
    groupMap.appendChild(flair1);
    groupMap.appendChild(flair2);
    const flair3 = document.createElement('p');
    flair3.textContent = text4;
    const flair4 = document.createElement('p');
    flair4.innerHTML = text5;
      
    contact.appendChild(title);
    contact.appendChild(groupMap);
    contact.appendChild(flair3);
    contact.appendChild(flair4);
    return contact;
}