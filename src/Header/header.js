import './header.css'
export default createHeader;

const text1 = "ABOUT";
const text2 = "MENU";
const text3 = "CONTACT";

function createHeader() {
    const header = document.createElement('header');
    const about = document.createElement('div');
    about.textContent = text1;
    const menu = document.createElement('div');
    menu.textContent = text2;
    const contact = document.createElement('div');
    contact.textContent = text3;
    about.id = "about";
    menu.id = "menu";
    contact.id = "contact";

    about.className = "navigation";
    menu.className = "navigation";
    contact.className = "navigation";

    header.appendChild(about);
    header.appendChild(menu);
    header.appendChild(contact);
    return header;
}