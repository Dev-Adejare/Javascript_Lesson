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
    }
}

console.log(animal.name);
animal.bark();






