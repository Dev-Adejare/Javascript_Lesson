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

































