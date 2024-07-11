// Strings.js

/**
 * JavaScript Strings Overview
 * Strings in JavaScript are used to store and manipulate text.
 * They are immutable, meaning once a string is created, it cannot be changed.
 * Strings are one of the primitive data types in JavaScript.
 */

// Creating strings
let str1 = "Hello";
let str2 = "World";
let str3 = "Hello World";

/**
 * Properties and Accessing Characters
 */
console.log(str1.length); // Output: 5
// .length property returns the number of characters in a string

console.log(str1[1]); // Output: "e"
// Accessing characters with index using bracket notation

console.log(str1.charAt(0)); // Output: "H"
// Accessing characters with index using .charAt() method

/**
 * Common String Methods
 */
console.log(str1.toUpperCase()); // Output: "HELLO"
// Convert to upper case

console.log(str1.toLowerCase()); // Output: "hello"
// Convert to lower case

console.log(str1.includes("ell")); // Output: true
// Check if substring exists

console.log(str1.indexOf("l")); // Output: 2
// Index of first occurrence

console.log(str1.lastIndexOf("l")); // Output: 3
// Index of last occurrence

console.log(str1.slice(1, 3)); // Output: "el"
// Extract a section of the string from index 1 to 3 (excluding 3)

console.log(str1.substring(1, 4)); // Output: "ell"
// Similar to .slice() but without negative indices, extract from index 1 to 4 (excluding 4)

console.log(str1.replace("el", "oo")); // Output: "Hoolo"
// Replace a substring

console.log(str3.split(" ")); // Output: ["Hello", "World"]
// Split the string into an array of substrings

console.log("  Good   ".trim()); // Output: "Good"
// Remove whitespace from both ends

/**
 * Template Literals - Allow for multi-line strings and string interpolation
 */
let name = "Arjun";
let greeting = `Hello, ${name}!`; // Embedding expressions
console.log(greeting); // Output: "Hello, Arjun!"

/**
 * Common Use Cases and Examples
 */

// Reversing a string
const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(`Reverse String - ${reverseString('Arjun Das')}`); // Output: "saD nujrA"

// Checking if a string is a palindrome
const isPalindrome = (str) => {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleanString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    // Check if the cleaned string reads the same forwards and backwards
    return cleanString == cleanString.split("").reverse().join("");
}
console.log(`Is 'Arjun Das' Palindrome? - ${isPalindrome('Arjun Das')}`); // Output: false
console.log(`Is 'Liril' Palindrome? - ${isPalindrome('Liril')}`); // Output: true
console.log(`Is 'A man, a plan, a canal: Panama' Palindrome? - ${isPalindrome('A man, a plan, a canal: Panama')}`); // Output: true

// Checking if two strings are anagrams
const areAnagrams = (str1, str2) => {
    // Normalize both strings: lowercase, remove non-alphanumeric, sort characters
    let normalizeStr = str => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    
    return normalizeStr(str1) == normalizeStr(str2);
}
console.log(`Are 'cat', 'rat' Anagrams? - ${areAnagrams('cat', 'rat')}`); // Output: false
console.log(`Are 'listen', 'silent' Anagrams? - ${areAnagrams('listen', 'silent')}`); // Output: true

/**
 * Important Points for Interviews
 * - Understand the immutability of strings
 * - Be comfortable using and explaining common string methods
 * - Know how to manipulate and check strings using various techniques
 * - Practice common use cases like reversing a string, palindrome check, and anagram check
 */

/*
String Creation:

Strings can be created using single quotes, double quotes, or backticks for template literals.
Properties and Accessing Characters:

.length: Returns the length of the string.
Bracket notation [index] and .charAt(index): Access characters at a specific index.
Common String Methods:

toUpperCase(): Converts the string to upper case.
toLowerCase(): Converts the string to lower case.
includes(substring): Checks if the substring exists within the string.
indexOf(character): Returns the index of the first occurrence of the character.
lastIndexOf(character): Returns the index of the last occurrence of the character.
slice(start, end): Extracts a section of the string from start to end (excluding end).
substring(start, end): Similar to slice() but does not support negative indices.
replace(oldSubstring, newSubstring): Replaces occurrences of oldSubstring with newSubstring.
split(delimiter): Splits the string into an array of substrings based on the delimiter.
trim(): Removes whitespace from both ends of the string.
Template Literals:

Allow embedding expressions and creating multi-line strings using backticks.
*/