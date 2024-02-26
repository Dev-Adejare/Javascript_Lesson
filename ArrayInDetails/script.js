// //Array => An array is a data type, which can hold more than one value:


// const nested = [[1,2], [3,4], [5,6]];
// const newArray = nested[0][1]
// console.log(newArray);

// const object = {
//     name : 'john',
//     age : 60,

// }
// console.log(object);


// //Array inside Object.

// const arr = [
//     "Banana",
//     10000,
//     {
//         namez : "Bola",
//         age : 80
//     },

//     function name () {
//         alert("Boooooooooooom")
//     }

// ]
// console.log(arr)

// //ES5 FOR LOOP METHOD
// const cohorts = [
//   "Soliu",
//   "Zainab",
//   "Sir Kenny",
//   "Bode",
//   "Nafisat",
//   "Tunmise",
//   "Baba Oloye",
//   "Abdul-Lateef",
// ];
// for( let i = 0; i < cohorts.length; i++){
//     console.log(i, cohorts[i]);

// }

// //Change Name and replace with New name
// const change = (cohorts[1] = 'Bash');

// cohorts[7] = 'Tolu'

// //ES6 FOR LOOP METHOD
// for (const cohort of cohorts) {
//     console.log(cohort);
// }

// //ARRAY-PUSH =>The push() method returns the new array length:
// //It add new element to the end of an ARRAY.

// const students =['Yemi', 'Sola', 'Grace', 'Maryam', 'Femi','Bola'];
// console.log(students);

// const pushed = students.push('Babe', 'Kemi', 'Sola', 'Akin');
// console.log(pushed);
// console.log(students);

// // POP METHOD => The pop() method removes the last element from an array
// const numbers = [3, 4, 5, 6, 7, 8, 9];
// console.log(numbers)

// const popped = numbers.pop();
// console.log(popped);
// console.log(numbers);


// const fruits = ['Mango', 'Cashew', 'Apple', 'Strawberry'];
// console.log(fruits);

// const poppe = fruits.pop();
// console.log(poppe);
// console.log(fruits);

// /************SHIFT()***************/
// // SHIFT => Shift (remove) the first element of the array:

// const colors = ["Violet", "Red", "Blue", "Black"];
// console.log(colors)

// const rmFirst = colors.shift()
// console.log(rmFirst);
// console.log(colors);

// /**************UNSHIFT()**************/ 
// // UNSHIFT => The unshift() method adds new elements to the beginning of an array.
// // The unshift() method overwrites the original array

// const months = ["March", "July", "September", "January"];
// console.log(months)

// const adMonth = months.unshift("Febuary")
// console.log(adMonth)
// console.log(months)


// /*************SPLICE() *************/
// //The splice() method adds and/or removes array elements.
// //The splice() method overwrites the original array

// const fruitz = ["Apple", "Mango", "Orange", "Pawpaw", "Veg"];
// console.log(fruitz)

// fruitz.splice(2, 0, "carrot", " Maize");
// console.log(fruitz);


// const countries = ["Kenya", "Malaysia", "Qatar", "Canada", "Nigeria"];
// console.log(countries);

// countries.splice(3, 2, "Egypt", "Ghana", "Morocco");
// console.log(countries);


// const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"];
// console.log(wears);

// wears.splice(3)
// console.log(wears);

// const drinks = ["coke", "Viju", "Gin", "Exotics", "Malt"];
// console.log(drinks);

// drinks.splice(2, 1);
// console.log(drinks);


// /***************SLICE()****************/
// // The slice() method extracts a part of a string.
// // The slice() method returns the extracted part in a new string.
// // The slice() method does not change the original string

// const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "Hayzeed"];
// console.log(men);

// const newMen = men.slice(2, 5);
// console.log(newMen);

// const newString = "Nafeesah"
// console.log(newString.length);
// const newSlice = newString.slice(2,7);
// console.log(newSlice);

// const newName = "ADEJARE"
// console.log(newName.length);
// const newSlize = newName.slice(2,5);
// console.log(newSlize);

// /******************toString()********************/ 
// // The toString() method returns a string as a string.
// // The toString() method does not change the original string.
// // The toString() method can be used to convert a string object into a string.

// const menString = men.toString();
// console.log(menString);


// //***************includes()***************** */
// // The includes() method returns true if an array contains a specified value.
// // The includes() method returns false if the value is not found.
// // The includes() method is case sensitive.

// const checkMen = men.includes("Abee");
// console.log(checkMen);
// const checkMen2 = men.includes("Bash");
// console.log(checkMen2);

// /*******************sort()********************/ 
// // The sort() method sorts an array alphabetically:


// men.sort();
// console.log(men);


// const alph = ['G', 'F', 'K', 'A', 'B', 'Z'];
// console.log(alph);


// alph.sort();
// console.log(alph);


// const numbs = [9, 7, 8, 5, 1, 4, 25, 35, 99, 2, 3, 6];
// console.log(numbs);

// numbs.sort();
// console.log(numbs);

// numbs.sort((a,b) => a-b);
// numbs.sort((a,b) => b-a);
// console.log(numbs);



// /****************** indexOf()*********************/ 
// // The indexOf() method returns the position of the first occurrence of a value in a string.
// // The indexOf() method returns -1 if the value is not found.
// // The indexOf() method is case sensitive


// const numb$ = [9, 4, 8, 5, 1, 7, 25, 35, 99, 2, 3, 6];
// console.log(numb$);

// const indexOne = numb$.indexOf(7);
// console.log(indexOne);

// const tutor = ["Abdullah", "Naheem", "Anate", "Seyi", "Soliu"];
// console.log(tutor);

// const indexTt = tutor.indexOf("Anate");
// console.log(indexTt);



// /*******************lastIndexOf()*********************/
// // The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
// // The lastIndexOf() method searches the string from the end to the beginning.
// // The lastIndexOf() method returns the index from the beginning (position 0).
// // The lastIndexOf() method returns -1 if the value is not found.
// // The lastIndexOf() method is case sensitive

// const lastIndex = numb$.lastIndexOf(7);
// console.log(lastIndex);


// /*************loop()***************/

// const names = ['Zainab', 'Bashirat', 'Nafeesah'];

// /*************ES5 loop METHOD*******************/
// for(let i = 0; i < names.length; i++){
//     console.log(i, names[i]);
//   }

// /*******ES6**********/ 

// for (const namezz of names) {
//     console.log(namezz)
// }

// /****************for Each()*****************/
// // The forEach() method calls a function for each element in an array.
// // The forEach() method is not executed for empty elements.

// names.forEach(function() {});

// names.forEach((value, i, arr) => {
//     console.log(value.toLocaleUpperCase());
//     // console.log(i);
//     // console.log(arr)
// })

// // /****Exp 2****/ =>forEach

// const _numberz = [2, 4, 3, 1, 2, 4];

// _numberz.forEach(function(number, i) {
//     console.log(number, )
// })


// // /************Exp 3***********/ => forEach

// let mammals = ["lion", "Cow", "Dog", "Cat"];
// mammals.forEach((mammal, i)=> console.log(mammal, i));

// mammals.sort();
// console.log(mammals)



// /**********Exp 4************/ 
// let totalVal = 0;
// const trans = [42, 45, 26, 4, 13, 16,];

// trans.forEach((tran)=> {
//     console.log(totalVal, (totalVal  += tran), tran);
// })

// console.log(totalVal);

// /**********Exp 4************/ 

// names.forEach((name) => console.log(`Congratulations ${name}, you don smoke weed`));


// /**************Map METHOD**************/ 
// // You can create a Map by passing an Array to the new Map() constructor:
// // Passing an Array to new Map()
// // Create a Map and use Map.set()


// const inventory = [
//     {name: "Rice", price: 4000},
//     {name: "Beans", price: 4000},
//     {name: "Semo", price: 4000},
//     {name: "Yam", price: 4000},
//     {name: "Garri", price: 4000},
// ];

// const price = inventory.map((value) => {
//     return value.price
// })

// console.log(price)
//     // console.log(value.name)

//     const commodities = inventory.map((commodity) => {
//         return commodity.name
//     })

//     console.log(commodities);


// //Exp.

// const numBers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numBers);

// const newMultiple = numBers.map((value) => {
//     return value * 2;
// })

// console.log(newMultiple);




// ARRAY-FILTER => The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const numbers = [-10, 0, -2, 4, -9, 5, -8];
const filteredNumbers = [];

// const filteredNumbers = numbers.filter((number) => {
//     return number < 0
// })

// console.log(filteredNumbers);



// for Loop Filter-Format

for(let i = 0; i < numbers.length; i++){
         if(numbers[i] < 0){
            filteredNumbers.push(numbers[i]);
         }
       }
       console.log(filteredNumbers);


       let employees = [
        {name: "Naheem", overtime: 10},
        {name: "Abdullah", overtime: 5},
        {name: "Anate", overtime: 4},
        {name: "Seyi", overtime: 7},
        {name: "Soliu", overtime: 9},
        {name: "Kenny", overtime: 12},
       ]

     const employeesToreward = employees.filter
     ((employee) => {
        return employee.overtime >= 7
     })

     const employeesTorewardNames = employeesToreward.map
     ((employee) => {
        return employee.name
     })

     console.log(employeesToreward)
     console.log(employeesTorewardNames)


     employeesTorewardNames.forEach((name) => {
        console.log(`Hi ${name}, Congratulations you have receive an award for your hardwork.`)
     })



     for (let i = 0; i <  employeesTorewardNames.length; i++) {
        console.log(`${employeesTorewardNames[i]}, you have recieved an award.`)};




        const creatures = [
            {Animal: "Shark", habitat: "ocean"},
            {Animal: "Whale", habitat: "ocean"},
            {Animal: "Hippopotamus", habitat: "Lake"},
            {Animal: "Lion", habitat: "savanna"},
            {Animal: "Monkey", habitat: "Jungle"},
        ]

        const acquaticAnimals = creatures.filter((creature) => {
            return creature.habitat === "ocean" || creature.habitat === "Lake"
        })

        console.log(acquaticAnimals);


        //ARRAY FIND => The find() method returns the value of the first element that passes a test.

        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

        const value = digits.find((digit) => {
            return digit > 4
        })

        console.log(value);


        const states = [
            'Ogun State',
            'Kogi State',
            'Anambra State',
            'Lagos State',
            'Benue State',

        ]

        const state = states.find((state) => {
            return  state.startsWith('A');
       

        })

        console.log(state);


        //CLASS-WORK
        //A student Assessment took place, with a total mark of 10, Give us 7 students and mark them over 10, now give a reward to each students with a score over the mark of 6


        
       let Students = [
        {name: "Naheem", mark: 9},
        {name: "Abdullah", mark: 8},
        {name: "Anate", mark: 5},
        {name: "Seyi", mark: 7},
        {name: "Soliu", mark: 3},
        {name: "Kenny", mark: 8},
        {name: "Khodijah", mark: 8},
       ]

       const StudentsToreward = Students.filter
     ((student) => {
        return student.mark > 6;
     })

     const StudentsTorewardNames = StudentsToreward.map
     ((student) => {
        return student.name
     })


     console.log(StudentsToreward);
     console.log(StudentsTorewardNames);


     StudentsTorewardNames.forEach((name) => {
        console.log(`Hi ${name}, Excellent and good of you, you scored above 6marks.`)
     })





     // CLASS WORK

// A student Assessment took place, with a total mark of 10, Give us 7 students and mark them over 10, now give a reward to each students with a score over the mark of 6.

const studentS = [
    {name: "Soliu", score: 4},
    {name: "Hayzed", score: 7},
    {name: "Kenny", score: 3},
    {name: "Eef", score: 8},
    {name: "Abdullahi", score: 2},
    {name: "Zainab", score: 5},
    {name: "Tunmise", score: 9},
]

const studentAboveFromSix = studentS.filter((student) => {
    if (student.score > 6 && student.score <= 10) {
        return student.score;
    }
    
})

const rewardStudents = studentAboveFromSix.map((student) => {
    return student.name;
})

rewardStudents.forEach((name) => {
    console.log(`Hi ${name}, here is your reward for scoring above 6`)
})


//Class-solution

const studentAssessment = [
    {name: "Nafisah", scores: 6},
    {name: "Zainab", scores: 7},
    {name: "soliu", scores: 5},
    {name: "Oluwatumise", scores: 8},
    {name: "Bode", scores: 4},
    {name: "Hayzed", scores: 3},
    {name: "Abdullah", scores: 92},
]

const studentsAboveSix = studentAssessment.filter((student) => {
    return student.scores > 6
})

console.log(studentsAboveSix)

const studentName = studentsAboveSix.map((student) =>{
    return student.name
})

console.log(studentName);

studentName.forEach((student) =>{
    console.log(`Hi ${student}, You have been promoted to the next class`)
})



// another ways


const studentAboveFromSixi = studentS.filter((student) => {
    if (student.score > 6 && student.score <= 10) {
        return student.score;
    }
    
})
studentAboveFromSixi.forEach((student) => {
    console.log(`Hi ${student.name}, here is your reward for scoring above 6`)
})

// ARRAY AND SOME EVERY

//ARRAY SOME() () =>The some() method checks if any array elements pass a test (provided as a callback function).
const box = [1, 2, 3, 4, 5, 6, 7]
console.log(box.some((el) => {return el < 8})); //el is just a variable name


//ARRAY EVERY() => This method executes a function for each array element.
console.log(box.every((el) => {return el < 4}));  //el is just a variable name



     






      
        

































