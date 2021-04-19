let counter = 0;

const imageDiv = document.getElementById('imageDiv')
const imgSrc = document.getElementById('imgSrc')
const rightBtn = document.getElementById('rightBtn')
const leftBtn = document.getElementById('leftBtn')
const dotZero = document.getElementById('0')
const dotOne = document.getElementById('1')
const dotTwo = document.getElementById('2')
const dotThree = document.getElementById('3')

rightBtn.addEventListener('click', rightClick)
leftBtn.addEventListener('click', leftClick)
dotZero.addEventListener('click', zeroFunc)
dotOne.addEventListener('click', oneFunc)
dotTwo.addEventListener('click', twoFunc)
dotThree.addEventListener('click', threeFunc)



function zeroFunc() {
    counter = 0;
    loading()
}

function oneFunc() {
    counter = 1;
    loading()
}

function twoFunc() {
    counter = 2;
    loading()
}

function threeFunc() {
    counter = 3;
    loading()
}

function rightClick() {
    console.log('right')
    next();
}

function leftClick() {
    console.log('left')
    prev()
}

function loading() {

    if (counter === 0) {
        // imageDiv.innerHTML = '';
        imgSrc.src = './imgs/333.jpg';
        removeActive();
        dotZero.classList.add('zeroActive')
    } else if (counter == 1) {
        imgSrc.src = './imgs/asia.jpg';
        removeActive();
        dotOne.classList.add('zeroActive')
    } else if (counter == 2) {
        imgSrc.src = './imgs/ny.jpeg';
        removeActive();
        dotTwo.classList.add('zeroActive')
    } else if (counter == 3) {
        imgSrc.src = './imgs/halong.jpg';
        removeActive();
        dotThree.classList.add('zeroActive')
    } else if (counter > 3) {
        counter = 0;
        loading()
    } else if (counter < 0) {
        counter = 3;
        loading()
    }
}

function next() {
    counter++; 
    loading()
}

function prev() {
    counter--;
    loading()
}

function interval() {
    setInterval(function() {next()}, 5000)
}

function removeActive() {
    const dots = document.getElementsByClassName('dot')
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('zeroActive')
    }
}


loading()

// interval()
