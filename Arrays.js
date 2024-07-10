// Creating arrays
let arr1 = []; // Empty array
let arr2 = [1, 2, 3]; // Array with initial elements
let arr3 = new Array(5); // Array with a predefined length

// Accessing and modifying elements
console.log(`accessing - ${arr2[2]}`); // Accessing the element at index 2
arr2[2] = 10; // Modifying the element at index 2
console.log(`After modification - ${arr2}`); // Output: [1, 2, 10]

// Common array methods
arr2.push(4); // push() -> Adds an element to the end of the array
console.log(`push - ${arr2}`); // Output: [1, 2, 10, 4]

arr2.pop(); // pop() -> Removes the last element of the array
console.log(`pop - ${arr2}`); // Output: [1, 2, 10]

arr2.unshift(20); // unshift() -> Adds an element at the beginning of the array
console.log(`unshift - ${arr2}`); // Output: [20, 1, 2, 10]

arr2.shift(); // shift() -> Removes the first element of the array
console.log(`shift - ${arr2}`); // Output: [1, 2, 10]
-
arr2.splice(1, 1, 'a', 'b'); // splice() -> Removes one element at the 1st index and adds 'a', 'b'
console.log(`splice - ${arr2}`); // Output: [1, 'a', 'b', 10]

arr2.splice(2, 1, 'c', 'd'); // splice() -> Removes 1 element at the 2nd index and adds 'c', 'd'
console.log(`splice - ${arr2}`); // Output: [1, 'a', 'c', 'd', 10]

arr2.splice(3, 2, 'e', 'f', 'g'); // splice() -> Removes 2 elements at the 3rd index and adds 'e', 'f', 'g'
console.log(`splice - ${arr2}`); // Output: [1, 'a', 'c', 'e', 'f', 'g']

// Concat/Merge arrays
console.log(`Concat - ${arr2.concat([5, 6, 7])}`); // Output: [1, 'a', 'c', 'e', 'f', 'g', 5, 6, 7]

// IndexOf - Finds the index of an element
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g']
console.log(`IndexOf a - ${arr2.indexOf('a')}`); // Output: 1
console.log(`IndexOf e - ${arr2.indexOf('e')}`); // Output: 3

// Slice - Extracts a section of the array from the startIndex to endIndex (not inclusive)
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g']
console.log(`Slice - ${arr2.slice(1, 3)}`); // Output: ['a', 'c']
console.log(`Slice - ${arr2.slice(0, 4)}`); // Output: [1, 'a', 'c', 'e']
console.log(`Slice - ${arr2.slice(2, 4)}`); // Output: ['c', 'e']

// includes - Checks if an element is in the array
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g']
console.log(`Includes - ${arr2.includes('g')}`); // Output: true
console.log(`Includes - ${arr2.includes('z')}`); // Output: false

// forEach - Iterating over the arrays
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g']
console.log('forEach >>');
arr2.forEach((element, index) => {
    console.log(`Element at the ${index} is ${element}.`);
});

// map - Creates a new array with the results of calling a provided function on every element in the calling array
arr3.push(3, 4, 6, 7);
let doubleElements = arr3.map(element => element * 2);
console.log(`Map - ${doubleElements}`); // Output: [6, 8, 12, 14]

// filter - Creates a new array with all elements that pass the test implemented by the provided function
// Input -> arr3: [3, 4, 6, 7]
let filteredElements = arr3.filter(element => element >= 4);
console.log(`filter - ${filteredElements}`); // Output: [4, 6, 7]

arr2.push(4);
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g', 4]
console.log(`filter - ${arr2.filter(element => typeof element === 'number')}`); // Output: [1, 4]
console.log(`filter - ${arr2.filter(element => typeof element === 'string')}`); // Output: ['a', 'c', 'e', 'f', 'g']

// every - Checks if all elements in an array pass a test (provided as a function)
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g', 4]
console.log(`every - ${arr2.every(element => typeof element === 'number')}`); // Output: false

// Input -> arr3: [3, 4, 6, 7]
console.log(`every - ${arr3.every(element => typeof element === 'number')}`); // Output: true

// some - Checks if at least one element in an array passes a test (provided as a function)
// Input -> arr2: [1, 'a', 'c', 'e', 'f', 'g', 4]
console.log(`some - ${arr2.some(element => typeof element === 'string')}`); // Output: true

// Input -> arr3: [3, 4, 6, 7]
console.log(`some - ${arr3.some(element => typeof element === 'string')}`); // Output: false

// reduce - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// Input -> arr3: [3, 4, 6, 7]
console.log(`reduce - ${arr3.reduce((acc, curElement) => acc + curElement)}`); // Output: 20

console.log(`reduce - ${arr2.reduce((acc, curElement) => acc + curElement)}`); // Output: '1acefg4'

// Advanced array methods

let arr4 = [1, 2, 3, 4, 5];
// find() - Returns the value of the first element in the array that satisfies the provided testing function
// Input -> arr4: [1, 2, 3, 4, 5]
console.log(`find - ${arr4.find(element => element > 3)}`); // Output: 4

// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
// Input -> arr4: [1, 2, 3, 4, 5]
console.log(`findIndex - ${arr4.findIndex(element => element > 3)}`); // Output: 3

// flat - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let arr5 = [[11, 13], [4, 56], [26, 58, 29, 30]];
console.log(`flat - ${arr5.flat()}`); // Output: [11, 13, 4, 56, 26, 58, 29, 30]

// sort - Sorts the elements of an array in place and returns the array
let arr6 = [33, 21, 1, 8, 19];
console.log(`sort (desc) - ${arr6.sort((a, b) => b - a)}`); // Output: [33, 21, 19, 8, 1]
console.log(`sort (asc) - ${arr6.sort((a, b) => a - b)}`); // Output: [1, 8, 19, 21, 33]

// reverse - Reverses the array in place
// Input -> arr6: [1, 8, 19, 21, 33]
console.log(`reverse - ${arr6.reverse()}`); // Output: [33, 21, 19, 8, 1]

// Common Use Cases

// Removing duplicates from an array
let arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arrWithDuplicates)];
console.log(`Unique Array - ${uniqueArr}`); // Output: [1, 2, 3, 4, 5]

// Merging multiple arrays
let mergeArrs = arr1.concat(arr2, arr4);
console.log(`Merge Arrays - ${mergeArrs}`); // Output: [1, 'a', 'c', 'e', 'f', 'g', 4
