import mainPizza from './Assets/main_pizza.jpg';
export default createMain;

const text1 = "Welcome to Goik's Restaurant";
const text2 = "We are a brazilian pizzeria!!"
const text3 = "You should check our menu and place an order to see how we, brazilians, revolutionized the art of making pizza!";
const text4 = "Our pizzas contains an abundance of fresh selected ingredients, carefully harvested by the hands of the most beautiful sambistas girls."
const text5 = "Every pizza is made by Tonhão, our amazing pizzaiolo! His fairy's hands can arrange the toppings in a way that everybody admires.";
const text6 = `Photo by <a href="https://unsplash.com/es/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a>
 on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`

function createMain() {
    const main = document.createElement('main');
    const title = document.createElement('h1');
    title.textContent = text1;
    const flair1 = document.createElement('h2');
    flair1.textContent = text2;
    const flair2 = document.createElement('p');
    flair2.textContent = text3;
    const flair3 = document.createElement('p');
    flair3.textContent = text4;
    const flair4 = document.createElement('p');
    flair4.textContent = text5;
    const flair5 = document.createElement('div');
    const img = new Image();
    img.src = mainPizza;
    img.style.width = "600px"
    flair5.appendChild(img);
    const credit = document.createElement('div');
    credit.innerHTML = text6;
    credit.style.textAlign = "center";    
    flair5.appendChild(credit);
  
    main.appendChild(title);
    main.appendChild(flair1);
    main.appendChild(flair2);
    main.appendChild(flair3);
    main.appendChild(flair4);
    main.appendChild(flair5);
    mainStyle(main);
    return main;
}

function mainStyle(main) {
    main.style.flex = "1 1 auto";
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "space-around";
    main.style.alignItems = "center";
    main.style.textAlign = "justify";
}