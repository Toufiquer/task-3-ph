// * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
// & Example Input: "hello world" Example Output: "dlrow olleh"
const textReverse = (text) => {
  if (typeof text !== "string") {
    return "Please input a string";
  } else {
    let reverseText = "";
    for (let i = text.length; i >= 0; i--) {
      reverseText += text.charAt(i);
    }
    return reverseText;
  }
};
// console.log(textReverse("hello world"), " => Question 1");

// * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// & Example Input: [2, -5, 10, -3, 7] Example Output: 19
const sumPositive = (arr) => {
  console.log(Array.isArray(arr), " => Line No: 21");
  const result = Array.isArray(arr)
    ? arr.reduce((acu, curr) => {
        return curr >= 0 ? acu + curr : acu + 0;
      }, 0)
    : "Please input a number of array";
  return result;
};
// console.log(sumPositive([2, -5, 10, -3, 7]), " => Question 2");

// * Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
// & Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequent = (arr) => {
  if (Array.isArray(arr)) {
    const frequentObj = {};
    arr.forEach((curr) => {
      if (frequentObj[curr]) {
        frequentObj[curr] += 1;
      } else {
        frequentObj[curr] = 1;
      }
    });
    let maxFrequentKey = 0;
    let maxFrequentValue = 0;
    for (let i in frequentObj) {
      if (maxFrequentValue < frequentObj[i]) {
        maxFrequentKey = i;
        maxFrequentValue = frequentObj[i];
      }
    }
    return maxFrequentKey;
  } else {
    return "please input a valid number of array";
  }
};
// console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]), " => Line No: 46");

// * Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// & Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const getIndexSum = (arr, num) => {
  if (!Array.isArray(arr)) {
    return "Please input a valid array";
  } else if (!(typeof num === "number")) {
    return "Please input a valid number";
  } else {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
      arr.forEach((curr) => {
        if (curr + arr[i] === parseInt(num)) {
          result.firstIndex = curr;
          result.secondIndex = i;
        }
      });
    }
    return result.firstIndex
      ? [result.firstIndex, result.secondIndex]
      : ["Ops! Nothing was found"];
  }
};
// console.log(getIndexSum([1, 3, 6, 8, 11, 15], 25), " => Line No: 79");
