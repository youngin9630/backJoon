function findMajorityElement(nums: number[]) {
  let candidate;
  let count = 0;

  // 후보 선택 단계
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // 후보 검증 단계
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate; // majority element 발견
  } else {
    return -1; // majority element 없음
  }
}

// 예제 배열에서 majority element 찾기
const nums = [2, 2, 2, 3, 3, 4, 3];
const majorityElement = findMajorityElement(nums);
console.log("Majority Element:", majorityElement);
