
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

function personTwo(first_name, last_name) {
    this.first_name = first_name,
    this.last_name = last_name
}

let person1 = new personTwo("Hayzed", "Mabululu");
console.log(person1);

//The New Keyword

const student = {

} //simple object

const studentTwo = Object();
studentTwo.firstName = "Eef"
studentTwo.lastName = "Eefy"
console.log(studentTwo);