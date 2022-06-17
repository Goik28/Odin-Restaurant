import './content.css';
import imgFlavor1 from '../Assets/pizza-calabresa.jpg';
import imgFlavor2 from '../Assets/pizza-frango.jpg';
import imgFlavor3 from '../Assets/pizza-mineira.jpg';
export default createMenu;

const text1 = "Goik's Restaurant menu";
const flavor1 = "Calabresa com cebola"
const ingred1 = "Tomato sauce, cheese, calabrian sausage, onions and black olives.";
const flavor2 = "Frango com catupiry"
const ingred2 = "Tomato sauce, cheese, shredded chicken, catupiry cheese and olives.";
const flavor3 = "Mineira"
const ingred3 = "Tomato sauce, cheese, corn, pea, heart of palm and catupiry cheese.";
const flavor4 = "Strogonoff"
const ingred4 = "Tomato sauce, cheese, strognoff and potato straws.";
const flavor5 = "Sushi"
const ingred5 = "Tomato sauce, cheese and shame of my people.";


function createMenu() {
    const menu = document.createElement('main');
    const title = document.createElement('h1');
    title.textContent = text1;

    //pizza calabresa
    const pizza1 = document.createElement('div');
    pizzaStyle(pizza1);
    const descr1 = document.createElement('h4');
    descr1.textContent = flavor1;
    pizza1.appendChild(descr1);
    const descr11 = document.createElement('p');
    descr11.textContent = ingred1;
    pizza1.appendChild(descr11);
    const imgPizza1 = new Image();
    imgPizza1.src = imgFlavor1;
    imgPizza1.style.width = "250px";
    pizza1.appendChild(imgPizza1);

    //pizza frango
    const pizza2 = document.createElement('div');
    pizzaStyle(pizza2);
    const descr2 = document.createElement('h4');
    descr2.textContent = flavor2;
    pizza2.appendChild(descr2);
    const descr21 = document.createElement('p');
    descr21.textContent = ingred2;
    pizza2.appendChild(descr21);
    const imgPizza2 = new Image();
    imgPizza2.src = imgFlavor2;
    imgPizza2.style.width = "250px";
    pizza2.appendChild(imgPizza2);

    //pizza mineira
    const pizza3 = document.createElement('div');
    pizzaStyle(pizza3);
    const descr3 = document.createElement('h4');
    descr3.textContent = flavor3;
    pizza3.appendChild(descr3);
    const descr31 = document.createElement('p');
    descr31.textContent = ingred3;
    pizza3.appendChild(descr31);
    const imgPizza3 = new Image();
    imgPizza3.src = imgFlavor3;
    imgPizza3.style.width = "250px";
    pizza3.appendChild(imgPizza3);

    menu.appendChild(title);
    menu.appendChild(pizza1);
    menu.appendChild(pizza2);
    menu.appendChild(pizza3);
    return menu;
}

function pizzaStyle(pizza){
pizza.style.width = "600px";
pizza.style.border = "solid black 2px";
pizza.style.borderLeftWidth = "0px";
pizza.style.borderRightWidth = "0px";
pizza.style.paddingLeft = "10px";
pizza.style.paddingRight = "10px";
pizza.style.paddingBottom = "10px";
pizza.style.textAlign = "center";
pizza.style.marginTop = "-2px";
}