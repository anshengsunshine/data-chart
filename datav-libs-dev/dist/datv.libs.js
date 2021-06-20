(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DatavLibsA = factory());
}(this, (function () { 'use strict';

    function random() {
        console.log("random");
    }

    console.log(random());

    var index = data.default.random;

    return index;

})));
