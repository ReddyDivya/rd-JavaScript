// Closures.js

/**
 * JavaScript Closures Overview
 * A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
 * Closures are created every time a function is created, at function creation time.
 */

// Example 1: Basic Closure
function outerFunction() {
    let outerVariable = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the inner function
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "I'm an outer variable"

/**
 * In this example, `innerFunction` retains access to `outerVariable` even after `outerFunction` has finished execution.
 */

// Example 2: Closure with Parameters
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

/**
 * In this example, each call to `counter` function increments and retains the updated value of `count` variable.
 * The `count` variable is private to the `makeCounter` function scope.
 */

// Example 3: Closures in Loops
function createArray() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(function() {
            return i;
        });
    }

    return arr;
}

const arr = createArray();
console.log(arr[0]()); // Output: 3
console.log(arr[1]()); // Output: 3
console.log(arr[2]()); // Output: 3

/**
 * In this example, the `i` variable is shared among all the closures, 
 * and by the time the functions are called, the value of `i` is 3.
 * To fix this, you can use an IIFE (Immediately Invoked Function Expression).
 */

// Example 4: Fixing Closures in Loops with IIFE
function createArrayFixed() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push((function(x) {
            return function() {
                return x;
            };
        })(i));
    }

    return arr;
}

const arrFixed = createArrayFixed();
console.log(arrFixed[0]()); // Output: 0
console.log(arrFixed[1]()); // Output: 1
console.log(arrFixed[2]()); // Output: 2

/**
 * In this example, each closure gets its own copy of `i` through the IIFE, preserving the value of `i` at each iteration.
 */

// Example 5: Practical Use of Closures - Encapsulation
function Person(name) {
    let _name = name; // Private variable

    this.getName = function() {
        return _name;
    };

    this.setName = function(newName) {
        _name = newName;
    };
}

const person = new Person("Alice");
console.log(person.getName()); // Output: Alice
person.setName("Bob");
console.log(person.getName()); // Output: Bob

/**
 * In this example, `_name` is a private variable, and its value can only be accessed or modified using the `getName` and `setName` methods.
 * This is a form of encapsulation using closures.
 */

// Important Points for Interviews
/**
 * - Understand the definition of closures and how they work.
 * - Be able to explain how closures retain access to their lexical scope.
 * - Know practical uses of closures, such as data encapsulation and creating private variables.
 * - Be familiar with common pitfalls, like closures in loops, and how to address them.
 * - Practice coding examples that use closures effectively.
 */

// Common Interview Questions on Closures

// 1. What is a closure?
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

// 2. Can you give an example of a closure?
// Refer to the examples provided above, especially Example 1 and Example 2.

// 3. What are some common uses of closures?
// Closures are commonly used for data encapsulation, creating private variables, and preserving state in asynchronous operations.

// 4. How do you fix common pitfalls with closures, such as in loops?
// Use IIFE (Immediately Invoked Function Expressions) to create a new scope for each iteration, as shown in Example 4.

