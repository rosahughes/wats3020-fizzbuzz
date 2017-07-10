/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

// Variable `isInteger` is a control value for the
// `while` loop, with an initial value of `false`.
isInteger = false;

// The `while` loop prompts the user to enter a number until
// they enter a good number, controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop stops looping.
while(!isInteger) {
// Prompt the user for the `maxNumber` value, an integer greater than zero.
maxNumber = prompt("Enter a whole number (no decimals allowed):", 20);
// If the value of `maxNumber` is suitable, then the value of
// `isInteger` changes to `true` so the `while` loop stops looping. 
maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
    isInteger = true;
  } else {
    alert("You must enter a whole number greater than zero, with no decimals.");
  }
}

// The `fbResults` variable is initialized as an empty Array.
fbResults = [];
// The `for` loop will execute the `maxNumber` of times.The results of the 
// conditional statements that use the `%` operator are stored in the array 
// `fbResults`.
for (let i=1; i <= maxNumber; i++) {
  if (i % 15 == 0) {
    fbResults.push("FizzBuzz");
  } else if (i % 3 == 0) {
    fbResults.push("Fizz");
  } else if (i % 5 == 0) {
    fbResults.push("Buzz");
  } else {
    fbResults.push(i);
  }
}

// The `fbText` variable is initialized as an empty string.
fbText = '';
// The `for ... of` loop will concatenate the values from `fbResults`
// into the variable `fbText`.
for (let result of fbResults) {
  fbText = fbText + result + "\n"; 
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
