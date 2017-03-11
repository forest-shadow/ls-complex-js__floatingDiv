const   divManipulations        = require('./divManipulations.js'),
        mouseEventsCallbacks    = require('./mouseEventsCallbacks');

document.querySelector('#addDiv').addEventListener('click', () => divManipulations.addFloatingDiv() );
document.querySelector('#removeDivs').addEventListener('click', () => divManipulations.removeFloatingDivs() );
document.addEventListener('mousemove', mouseEventsCallbacks.mMove);