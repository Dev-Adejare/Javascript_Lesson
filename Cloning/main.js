console.log("Hello World");


const person = {
    firstName : "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Makalele";
console.log(person);
console.log(otherPerson);


console.log(person === otherPerson);

// SHALLOW-CLONING
//Spread Operator (...)

const numbers = [1, 2, 3, 4, 5, 6];

console.log(...numbers);

const newNumber = [...numbers];

console.log(newNumber);

//To check the Equality of NUmber:

const numb = [1, 2, 3, 4, 5,];
const copiedNum = numb;
const newNumb = [...numb];

console.log(copiedNum);

console.log(numb === copiedNum);
console.log(numb === newNumb);


