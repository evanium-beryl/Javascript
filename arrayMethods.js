const fruits = ["Apple", "Banana", "Cherry"]

// Adding to the end
fruits.push("mango");
console.log(fruits); //["Apple", "Banana", "Cherry", "mango"]

// Adding to the beginning
fruits.unshift("Elderberry");
console.log(fruits); //["Elderberry", "Apple", "Banana","Cherry"]

// 4. Removing Elements from an Array
// Explain methods like pop, shaft, and splice for removing elements

//Removing from the end
fruits.pop();
console.log(fruits); //["Elderberry", "Apple", "Banana","Cherry"]

// Removing from the beginning
fruits.shift();
console.log(fruits); //["Apple", "Banana", "Cherry"]

//Removing from a specific position
fruits.splice(1, 1); // Removes 1 Element at index 1
console.log(fruits); // ["Apple", "Cherry"]

// 5. Modifying Elements
// Show how to change Elements in an array.

fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry"]

fruits.splice(2, 0, "coconut")
console.log(fruits);

let array = [1, 2, 3, 4, 5, 6]
array.splice(2, 3)
console.log(array);

// 6. Iterating Over Arrays
// Introduce different ways to loop through arrays.

// using for loop
for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
}

// using forEach
fruits.forEach(function(fruits) {
     console.log(fruits);
});

// 7. Common Array Methods
// Explain some useful array methods like map, filter, reduce, find,

// map
let uppercasedfruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedfruits); // ["APPLE", "BLUEBERRY"]

//const add = (a, b) => a + b
//add(2, 4)

// filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Blueberry"]

// reduce 
let concatenatedFruits = fruits.reduce ((acc, fruit) => acc + '' + fruit);
console.log(concatenatedFruits); //"Apple, Blueberry"

//find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit); //"Apple"

// Includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry); // false

// 8. Combining Arrays
// Show how to concatenate arrays using concat.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 9. Sorting Arrays
// Explain how to sort arrays with sort.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 10. Reversing Arrays
// Explain how to reverse arrays with reverse.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ["Grape", "Fig", "Blueberry", "Apple"]

// Original array
const numbers2 = [1, 2, 3, 4, 5, 6];

// Using map to create a new array with each element doubled
const doubledNumbers = numbers2.map(number => number * 2);

console.log(doubledNumbers); [2, 4, 6, 8, 10]

const people = [
     { name: "Alice", age: 25 },
     { name: "Bob", age: 30},
     { name: "Charlie", age: 35},
];

// Using map to create a new array with just the names of the people
const names = people.map(person => person.name);

console.log(names); // ["Alice", "Bob", "Charlie"]

const age = people.map(person => person.age);
console.log(age);