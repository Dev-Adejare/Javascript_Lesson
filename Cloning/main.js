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
//   const originalObj = {
//     name: 'Bash',
//     age: 20,
//     address: {
//       city: 'Pegamut',
//       country: 'Ogun',
//     },
//   };
  
//   const clonedObj = Object.assign({}, originalObj);

//   clonedObj.name = 'Naphy';
//   clonedObj.address.city = 'Elejigbo';
//   console.log("originalObj", originalObj);
//   console.log("clonedObj", clonedObj);

  //Spreading Operator (Merged)
  const arr = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];

  const merged = [...arr, ...arr2];
   console.log(merged);

   const text = {name: "Bode"};
   const numz = [1, 2, 3, 4];

   const cloneMerged = {...text, numz:[...numz]};

   cloneMerged.name = "Hayzed";
   cloneMerged.numz.push(5);

   console.log(text);
   console.log(numz);
   console.log(cloneMerged);


   //DEEP_CLONING =>deep clone is an object in javascript. this means creating a new oject that is
//  entirely sepearated from the original object, such that change in the 
// new object do not affect the original and vice versa. this will creste a new object but
// nested object will still be reference to the original one

const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        wheel: 4,
        color: "Red"
    }
}

const stringifiedDetails = JSON.stringify(details);
console.log(stringifiedDetails);

const newDetails = JSON.parse(stringifiedDetails);
console.log(newDetails);

newDetails.car.color = "Blue";

console.log(details.car.color);
console.log(newDetails.car.color);

// const newDetails = {...details};
// newDetails.firstName = "Mike";

// newDetails.car.color = "blue";


// console.log(details);
// console.log(newDetails);


const originalobj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege wa",
        area: "Baba Yemi"
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalobj));

cloneObj.name = 'Soliu';
cloneObj.age = 54;
cloneObj.address.local = 'Pegamut';
cloneObj.address.area = 'Mujahidun';

console.log(originalobj);
console.log(cloneObj);



  




