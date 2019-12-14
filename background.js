const body = document.querySelector("body");

const IMG_NUMBER = 5;
const image = new Image();

function setImagePositionCenter(image){
    const width = image.width;
    const height = image.height;
    const left = (body.clientWidth - width) / 2;
    const top = (body.clientHeight - height) / 2;
    image.style.left = `${left}px`;
    image.style.top = `${top}px`;
}

function handleImageLoad(event){
    body.appendChild(event.target);
    setImagePositionCenter(event.target);
}

function paintImage(imgNumber){
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    image.addEventListener("load", handleImageLoad);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function onResize(){
    setImagePositionCenter(image);
}

function init(){
    const randomNumber = getRandom();
    window.addEventListener("resize", onResize);
    paintImage(randomNumber);
}

init();