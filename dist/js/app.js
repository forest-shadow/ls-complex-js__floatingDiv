"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var randomMethods = require('./randomMethods.js');

        var floatingDivCnt = 0;

        function addFloatingDiv() {
            if (document.querySelectorAll('.floatingDiv').length) floatingDivCnt++;
            var div = document.createElement('div');
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
            var floatingDivs = document.querySelectorAll('.floatingDiv');
            if (floatingDivs) {
                floatingDivs.forEach(function (div) {
                    div.remove();
                });
            }
        }

        module.exports = { addFloatingDiv: addFloatingDiv, removeFloatingDivs: removeFloatingDivs };
    }, { "./randomMethods.js": 3 }], 2: [function (require, module, exports) {
        var divManipulations = require('./divManipulations.js');

        document.querySelector('#addDiv').addEventListener('click', function () {
            return divManipulations.addFloatingDiv();
        });
        document.querySelector('#removeDivs').addEventListener('click', function () {
            return divManipulations.removeFloatingDivs();
        });
    }, { "./divManipulations.js": 1 }], 3: [function (require, module, exports) {
        function getRandomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var getRandomDivSizes = function getRandomDivSizes() {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            return {
                randomWidth: getRandomInteger(1, windowWidth / 2),
                randomHeight: getRandomInteger(1, windowHeight / 2)
            };
        };

        var getRandomDivCoords = function getRandomDivCoords() {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            return {
                coordX: getRandomInteger(0, windowWidth),
                coordY: getRandomInteger(0, windowHeight)
            };
        };

        module.exports = { getRandomColor: getRandomColor, getRandomDivSizes: getRandomDivSizes, getRandomDivCoords: getRandomDivCoords };
    }, {}] }, {}, [2]);