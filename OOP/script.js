
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
