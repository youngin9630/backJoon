import * as fs from "fs";

const input = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((el) => parseInt(el));

let brandPrice: {
  packagePrice: number;
  signlePrice: number;
}[] = [];

for (let i = 0; i < m; i++) {
  brandPrice.push({
    packagePrice: parseInt(input[i + 1].split(" ")[0]),
    signlePrice: parseInt(input[i + 1].split(" ")[1]),
  });
}

let minPackagePrice: number = brandPrice[0].packagePrice;
let minSignlePrice: number = brandPrice[0].signlePrice;

brandPrice.forEach((el) => {
  if (el.packagePrice < minPackagePrice) {
    minPackagePrice = el.packagePrice;
  }

  if (el.signlePrice < minSignlePrice) {
    minSignlePrice = el.signlePrice;
  }
});

let dividedN: number = n / 6;
let dividedNRemain: number = n % 6;
let totalOfPackageAndSignlePrice: number = 0;
let totalOfSignlePrice: number = 0;
let totalOfFloorPrice: number = 0;

totalOfPackageAndSignlePrice =
  minPackagePrice * Math.floor(dividedN) + minSignlePrice * dividedNRemain;
totalOfSignlePrice = minSignlePrice * n;
totalOfFloorPrice = minPackagePrice * Math.ceil(dividedN);

const priceArr: number[] = [
  totalOfPackageAndSignlePrice,
  totalOfSignlePrice,
  totalOfFloorPrice,
];

let minVal: number = priceArr[0];
priceArr.forEach((el) => {
  if (el < minVal) {
    minVal = el;
  }
});

let result: number = minVal;
console.log(result);
