// Strings.js

/**
 * JavaScript Strings Overview
 * Strings in JavaScript are used to store and manipulate text.
 * They are immutable, meaning once a string is created, it cannot be changed.
 * Strings are one of the primitive data types in JavaScript.
 */

// Creating strings
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, World!`; // Template literal

/**
 * Properties and Accessing Characters
 */
console.log(str1.length); // .length property returns the number of characters in a string
console.log(str1[0]); // Accessing characters using bracket notation
console.log(str1.charAt(0)); // Accessing characters using .charAt() method

/**
 * Common String Methods
 */
console.log(str1.toUpperCase()); // Convert to upper case
console.log(str1.toLowerCase()); // Convert to lower case
console.log(str1.includes("ell")); // Check if substring exists
console.log(str1.indexOf("l")); // Index of first occurrence
console.log(str1.lastIndexOf("l")); // Index of last occurrence
console.log(str1.slice(1, 4)); // Extract a section of the string
console.log(str1.substring(1, 4)); // Similar to .slice() but without negative indices
console.log(str1.substr(1, 3)); // Extracts a substring of a specified length
console.log(str1.replace("ell", "ipp")); // Replace a substring
console.log(str1.split("")); // Split the string into an array of substrings
console.log("  Hello  ".trim()); // Remove whitespace from both ends

/**
 * Template Literals
 * Allow for multi-line strings and string interpolation
 */
let name = "Alice";
let greeting = `Hello, ${name}!`; // Embedding expressions
console.log(greeting); // 'Hello, Alice!'

/**
 * Common Use Cases and Examples
 */

// Reversing a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // 'olleh'

// Checking if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleanString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Check if the cleaned string reads the same forwards and backwards
    return cleanString === cleanString.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// Checking if two strings are anagrams
function areAnagrams(str1, str2) {
    // Normalize both strings: lowercase, remove non-alphanumeric, sort characters
    let normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // true

/**
 * Important Points for Interviews
 * - Understand the immutability of strings
 * - Be comfortable using and explaining common string methods
 * - Know how to manipulate and check strings using various techniques
 * - Practice common use cases like reversing a string, palindrome check, and anagram check
 */

