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
console.log(textReverse("hello world"), " => Question 1");

// * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// & Example Input: [2, -5, 10, -3, 7] Example Output: 19
const sumPositive = (arr) => {
  const result = Array.isArray(arr)
    ? arr.reduce((acu, curr) => {
        return curr >= 0 ? acu + curr : acu + 0;
      }, 0)
    : "Please input a number of array";
  return result;
};
console.log(sumPositive([2, -5, 10, -3, 7]), " => Question 2");

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
console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]), " => Question 3");

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
console.log(getIndexSum([1, 3, 6, 8, 11, 15], 9), " => Question 4");

// * Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const getOperation = (num1 = 0, num2 = 0, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "please input a valid operator (+,-,*,/)";
  }
};
console.log(getOperation(3, 2, "/"), " => Question 5");

// * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generatesPassword = () => {
  const getRandomNum = (len = 10) => parseInt(Math.random() * len); // return 0-9 || (100)=> 0-99
  const capitalLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const symbols = ["@", "#", "$", "%", "&", "*", "?", "!", ".", ",", ";", ":"];

  // 0 for CapitalLetter, 1 for SmallLetter, 2 for Symbols, and 3 for Numbers
  const sorted = [
    "0123",
    "0132",
    "0213",
    "0231",
    "0312",
    "0321",
    "1023",
    "1032",
    "1203",
    "1230",
    "1302",
    "1320",
    "2013",
    "2031",
    "2103",
    "2130",
    "2301",
    "2310",
    "3012",
    "3021",
    "3102",
    "3120",
    "3201",
    "3210",
  ];
  const getCapitalLetter = () => {
    // get a random number
    const rand = getRandomNum(100);
    if (rand < 26) {
      return capitalLetter[rand];
    } else {
      return getCapitalLetter();
    }
  };
  const getSmallLetter = () => {
    // get a random number
    const rand = getRandomNum(100);
    if (rand < 26) {
      return smallLetter[rand];
    } else {
      return getSmallLetter();
    }
  };
  const getSymbol = () => {
    // get a random number
    const rand = getRandomNum(100);
    if (rand < 11) {
      return symbols[rand];
    } else {
      return getSymbol();
    }
  };
  // 0 for CapitalLetter, 1 for SmallLetter, 2 for Symbols, and 3 for Numbers
  const getSorted = () => {
    // get a random number
    const rand = getRandomNum(100);
    if (rand < 23) {
      return sorted[rand];
    } else {
      return getSorted();
    }
  };
  const sortedList = getSorted();
  const sortedList1 = getSorted();
  const sortedList2 = getSorted();
  const getRandomDigit = (num) => {
    // 0 for CapitalLetter, 1 for SmallLetter, 2 for Symbols, and 3 for Numbers
    if (parseInt(num) === 0) {
      return getCapitalLetter();
    } else if (parseInt(num) === 1) {
      return getSmallLetter();
    } else if (parseInt(num) === 2) {
      return getSymbol();
    } else {
      return getRandomNum();
    }
  };
  //  this will return 12 length of password
  return [
    getRandomDigit(sortedList[0]),
    getRandomDigit(sortedList[1]),
    getRandomDigit(sortedList[2]),
    getRandomDigit(sortedList[3]),
    getRandomDigit(sortedList1[0]),
    getRandomDigit(sortedList1[1]),
    getRandomDigit(sortedList1[2]),
    getRandomDigit(sortedList1[3]),
    getRandomDigit(sortedList2[0]),
    getRandomDigit(sortedList2[1]),
    getRandomDigit(sortedList2[2]),
    getRandomDigit(sortedList2[3]),
  ].join("");
};
console.log(generatesPassword(), " => Question 6");

// * Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInt = (romNum) => {
  const romanN = ["i", "I", "v", "V", "x", "X", "c", "C", "l", "L", "m", "M"];
  for (let i = 0; i < romNum.length - 1; i++) {
    if (!romanN.includes(romNum[i])) {
      return "please provide a valid roman Number";
    }
  }
  // roman number and value
  const romNumValue = {
    i: 1,
    I: 1,
    v: 5,
    V: 5,
    x: 10,
    X: 10,
    c: 50,
    C: 50,
    l: 100,
    L: 100,
    m: 500,
    M: 500,
  };
  let value = 0;
  for (let i = 0; i < romNum.length; i++) {
    const currentValue = romNumValue[romNum[i]];
    const nextValue = romNumValue[romNum[i + 1]] || 0;
    if (currentValue < nextValue) {
      value -= currentValue;
    } else {
      value += currentValue;
    }
  }
  return value;
};
console.log(romanToInt("xxX"), " => Question 7");
