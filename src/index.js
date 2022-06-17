import createHeader from "./header";
import createMain from "./main";
import createMenu from "./menu";
import createFooter from "./footer";

const content = document.body;
bodyStyle(content);
content.appendChild(createHeader());
//content.appendChild(createMain());
content.appendChild(createMenu());
content.appendChild(createFooter());


function bodyStyle(content) {
    content.style.margin = "0px";
    content.style.padding = "0px";
    content.style.height = "100vh";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "space-between";
    content.style.alignItems = "center";
}