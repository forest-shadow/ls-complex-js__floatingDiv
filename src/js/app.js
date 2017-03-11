const   divManipulations    = require('./divManipulations.js');

document.querySelector('#addDiv').addEventListener('click', () => divManipulations.addFloatingDiv() );
document.querySelector('#removeDivs').addEventListener('click', () => divManipulations.removeFloatingDivs() );