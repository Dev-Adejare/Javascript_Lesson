// LOOP:- We have While Loop & For Loop

// While Loop
// let i = 0;

// while(i < 10) {
//   console.log(i)
//   i++
// }

// //For Loop
// // ([Initialization]; [Condition]; [Final-Expression])

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }
// i = 0;


const cars = ["BMW", "Volvo", "Lexus", "Ford"];
for(let i = 0; i < cars.length; i++){
  console.log(cars)
}

let i = 0;
let len = cars.length;
let text = "cars";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
  console.log(cars)
}

for (let i = 1; i < 8; i++){
  console.log(i)
};

const colors = ["red", "green", "blue", "yellow"];

for(let i = 0; i < colors.length; i++){
  console.log(colors[i])
}
