function getRandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let getRandomDivSizes = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    return {
        randomWidth: getRandomInteger(1, windowWidth/2),
        randomHeight: getRandomInteger(1, windowHeight/2),
    }
};

let getRandomDivCoords = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    return {
        coordX: getRandomInteger(0, windowWidth),
        coordY: getRandomInteger(0, windowHeight),
    }
};

module.exports = { getRandomColor, getRandomDivSizes, getRandomDivCoords };