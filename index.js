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
  console.log(Array.isArray(arr), " => Line No: 21");
  const result = Array.isArray(arr)
    ? arr.reduce((acu, curr) => {
        return curr >= 0 ? acu + curr : acu + 0;
      }, 0)
    : "Please input a number of array";
  return result;
};
console.log(sumPositive([2, -5, 10, -3, 7]), " => Question 2");
