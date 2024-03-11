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
const input = fs
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split("\n");
const [n, m] = input[0].split(" ").map((el) => parseInt(el));
let brandPrice = [];
for (let i = 0; i < m; i++) {
    brandPrice.push({
        packagePrice: parseInt(input[i + 1].split(" ")[0]),
        signlePrice: parseInt(input[i + 1].split(" ")[1]),
    });
}
let minPackagePrice = brandPrice[0].packagePrice;
let minSignlePrice = brandPrice[0].signlePrice;
brandPrice.forEach((el) => {
    if (el.packagePrice < minPackagePrice) {
        minPackagePrice = el.packagePrice;
    }
    if (el.signlePrice < minSignlePrice) {
        minSignlePrice = el.signlePrice;
    }
});
let dividedN = n / 6;
let dividedNRemain = n % 6;
let totalOfPackageAndSignlePrice = 0;
let totalOfSignlePrice = 0;
let totalOfFloorPrice = 0;
totalOfPackageAndSignlePrice =
    minPackagePrice * Math.floor(dividedN) + minSignlePrice * dividedNRemain;
totalOfSignlePrice = minSignlePrice * n;
totalOfFloorPrice = minPackagePrice * Math.ceil(dividedN);
const priceArr = [
    totalOfPackageAndSignlePrice,
    totalOfSignlePrice,
    totalOfFloorPrice,
];
let minVal = priceArr[0];
priceArr.forEach((el) => {
    if (el < minVal) {
        minVal = el;
    }
});
let result = minVal;
console.log(result);
