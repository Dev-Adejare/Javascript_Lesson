const cars = ["BMW", "Volvo", "Lexus", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars);
}

let i = 0;
let len = cars.length;
let text = "cars";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
  console.log(cars);
}

for (let i = 1; i < 15; i++) {
  console.log(i);
}

const colors = ["red", "green", "blue", "yellow"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
