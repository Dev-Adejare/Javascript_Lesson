 //SINGLE STRING ('')

 const words = "i am a boy"


 //DOUBLE STRING ("")

 const word = "i am a boy"


 //BACKTICKS ( ``)

 const worlds = `i am a boy`

//console.log(worlds, word, words)

const age = 12
const school = 'DLTAfrica coding'
const name = "Kenny"

const sentence = `My name is ${name}, i am ${age} years old and i go to ${school} school`

console.log(sentence)

const math = " 2 + 2"

const mathematics = `${2 + 2}`

const lines = `1
2
3
4
5`

console.log(lines)

const numerals = 'Hello i\'m Kenny and i am from \"Osun State"'
console.log(numerals)


//Checking the length of a string 

const names = "Adejare"

console.log(names.length)

//To know the index of A in the names i.e no. of names

console.log(names[0])

//Changing the case of String

const world = "i am a big baba"

const worldz = "SHE IS A BIG WOMAN"

console.log(world.toUpperCase())
console.log(worldz.toLowerCase())

//Checking for Substring

const man = "I love coding and my favourite language is Javascript, Javascript"

const final = man.indexOf('Javascript')
console.log(final)


//CHECK STRING PROPERTIES;

//To check for the last index of Javascript
const main = man.lastIndexOf('Javascript')
console.log(main)



//To check if a certain word is in a statement
const check = man.includes('favourite')
console.log(check)

//To check if the statement start with I
const starting = man.startsWith('I')
console.log(starting)

//To check if the statement end with t;
const ending = man.endsWith('t')
console.log(ending)


//Getting a SubString; We're making use of SLICE METHOD to get a substring

const exampleString = "HotDog"
console.log(exampleString.slice())
console.log(exampleString.slice(-7))
console.log(exampleString.slice(0, 3))
console.log(exampleString.slice(3))
console.log(exampleString.slice(-1))
console.log(exampleString.slice(0, 2))
console.log(exampleString.slice(2))


//SPLIT-METHOD => Description
// The split() method splits a string into an array of 
// substrings.The split(' ') method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

const sentences = "The quick brown fox jumped over the lazy dog";
console.log(sentences.split(' '));

// Example2
const namez = "KENNY and ADEJARE";
const split1 = namez.split(' ')
console.log(split1);



//REVERSE( ) => The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array


const namezi = "Adebisi and Omotola";
const split11 = namezi.split(' ')
console.log(split11);

const reverse$ = split11.reverse()
console.log(reverse$);

//JOIN METHOD => The join() Method
// The join() method joins array elements into a string.
// It this example we have used " * " as a separator between the elements:

const join1 = reverse$.join(' ');
console.log(join1);

//REPEAT() METHOD => The repeat() method returns a string with a number of copies of a string.
//The repeat() method does not change the original string.

const dogsays = "Woof ";
console.log(dogsays.repeat(2));


//TRIM() METHOD => The trim() method removes whitespace from both sides of a string

const trim = "  @example.com  "
console.log(trim.trim());












