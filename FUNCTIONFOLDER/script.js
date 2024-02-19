

//Function Declaration.

function sayHello(firstName) {
    console.log(`Hello ${firstName}`);
}

sayHello('Hayzed')
sayHello('class captain 🖥️');

//Function Expression.

// FUNCTION DECLARATION

function square(number){ //params is passed in the parenthesis
    //statement
}
square() //Function call/ invocation 

//Function Expression

const nameFunction = function(params) {}

//Arrow Declaration
const arrowFn = () => {}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("Hayzed")
sayHello("Class captain 👮‍♂")
sayHello("Nafisah")

const isHungry = function (food) {
    console.log (`He wants to eat ${food}`);
}

isHungry('Bread and beans')

const money = (dollars) => {
    console.log(`He makes ${dollars}`);
}

money('$10,000 monthly')

const division = (number) => {
    return number / number;
    
}

//Function Return.
//Division

const div = (number) => {
    return number / number;
}
const answers = div (8);
console.log(answers);

//Multiplication

const multiply = (number) => {
    return number * number;
}
const answer = multiply (6);
console.log(answer);

const square2 = number => {return number * number}
const result = square2(7);
console.log(result);

const square3 = number => number * number

// const not accepted = name, age => {}

function add(number) {
    return number + number
}
const sum = add(2);
console.log(sum);

//Declaration of arrow function with two parameters, return the two parameters and give them arguement.

const sub = (number1, number2) => {
    return number1 - number2
}
const results = sub(20, 5);
console.log(results);




//Exp2
 const substraction = () => {
    let a = 8;
    let b = 4;
    return a-b;
 };
 const minus = substraction();
 console.log(minus)

 //Nested Fuction: means a fuction inside another function

 function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = "DLT Africa";

    function add() {
        return `${name} is ${num1 + num2} years old`
    }
    return add();
 }

 console.log(getScore());

 
 //Example2:-

 const nestedFunction = (a, b, c) => {

    const anotherFunction = () => {
        return `${a + b +c}` ;
    }
    return anotherFunction();
 };

 console.log(nestedFunction(2, 4, 6));

 //Class-Work:-
 function addNumbers(a, b) {
    return a + b >= 10? "sum is greater than or equal to 10" :a + b;
 }

 const greater = addNumbers(9, 10);
 console.log(greater);
 
 const lesser = addNumbers(3, 4);
 console.log(lesser);


 // Check for Even numbers

 const isEven = (nestedGame) => {
    return nestedGame % 2 ===0? true : false;

 }

 const even = isEven(6);
 console.log(even)
 
 
 const odd = isEven(7);
 console.log(odd)

 //Check for Prime Number

 function isPrime(number) {
    if(number <= 1) {
        return false;
    }
    
    for (let i = 2; i <=  Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
        
    }
    return true;
 }

 const prime = isPrime(3)
 console.log(prime)

 
  








 


     















    