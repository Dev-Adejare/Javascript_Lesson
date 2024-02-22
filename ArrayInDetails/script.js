//Array => An array is a data type, which can hold more than one value:


const nested = [[1,2], [3,4], [5,6]];
const newArray = nested[0][1]
console.log(newArray);

const object = {
    name : 'john',
    age : 60,

}
console.log(object);


//Array inside Object.

const arr = [
    "Banana",
    10000,
    {
        namez : "Bola",
        age : 80
    },

    function name () {
        alert("Boooooooooooom")
    }

]
console.log(arr)

//ES5 FOR LOOP METHOD
const cohorts = [
  "Soliu",
  "Zainab",
  "Sir Kenny",
  "Bode",
  "Nafisat",
  "Tunmise",
  "Baba Oloye",
  "Abdul-Lateef",
];
for( let i = 0; i < cohorts.length; i++){
    console.log(i, cohorts[i]);

}

//Change Name and replace with New name
const change = (cohorts[1] = 'Bash');

cohorts[7] = 'Tolu'

//ES6 FOR LOOP METHOD
for (const cohort of cohorts) {
    console.log(cohort);
}

//ARRAY-PUSH =>The push() method returns the new array length:
//It add new element to the end of an ARRAY.

const students =['Yemi', 'Sola', 'Grace', 'Maryam', 'Femi','Bola'];
console.log(students);

const pushed = students.push('Babe', 'Kemi', 'Sola', 'Akin');
console.log(pushed);
console.log(students);

// POP METHOD => The pop() method removes the last element from an array
const numbers = [3, 4, 5, 6, 7, 8, 9];
console.log(numbers)

const popped = numbers.pop();
console.log(popped);
console.log(numbers);


const fruits = ['Mango', 'Cashew', 'Apple', 'Strawberry'];
console.log(fruits);

const poppe = fruits.pop();
console.log(poppe);
console.log(fruits);

/************SHIFT()***************/
// SHIFT => Shift (remove) the first element of the array:

const colors = ["Violet", "Red", "Blue", "Black"];
console.log(colors)

const rmFirst = colors.shift()
console.log(rmFirst);
console.log(colors);

/**************UNSHIFT()**************/ 
// UNSHIFT => The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array

const months = ["March", "July", "September", "January"];
console.log(months)

const adMonth = months.unshift("Febuary")
console.log(adMonth)
console.log(months)


/*************SPLICE() *************/
//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array

const fruitz = ["Apple", "Mango", "Orange", "Pawpaw", "Veg"];
console.log(fruitz)

fruitz.splice(2, 0, "carrot", " Maize");
console.log(fruitz);


const countries = ["Kenya", "Malaysia", "Qatar", "Canada", "Nigeria"];
console.log(countries);

countries.splice(3, 2, "Egypt", "Ghana", "Morocco");
console.log(countries);


const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"];
console.log(wears);

wears.splice(3)
console.log(wears);

const drinks = ["coke", "Viju", "Gin", "Exotics", "Malt"];
console.log(drinks);

drinks.splice(2, 1);
console.log(drinks);


/***************SLICE()****************/
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string

const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "Hayzeed"];
console.log(men);

const newMen = men.slice(2, 5);
console.log(newMen);

const newString = "Nafeesah"
console.log(newString.length);
const newSlice = newString.slice(2,7);
console.log(newSlice);

const newName = "ADEJARE"
console.log(newName.length);
const newSlize = newName.slice(2,5);
console.log(newSlize);

/******************toString()********************/ 
// The toString() method returns a string as a string.
// The toString() method does not change the original string.
// The toString() method can be used to convert a string object into a string.

const menString = men.toString();
console.log(menString);


//***************includes()***************** */
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

const checkMen = men.includes("Abee");
console.log(checkMen);
const checkMen2 = men.includes("Bash");
console.log(checkMen2);

/*******************sort()********************/ 
// The sort() method sorts an array alphabetically:


men.sort();
console.log(men);


const alph = ['G', 'F', 'K', 'A', 'B', 'Z'];
console.log(alph);


alph.sort();
console.log(alph);


const numbs = [9, 7, 8, 5, 1, 4, 25, 35, 99, 2, 3, 6];
console.log(numbs);

numbs.sort();
console.log(numbs);

numbs.sort((a,b) => a-b);
numbs.sort((a,b) => b-a);
console.log(numbs);



/****************** indexOf()*********************/ 
// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive


const numb$ = [9, 4, 8, 5, 1, 7, 25, 35, 99, 2, 3, 6];
console.log(numb$);

const indexOne = numb$.indexOf(7);
console.log(indexOne);

const tutor = ["Abdullah", "Naheem", "Anate", "Seyi", "Soliu"];
console.log(tutor);

const indexTt = tutor.indexOf("Anate");
console.log(indexTt);



/*******************lastIndexOf()*********************/
// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
// The lastIndexOf() method searches the string from the end to the beginning.
// The lastIndexOf() method returns the index from the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive

const lastIndex = numb$.lastIndexOf(7);
console.log(lastIndex);


/*************loop()***************/

const names = ['Zainab', 'Bashirat', 'Nafeesah'];

/*************ES5 loop METHOD*******************/
for(let i = 0; i < names.length; i++){
    console.log(i, names[i]);
  }

/*******ES6**********/ 

for (const namezz of names) {
    console.log(namezz)
}

/****************for Each()*****************/
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

names.forEach(function() {});

names.forEach((value, i, arr) => {
    console.log(value.toLocaleUpperCase());
    // console.log(i);
    // console.log(arr)
})

// /****Exp 2****/ =>forEach

const _numberz = [2, 4, 3, 1, 2, 4];

_numberz.forEach(function(number, i) {
    console.log(number, )
})


// /************Exp 3***********/ => forEach

let mammals = ["lion", "Cow", "Dog", "Cat"];
mammals.forEach((mammal, i)=> console.log(mammal, i));

mammals.sort();
console.log(mammals)



/**********Exp 4************/ 
let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16,];

trans.forEach((tran)=> {
    console.log(totalVal, (totalVal  += tran), tran);
})

console.log(totalVal);

/**********Exp 4************/ 

names.forEach((name) => console.log(`Congratulations ${name}, youn don smoke weed`));


/**************Map METHOD**************/ 
// You can create a Map by passing an Array to the new Map() constructor:
// Passing an Array to new Map()
// Create a Map and use Map.set()


const inventory = [
    {name: "Rice", price: 4000},
    {name: "Beans", price: 4000},
    {name: "Semo", price: 4000},
    {name: "Yam", price: 4000},
    {name: "Garri", price: 4000},
];

const price = inventory.map((value) => {
    return value.price
})

console.log(price)
    // console.log(value.name)

    const commodities = inventory.map((commodity) => {
        return commodity.name
    })

    console.log(commodities);


//Exp.

const numBers = [1, 2, 3, 4, 5, 6, 7];
console.log(numBers);

const newMultiple = numBers.map((value) => {
    return value * 2;
})

console.log(newMultiple);


































