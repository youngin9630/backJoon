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
const INPUT_FILE = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [startDate, endDate] = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .trim()
    .split("\n")
    .map((date) => {
    const [year, month, day] = date.split(" ").map(Number);
    return { year, month: month - 1, day };
});
const SINGLE_DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
const isLeapYear = (year) => {
    if (year % 400 === 0)
        return true;
    return year % 4 === 0 && year % 100 !== 0;
};
const isCampTooLong = (start, end) => {
    if (end.year - start.year !== 1000)
        return end.year - start.year >= 1000;
    return (start.month < end.month ||
        (start.month === end.month && start.day <= end.day));
};
const countDaysBetweenTwoYears = (startYear, endYear) => {
    let count = 0;
    for (let year = startYear + 1; year < endYear; year += 1) {
        count += isLeapYear(year) ? 366 : 365;
    }
    return count;
};
const countDDayInSameYear = (start, end, isLeapYearBoolean) => {
    const year = isLeapYearBoolean ? 1996 : 1997;
    const diff = new Date(year, end.month, end.day).getTime() -
        new Date(year, start.month, start.day).getTime();
    return diff / SINGLE_DAY_MILLISECONDS;
};
const countDDay = (start, end) => {
    const daysBetweenYears = countDaysBetweenTwoYears(start.year, end.year);
    const daysInTargetYears = start.year === end.year
        ? countDDayInSameYear(start, end, isLeapYear(start.year))
        : countDDayInSameYear(start, { year: 0, month: 11, day: 31 }, isLeapYear(start.year)) +
            countDDayInSameYear({ year: 0, month: 0, day: 1 }, end, isLeapYear(end.year)) +
            1;
    return daysBetweenYears + daysInTargetYears;
};
console.log(isCampTooLong(startDate, endDate)
    ? "gg"
    : `D-${countDDay(startDate, endDate)}`);
