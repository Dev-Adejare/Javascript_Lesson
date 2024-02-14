//Varaibles.

//Ways of Declaring Variables are as follows: -Let, -Const

// let -It allows to change the variables values later.

//Const _ this does not allow changes, whatsoever value you give here remain constant.

// let message = "Hello Eve";
message = "Hello Kenny";
console.log(message);

const greeting = "Good morning my neighbour";
console.log(greeting);

const _name$ = "Al Fulaaniy Ileya 🏘️";
console.log(_name$);

console.log(message, greeting, _name$);

let studentName = "Kehinde";
studentName = "Tunmise";
console.log(studentName);

const _var = "Hello world!";
const var$ = "My Neighbour";
const var3 = "How are you doing";

console.log(_var, var$, var3);

//DATA TYPES
//PRIMITIVE AND NON-PRIMITIVE

//PRIMITIVE:-Boolean -BigInt -Symbol -Null -Undefined -Strings --NAN -Typeof
//NON-PRIMITIVE: -Date -Classes -Arrays

//String
//Single string -''
//Double string -""
//Back ticks - ``

const singleQuote = "Who am I?";
const doubleQuote = "Who are you?";

console.log(singleQuote);
console.log(doubleQuote);

let name = "Team Lead";
const backTick = `Hello ${name}`;
console.log(backTick);

let newName = "Toheeb";
let favouriteDrink = "Bobo";

const details = `My name is ${newName}, and my favourite drink is ${favouriteDrink}`;
console.log(details);

const numberOne = 45;
const numberTwo = 10;


const add = numberOne + numberTwo;
console.log(add)
const sub = numberOne - numberTwo;
console.log(sub)
const div = numberOne / numberTwo;
console.log(div)
const mul = `${numberOne * numberTwo}`;
console.log(mul)


//Concatenate: link things together in a series/chain.
const numberThree = '10';
const numberFour = '14';
console.log(numberThree + numberFour);

console.log(10 + '11');
console.log(10 - '15');

//Boolean -True / False

const isBeautiful = true;
// console.log(typeof isBeautiful);

if (isBeautiful) {
    console.log("This woman is beautiful")
} else {
    console.log("This woman is ugly")
}

//NULL
let age = null;
console.log(age);

//Undefined
let x;
console.log(x);

//Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);


    
    









