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

// Object-Value () => this method creates and returns an array containing the "value" of an "Object".
const session = {
   id: 1,
   date: "27-feb-2024",
   device: "Mobile",
   browser: "chrome",
}

//Object-Value
const sessionValue = Object.values(session)
console.log(sessionValue);

//Object-Entries () => this method creates a nested array of a key and values pairs of an object.

const operatingsystem = {
    name: "Linux",
    version: 18.04,
    license: "open source"
}

const operatingSystemInfo = Object.entries(operatingsystem)
console.log(operatingSystemInfo);

//Object-Freeze () =>  This method prevents modification of existing properties and also prevent addition of amother property or removal of a property

const user = {
    username: "John",
    password: 12345
}  

const userInfo = Object.freeze(user)
console.log(userInfo);

userInfo.username = "Kenny"
console.log(userInfo);

const userOne = {
    userName: "John",
    password: 12345
}



//Object-Seal () => this method prevents new properties from being added or removed.
const userInfo1 = Object.seal(userOne)
userInfo1.userName = "Az"
userInfo1.age = 32
console.log(userInfo1);



let x 

const person = {
    name: "Joseph",
    age: 25,
    isAdmin: true,
    
    address: {
        street: "B28, pegamut strt, ikeshi",
        city: "Ota",
        state: "Ogun state"
    },

    hobbies: ["Music", "Sport"]
}

//assesing an array inside an pobject

x = person.hobbies[0];
let y = person["hobbies"][1];
console.log(x, y);

// x = [person.hobbies[0], person.hobbies[1]];
// console.log(x);

//updating a property
person.name = "Adewale"
console.log(person);

person.address.street = "ile akuji, ita adamu"
console.log(person);

//Delete a property 

delete person.address.state
console.log(person);

delete person.address.city
console.log(person);

//Adding function to an object => When adding a function to an Object, it allpws to make use of only Function Experession

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}
    
person.greet();

      //VALUE & REFERENCE 
      //Copying Primitive Value => Here, we deals with copying numbers & copying strings.

//Copying Numbers
let x1 = 1
let y1 = x1;

x1 = 2
console.log(x1)
console.log(y1)

//Copying Strings
 let firstPerson = "Mark"
 let secondPerson = firstPerson

 firstPerson = "Austin"
 console.log(firstPerson);
 console.log(secondPerson);

       //VALUE & REFERENCE 
      //Copying Primitive Value => Here, we deals with copying numbers & copying strings.

      //Copying Complex Value

      //copying Arrays

      const animals = ["dogs", "cats"];
      const otherAnimals = animals

      animals.push("Goat");
      console.log(animals);
      console.log(otherAnimals);

      // Copying Objects

      const data = {
        firstName: "Oloyede",
        lastName: "Ahaji"
      }

      const otherdata = data;
      console.log(data);
      console.log(data === otherdata);


      // EQUALITY

      const person1 = {
        firstName: "Adeola"
      }
      const otherPerson1 = {
        firstName: "Adeola"
      }

      
      console.log(person1.firstName === otherPerson1.firstName);
      console.log(person1.firstName !== otherPerson1.firstName);
      console.log(person1 === otherPerson1);
      console.log(person1 !== otherPerson1);


      //Video
      //Objects
      //Key-Value pairs in curly braces
      const myObj = { name: "Dave" };

      const anotherObj = {
        alive: true,
        answer: 42,
        hobbies: ["Eat", "Sleep", "Code"],
        beverages: {
            morning: "Coffee",
            afternoon: "Iced Tea"
        },
        
       
      };
      console.log(anotherObj.beverages.morning);










   









