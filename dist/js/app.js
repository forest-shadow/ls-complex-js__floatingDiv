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
        var app = require("./func.js");

        app.consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);
    }, { "./func.js": 2 }], 2: [function (require, module, exports) {
        var consoleRec = function consoleRec(array, cnt) {
            var arrayLength = array.length;

            console.log(array[cnt]);
            cnt++;

            if (arrayLength > cnt) {
                consoleRec(array, cnt);
            }
        };

        module.exports = { consoleRec: consoleRec };
    }, {}] }, {}, [1]);