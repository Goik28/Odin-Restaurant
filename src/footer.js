export default createFooter;

const text = "This is not a real restaurant -- Created by Goik for the Restaurant project on The Odin Project course";

function createFooter() {
    const footer = document.createElement('footer');
    const description = document.createElement('div');
    description.textContent = text;
    footer.appendChild(description);
    footerStyle(footer);
    return footer;
}

function footerStyle(footer) {    
    footer.style.height="25px";
    footer.style.display="flex";
    footer.style.justifyContent="center";
}