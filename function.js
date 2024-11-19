// //function is a block of code that can perforn an action and can be reuseable
// //function
// //declaration
// function functionName(parameters) {
//      //code to be executed
// }

// function greet(name){
//      console.log("Hello," + name);
// }

// greet("martins"); //Output: Hello, Martins

// function add(a,b){
//      return a + b;
// }
// const sum = add(4,5)
// console.log(sum);

// function multiply(m,n){
//      return m * n;
// }
// const product = multiply(4,5)
// console.log(product);

// //assignment
// //write a function that returns difference of two numbers

// function subtract(e,f){
//      return e - f;
// }
// const difference = subtract(10,5)
// console.log(difference);

// //

// function greet(name, course){
//      console.log("Hello " + name, "you are" + course)
// }
// greet("Evanium,", "a frontend web developer");

// //
// function user(name, course){
//      console.log("Hello " + name, "you are" + course);
// }

// user("Evanium", "frontend");

// // function expression
// // meaning of function: It is a block of code that can perform an action and can be reuseable
// // function declaration is a type of expression which start with a function keyword and accept parameters and returns an output
// // function Expression: It is a type of function that is assign into a variable and that variable becomes the name of the function
// //function Expression
// //const functionName = function(parameters) {
//      // code to be executed
// //};

// const greet1 = function(name) {
//      console.log("Hello," + name);
// };

// greet1("John"); // Output: Hello, John


// const add1 = function(a, b) {
//      return a + b;
// }
// const sum2 = add1(1, 2);
// console.log(sum2);

// //
// const product2 = function(p, q){
//      return p * q;
// }
// const multiply2 = product2(5, 4);
// console.log(multiply2);

// //
// const user1 = function(name, course, school) {
//      console.log("Hello " + name + ", you are " + course + " at " + school);
//  };
 
//  user1("Evanium", "a frontend web developer", "New Horizon School");


export function greet(name = "Guest"){
     // console.log("hello " + name);
     console.log(`hello ${name}`)
}
// greet("martins")