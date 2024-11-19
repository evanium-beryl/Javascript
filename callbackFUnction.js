// Definition: A callback is a function passed into
// another function as an argument. which is then
// invoked inside the outer
// function to complete some kind of routine or action.
// Function definition with a callback parameter

function sayHello(name, callback){
     console.log(`Hello ${name}`)
     callback();
}

function sayGoodbye() {
     console.log('Welcom to my App')
}



//const sayHello1 = function(name, callback){
 //    console.log("Hello " + name + callback);
//};
//sayHello1("Evanium", " welcome to my App");

const greet = function(name){
     console.log("Hello", + name)
}

greet("John");


const question = (name) => {
     console.log('How are you doing?')
}

greet("Laide", question);



const greetuser = (name, firstCallback, secondCallback) => {
     console.log('Hello ${name}')
     firstCallback()
     secondCallback()
}

const welcomeMessage = () =>{
     console.log('welcome to our app')
}

const offerService = () => {
     console.log('pls how can we help you?')
}

greetuser("martins", welcomeMessage, offerService)


const user = (name, schoolAndCourse, company) => {
     console.log('My name is ${name}')
     schoolAndCourse()
     company()
}
const schoolAndCourse = () => {
     console.log('I am studying frontend Development at New Horizon')
}

const company = () => {
     console.log('I will like to work with Google')
}

user('martins', schoolAndCourse, company);