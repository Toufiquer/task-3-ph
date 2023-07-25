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
