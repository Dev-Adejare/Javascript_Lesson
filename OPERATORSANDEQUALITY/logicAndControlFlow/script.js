// If statement
// const age = 18

// const zainab = 19


// if (zainab > age){
//     console.log("You are granted admission")
// }else if (age){
//     console.log("Your Admission have been postponed till next year ")
// }
 
// const time = 10

// const hour = 10
// let greeting;

// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

//Truthy and Falsy Values

// False
// ""
// 0
// null
// Unidentified
// NaN

// if("6ftu") {
//     console.log("truthy value")
// }else{
//     console.log("falsy value")
// }

// const sname = "Ade"
// const ename = "Hannah"

// if (sname && ename){
//     console.log("Allowed in class")
// }else if (sname || ename){
//     console.log("must not be allowed in class")
// }else{
//     console.log("not allowed!!!")
// }







// Example 1
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
// const time = 10


// if (time < 10) {
//     console.log("Good morning")
//   } else if (time < 20) {
//     console.log("Good day")
//   } else {
//     console.log("Good evening")
//   }


//   Example 2
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening";

// const hour = 18

//   if (hour < 18) {
//     console.log("Good day")
//   } else {
//     console.log("Good evening")
//   }



  // 15 february, 2024.

  // Example 1.

  let temperature = 25;

  if(temperature > 30) {
    console.log("it's a hot day!")
  }else{
    console.log("it's not too hot today")
  }


  // Example 2.

  // let hour = new Date().getHours();

  // if ( hour < 12) {
  //   console.log("Good morning")

  // } else if(hour >= 12 && hour < 18) {
  //   console.log("Good Afternoon")

  // }else{
  //   console.log("Good Evening")
  // }


  let hour = new Date() .getHours();

  if (hour < 12) {
    console.log("Class Start")

  } else if (hour >= 12) {
    console.log("First Break") 
  
  }else if (hour >= 13) {
    console.log("Second Break")
  
  }else{
    console.log("Closing Period")
  }
      

  let score = 85

  if (score >= 90) {
    console.log("Excellent! you score A.")
    
  }else if (score >= 80) {
    console.log("Well done! you score B.")
    
  }else if(score >= 70) {
    console.log("Good job! you score C.")
  
  }else if(score >= 60) {
    console.log("you pass! you score D")

  }else{
    console.log("sorry you failed. you score F")
  }






  // console.log(superHero)

  // let day = new Date() .getDay();
  // let DayName;

  // switch (day) {
  //   case 0:
  //     dayName = "Sunday";
  //     break;
  //   case 1:
  //     dayName = "Monday";
  //     break;
  //   case 2:
  //      dayName= "Tuesday";
  //     break;
  //   case 3:
  //    dayName= "Wednesday";
  //     break;
  //   case 4:
  //     dayName= "Thursday";
  //     break;
  //   case 5:
  //     dayName = "Friday";
  //     break;
  //   case 6:
  //    dayName = "Saturday";

  //    default:
  //     dayName = "unknown"
  // }

  // console.log("Today is " + dayName)




  




// let fruits = "Banana"

// switch
// (fruits) {
  
// case "Banana":
//     alert("Hello")
//     break;
  
// case "Apple":
//     alert("Welcome")
//     break;   
// }

// console.log(fruits)

// TERNARY-OPERATOR:- There is also a short-hand if else, which is known as the ternary operator because it consists of three operands.
// It can be used to replace multiple lines of code with a single line, and is most often used to replace simple if else statements:

const oldMan = 80

if(oldMan >= 80){
  console.log('You can drive')

}else{
  console.log('You may not Drive')

}

oldMan >= 80 ? console.log('U can Drive') : console.log('U may not Drive');


 let age = 20;
 let canVote = age >= 18 ? "Yes, you can vote!" : "No you can't vote!";
console.log(canVote)



