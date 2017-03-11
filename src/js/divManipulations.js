const randomMethods       = require('./randomMethods.js');

let floatingDivCnt = 0;

function addFloatingDiv () {
    if(document.querySelectorAll('.floatingDiv').length)
        floatingDivCnt++;
    let div = document.createElement('div');
    div.classList.add('floatingDiv', 'floatingDiv' + floatingDivCnt);
    div.id = 'floatingDiv';
    div.style.top = randomMethods.getRandomDivCoords().coordY + 'px';
    div.style.left = randomMethods.getRandomDivCoords().coordX + 'px';
    div.style.width = randomMethods.getRandomDivSizes().randomWidth + 'px';
    div.style.height = randomMethods.getRandomDivSizes().randomHeight + 'px';
    div.style.background = randomMethods.getRandomColor();

    document.querySelector('.div-container').appendChild(div);
    console.log(div.classList);
};

function removeFloatingDivs() {
    let floatingDivs = document.querySelectorAll('.floatingDiv');
    if (floatingDivs) {
        floatingDivs.forEach(function(div) {
            div.remove();
        })
    }
}

module.exports = { addFloatingDiv, removeFloatingDivs };