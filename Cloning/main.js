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


// const originalObjectz = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA',
//     },
//   };
  
//   const clonedObjectz = { ...originalObject };
//   console.log(clonedObject);



const numbers = [1, 2, 3, 4, 5, 6];

console.log(...numbers);

const newNumber = [...numbers];

console.log(newNumber);

//To check the Equality of NUmber:
//Array-Cloning

const numb = [1, 2, 3, 4, 5, 6];
const copiedNum = numb;
const newNumb = [...numb];

console.log(copiedNum);

console.log(numb === copiedNum);
console.log(numb === newNumb);

const pushed = numb.push(7,8);
console.log(numb);
console.log(copiedNum);
console.log(newNumb);

const numbz = numb.slice(2, 4);
console.log(numbz);

//Object-Cloning

const personDetails = {
  name: "Zainab",
  age: 40,
}

const changeDetails = {...personDetails}

personDetails.name = "Soliu"

console.log(personDetails);
console.log(changeDetails);


//Exp 1;
const originalObject = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  };
  
  const clonedObject = Object.assign({}, originalObject);
  console.log(clonedObject);



//Exp 2;
  const originalObj = {
    name: 'Bash',
    age: 20,
    address: {
      city: 'Pegamut',
      country: 'Ogun',
    },
  };
  
  const clonedObj = Object.assign({}, originalObj);

  clonedObj.name = 'Naphy';
  clonedObj.address.city = 'Elejigbo';
  console.log("originalObj", originalObj);
  console.log("clonedObj", clonedObj);




  




