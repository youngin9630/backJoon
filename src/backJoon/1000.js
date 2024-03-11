"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
