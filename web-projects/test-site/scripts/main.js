
/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!'; 

//events example
document.querySelector('html').onclick = function() {
    alert('ouch! stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/bright-spring-view-cameo-island-260nw-1048185397.webp") {
        myImage.setAttribute('src', 'images/index.jpeg');
    } else {
        myImage.setAttribute('src', 'images/bright-spring-view-cameo-island-260nw-1048185397.webp');
    }
    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please Enter your Name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

/*
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/
myButton.onclick = function() {
    setUserName();
}
