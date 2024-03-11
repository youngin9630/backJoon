"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const [n, a, b] = fs
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split("\n");
const aInputArr = a.trim().split(" ");
const bInputArr = b.trim().split(" ");
// transform
const transformedN = parseInt(n);
const transformedA = aInputArr.map((el) => parseInt(el));
const transformedB = bInputArr.map((el) => parseInt(el));
const _sortArray = (type, arr) => {
    if (type === "ASC") {
        return arr.sort((a, b) => a - b);
    }
    else if (type === "DESC") {
        return arr.sort((a, b) => b - a);
    }
    else {
        throw new Error("Invalid type");
    }
};
const sortedA = _sortArray("ASC", transformedA);
const sortedB = _sortArray("DESC", transformedB);
let result = 0;
for (let i = 0; i < transformedN; i++) {
    result += sortedA[i] * sortedB[i];
}
console.log(result);
