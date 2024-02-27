//OBJECTS

//Objects are used to represent real life datas

// Object is an unordered collection of related data in form of key and value pairs

// const firstName = "Soliu"

// const person = {
//     firstName,
//     surname: "Hayzed",
//     age: 158,
// children:{
//     firstChild: "Eef",
//     secondChild: "Nafisah"
// }

// }

// console.log(person);

//ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT

const human = {
    firstName: 'Abdullah',
    "DLT Africa location": "pegamut"

}


human.pet = {name: "cobra", age:3}
human.job = "headmaster"
human.favFood = "Garri"

console.log(human);
console.log(human.firstName);
console.log(human.job);
console.log(human.favFood);
console.log(human.pet.name);
console.log(human.pet.age);
console.log(human['firstName']); //Another way of declaring firstname
console.log(human['DLT Africa location']);


//OBJECT BUILT IN METHOD

const pet = {
    petName: "Dog",
    petSound: () => {
        console.log("woof! woof!")
    }
}

pet.petSound();
console.log(pet.petName);


const dog = {
    name: "fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }
}

dog.listAllProperties();


const myObject = {
    myMethod1: () => {}, // Arrow function
    myMethod2: function () {}, // Function declaration
}





//BUILT-IN-METHOD WITH THE USE OF ARROW FUNCTION
const animal = {
    name: "fluffy orange",
    age: 10,

    bark: () => {
        console.log("woof woof!");
        return "woof woof!";
    }
}

console.log(animal.name);
animal.bark();

console.log(animal.age);
console.log(animal.bark());

   //OBJECT-METHODS CONSIT OF THE FOLLOWING:

   // 1. Object-Keys()
   // 2. Object-Value()
   // 3. Object-Entries()
   // 4. Object-Frezeez()
   // 5. Object-Seal()
//OBJECT KEYS () => The Object.keys() method returns an Array Iterator object with the keys of an object.
//The Object.keys() method does not change the original object



const employees = {
    boss: " Kenny",
    secretary: "Naheem",
    sales: "Zainab",
    account: "Bola",
    cleaner: "ola"
}

// Object.keys
const employeeInfo = Object.keys(employees)
console.log(employeeInfo);

// Object-Value => this method creates and returns an array containing the "value" of an "Object".
const session = {
   id: 1,
   date: "27-feb-2024",
   device: "Mobile",
   browser: "chrome",
}

//Object-Value
const sessionValue = Object.values(session)
console.log(sessionValue);

//Object-Entries => this method creates a nested array of a key and values pairs of an object.

const operatingsystem = {
    name: "Linux",
    version: 18.04,
    license: "open source"
}

const operatingSystemInfo = Object.entries(operatingsystem)
console.log(operatingSystemInfo);



   









