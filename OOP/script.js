
//Exercise:
//Question:With a function expression, calculate the area of a rectangle

//Solution=>
const calculateRectangleArea = function(length, width) {
    return length * width;
};


const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is: " + area);


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
function cohort1(name, age, favFood, phoneNo, baidayz) {
    this.name = name;
    this.age =age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.baidayz =baidayz;

    console.log(this)

}

const first_cohort = new cohort1("Ola", 30, "Semo", "080455453", new Date ("october 4, 1990"));
const second_cohort = new cohort1("Akin", 20, "Amala", "080455553", new Date ("september 4, 1991"));
const third_cohort = new cohort1("Wale", 25, "pounded_Yam", "090455553", new Date ("August 3, 1993"));



