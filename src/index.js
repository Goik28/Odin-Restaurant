import './index.css';
import createHeader from "./Header/header";
import createAbout from "./Content/about";
import createMenu from "./Content/menu";
import createContact from "./Content/contact";
import createFooter from "./Footer/footer";

const content = document.body;
content.appendChild(createHeader());
content.appendChild(createAbout());
content.appendChild(createFooter());

const about = document.getElementById("about");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const mainAbout = createAbout();
const mainMenu = createMenu();
const mainContact = createContact();

about.addEventListener("click", () => {
    content.replaceChild(mainAbout, document.getElementsByTagName("main")[0]);
});
menu.addEventListener("click", () => {
    content.replaceChild(mainMenu, document.getElementsByTagName("main")[0]);
});
contact.addEventListener("click", () => {
    content.replaceChild(mainContact, document.getElementsByTagName("main")[0]);
});