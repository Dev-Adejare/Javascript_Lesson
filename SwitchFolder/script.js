// SWITCH-STATEMENT
   
//   Switch-Statement: used to perform different operations and it;s similar to if & else.
//   comprise of Switch keywords, such as; -case, -Break & Default.
//   Break:-

  let superHero = "Captain America";

  switch (superHero) {
    case 'iron Man':
      console.log("i am iron Man..")
      break;
      case 'Thor':
        console.log("That is my hammar!")
        break;
        case 'Captain America' :
          console.log("Never give up!")
          break;
          case 'Black Widow':
            console.log('One short, One kill.!')
            break;
            default:
              console.log("Enter a valid superHero Name")

 }


 
let FruitName = "Apple"
let message;

switch (FruitName) {
 case 'Mango':
   message = "sweetend"
   break;

   case 'Orange':
   message = "unsweetend"
   break;

   case 'Apple':
     message = " Apple are safe and sweet!!"
     break;

     case 'Banana':
     message = "unsafe"
     break;

     default:
       message = "none of the above"
}
console.log(message)

