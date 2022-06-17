import createHeader from "./header";
import createAbout from "./about";
import createMenu from "./menu";
import createContact from "./contact";
import createFooter from "./footer";

const content = document.body;
bodyStyle(content);
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

function bodyStyle(content) {
    content.style.margin = "0px";
    content.style.padding = "0px";
    content.style.height = "100vh";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "space-between";
    content.style.alignItems = "center";
}