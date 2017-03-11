let activeElement;
let offsetX = 0,
    offsetY = 0,
    layerX = 0,
    layerY = 0;

let mDown = (e) => {
    console.log('mouse click');
    activeElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    layerX = e.layerX;
    layerY = e.layerY;
};
let mUp = (e) => {
    console.log('mouse keydown');
    activeElement = null;
};
let mMove = (e) => {
    console.log('moving cursor', e);
    if(activeElement) {
        activeElement.style.top = (e.clientY - layerY) + 'px';
        activeElement.style.left = (e.clientX - layerX) + 'px';
    }
};
module.exports = { mDown, mUp, mMove };