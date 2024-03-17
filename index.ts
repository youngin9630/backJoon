// import * as fs from "fs";

// const input = fs
//   .readFileSync("example.txt", "utf-8")
//   .toString()
//   .trim()
//   .split("\n");

// const startDateInput = input[0].split(" ").map((el) => parseInt(el));
// const endDateInput = input[1].split(" ").map((el) => parseInt(el));

// const isLeapYear = (year: number) => {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const calcNumOfLeapYear = (
//   startDateInput: {
//     year: number;
//     month: number;
//     day: number;
//   },
//   endDateInput: {
//     year: number;
//     month: number;
//     day: number;
//   }
// ): number => {
//   let result: number = 0;
//   for (let i = startDateInput.year; i <= endDateInput.year; i++) {
//     if (isLeapYear(i)) {
//       if (startDateInput.year === endDateInput.year) {
//         if (startDateInput.month <= 2 && endDateInput.month > 2) {
//           result++;
//         } else if (startDateInput.month <= 2 && endDateInput.month === 2) {
//           if (endDateInput.day > 28) {
//             result++;
//           }
//         }
//       } else {
//         if (i === startDateInput.year) {
//           if (startDateInput.month <= 2) {
//             result++;
//           }
//         } else if (i === endDateInput.year) {
//           if (endDateInput.month > 2) {
//             result++;
//           } else {
//             if (endDateInput.day > 28) {
//               result++;
//             }
//           }
//         } else {
//           result++;
//         }
//       }
//     }
//   }

//   console.log("result", result);

//   return result;
// };

// const startDate = new Date(
//   startDateInput[0],
//   startDateInput[1] - 1,
//   startDateInput[2]
// );

// const endDate = new Date(endDateInput[0], endDateInput[1] - 1, endDateInput[2]);

// let diff = Math.abs(endDate.getTime() - startDate.getTime());
// diff = Math.ceil(diff / (1000 * 60 * 60 * 24));

// console.log("diff:", diff);

// const result =
//   diff +
//   calcNumOfLeapYear(
//     {
//       year: startDateInput[0],
//       month: startDateInput[1],
//       day: startDateInput[2],
//     },
//     {
//       year: endDateInput[0],
//       month: endDateInput[1],
//       day: endDateInput[2],
//     }
//   );

// if (
//   startDateInput[0] + 1000 <= endDateInput[0] &&
//   startDateInput[1] <= endDateInput[1] &&
//   startDateInput[2] <= endDateInput[2]
// ) {
//   console.log("gg");
// } else {
//   console.log("D-" + result);
// }

import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
interface DateInfo {
  year: number;
  month: number;
  day: number;
}
const [startDate, endDate]: DateInfo[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("\n")
  .map((date: string) => {
    const [year, month, day] = date.split(" ").map(Number);
    return { year, month: month - 1, day };
  });

const SINGLE_DAY_MILLISECONDS: number = 1000 * 60 * 60 * 24;

const isLeapYear = (year: number): boolean => {
  if (year % 400 === 0) return true;
  return year % 4 === 0 && year % 100 !== 0;
};

const isCampTooLong = (start: DateInfo, end: DateInfo): boolean => {
  if (end.year - start.year !== 1000) return end.year - start.year >= 1000;
  return (
    start.month < end.month ||
    (start.month === end.month && start.day <= end.day)
  );
};

const countDaysBetweenTwoYears = (
  startYear: number,
  endYear: number
): number => {
  let count: number = 0;

  for (let year = startYear + 1; year < endYear; year += 1) {
    count += isLeapYear(year) ? 366 : 365;
  }

  return count;
};

const countDDayInSameYear = (
  start: DateInfo,
  end: DateInfo,
  isLeapYearBoolean: boolean
): number => {
  const year: number = isLeapYearBoolean ? 1996 : 1997;

  const diff: number =
    new Date(year, end.month, end.day).getTime() -
    new Date(year, start.month, start.day).getTime();

  return diff / SINGLE_DAY_MILLISECONDS;
};

const countDDay = (start: DateInfo, end: DateInfo): number => {
  const daysBetweenYears: number = countDaysBetweenTwoYears(
    start.year,
    end.year
  );
  const daysInTargetYears: number =
    start.year === end.year
      ? countDDayInSameYear(start, end, isLeapYear(start.year))
      : countDDayInSameYear(
          start,
          { year: 0, month: 11, day: 31 },
          isLeapYear(start.year)
        ) +
        countDDayInSameYear(
          { year: 0, month: 0, day: 1 },
          end,
          isLeapYear(end.year)
        ) +
        1;

  return daysBetweenYears + daysInTargetYears;
};

console.log(
  isCampTooLong(startDate, endDate)
    ? "gg"
    : `D-${countDDay(startDate, endDate)}`
);
