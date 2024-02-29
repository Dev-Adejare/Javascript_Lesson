
//Exercise:
//Question:With a function expression, calculate the area of a rectangle

//Solution=>
// const calculateRectangleArea = function(lengths, width) {
//     return lengths * width;
// };


// const length = 5;
// const width = 10;
// const area = calculateRectangleArea(lengths, width);
// console.log("The area of the rectangle is: " + area);


//Object_Literal

let person = {
    first_name : "Salman",
    last_name : "Kofoshi",

    getFunction : function() {//method ---> a property value is a function
    return `My name is ${person.first_name} ${person.last_name}`
    },

    phoneNumber : {
        mobile: "12345",
        landline: "6789"
    }
}
console.log(person.getFunction());
console.log(person.phoneNumber.landline);

//Object_Constructor

function PersonTwo(first_name, last_name) {
    this.first_name = first_name,
    this.last_name = last_name
}

let person1 = new PersonTwo("Hayzed", "Mabululu");
console.log(person1);

//The New Keyword

const student = {

} //simple object

const studentTwo = Object();
studentTwo.firstName = "Eef"
studentTwo.lastName = "Eefy"
console.log(studentTwo);

const arr = [1, 2, 3, 4, 5];
const newArr = new Array(1, 2, 3, 4, 5);
console.log(arr, newArr)

//Date

const myBaiday = new Date("August 2, 1993");
console.log(myBaiday)

const myNumber = new Number(100.00);
console.log(myNumber.toFixed(0));

//This Keyword => this is used to reference the object thats executing the current function

function Sentence(words) { //constructor function syntax.
    this.words = words;  //Here, it's this words that's executing the function.
    console.log(this);

} 

const $_ = new Sentence(`Hello there! We're learning about this keyword`);

function Car(color, brand, wheels, id) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    this.id = id;

    console.log(this)
}

const blueCar = new Car("Blue", "BMW", 4, "🚙");
const redCar = new Car("Red", "Ferrari", 4, "🚗🏎️");

//Class-Work
function Cohort(name, age, favFood, phoneNo, baidayz) {
    this.name = name;
    this.age =age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.baidayz =baidayz;

    console.log(this)

}

const first_cohort = new Cohort("Ola", 30, "Semo", +23480455453, new Date ("october 4, 1990"));
const second_cohort = new Cohort("Akin", 20, "Amala", +23480455553, new Date ("september 4, 1991"));
const third_cohort = new Cohort("Wale", 25, "pounded_Yam", +23490455553, new Date ("August 3, 1993"));

//Class_Keyword => this is a schemal for an object save many value
// this can be declare in two ways ;
// Class expression
// Class declaration

//Class-declaration
 class Shape1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
 }

 const areas = new Shape1(10, 2);

 //Class_Expression
//  i---> anonymous
 const Shape = class{
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
 }

 const area1 = new Shape(10, 2);

 // ii----> unanonymous
 const BigBoy = class Bigie {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        console.log(this)
    }
    // getter function
    get him() {
        return this.coder();
    }

    // method
    coder() {
        return {name: this.name, age: this.age}
    }
 }

//  const instances = new BigBoy("Paiko", 40)
//  console.log(instance.him)

 
 //Exp. 2
 const School = class Academy {
    constructor(name, location) {
        this.name = name;
        this.location = location
    }

    get principal() {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location}
    }
 }

 const headMaster = new School("Kenny", "PEGAMUT");
 console.log(headMaster.principal);


 //Exercise 2 =>
 const Shapez = class RectShape {
    constructor(length, breath) {
        this.length = length;
        this.breath = breath;

    }

    get method() {
        return this.area();
    
    }
    area() {
        return {area: this.length * this.breath};
    }
 }

 const Shap = new Shapez (20, 10);
 console.log(Shap.method)





