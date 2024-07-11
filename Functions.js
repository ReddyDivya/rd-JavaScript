// functions.js

// 1. Function Declaration
// Purpose: Demonstrate a basic function declaration.
function add(a, b) {
  return a + b;
}

// 2. Function Expression
// Purpose: Show how to define a function as an expression and assign it to a variable.
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function
// Purpose: Introduce ES6 arrow functions for concise syntax.
const subtract = (a, b) => a - b;

// 4. Immediately Invoked Function Expression (IIFE)
// Purpose: Demonstrate an IIFE for executing a function immediately after its definition.
(function() {
  console.log('IIFE executed');
})();

// 5. Higher-Order Function
// Purpose: Illustrate functions that take other functions as arguments.
function higherOrderFunction(callback) {
  const message = "Higher-order function";
  callback(message);
}

// Example callback function
function logMessage(message) {
  console.log(message);
}

// Using the higher-order function
higherOrderFunction(logMessage);

// 6. Function with Default Parameters
// Purpose: Show how to use default parameters in a function.
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

// 7. Rest Parameters
// Purpose: Demonstrate the use of rest parameters to handle variable number of arguments.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// 8. Function Returning a Function
// Purpose: Illustrate closure by returning a function from another function.
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

// Using the function returning another function
const double = createMultiplier(2);
const triple = createMultiplier(3);

// 9. Function with Destructured Parameters
// Purpose: Show how to destructure parameters directly in the function signature.
function printCoordinates({ x, y }) {
  console.log(`X: ${x}, Y: ${y}`);
}

// Example object to pass to the function
const coordinates = { x: 10, y: 20 };
printCoordinates(coordinates);

// 10. Recursive Function
// Purpose: Demonstrate a basic example of recursion.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Test the recursive function
const fact5 = factorial(5); // 120

// 11. Function Currying
// Purpose: Show how to implement currying in JavaScript.
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Using the curried function
const result = curryAdd(1)(2)(3); // 6

// 12. Asynchronous Function (Async/Await)
// Purpose: Introduce async/await syntax for handling asynchronous operations.
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
