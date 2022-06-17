export default createHeader;

const text1 = "About";
const text2 = "Menu";
const text3 = "Contact";

function createHeader() {
    const header = document.createElement('header');
    const about = document.createElement('div');
    about.textContent = text1;
    const menu = document.createElement('div');
    menu.textContent = text2;
    const contact = document.createElement('div');
    contact.textContent = text3;

    header.appendChild(about);
    header.appendChild(menu);
    header.appendChild(contact);
    headerStyle(header);
    return header;
}

function headerStyle(header) {
    header.style.height = "25px";
    header.style.width = "800px";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
}