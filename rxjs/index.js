"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the fromEvent operator
var rxjs_1 = require("rxjs");
// grab button reference
var button = document.getElementById("myButton");
if (!button) {
    console.log("Button not found");
}
else {
    // create an observable of button clicks
    var myObservable = (0, rxjs_1.fromEvent)(button, "click");
}
