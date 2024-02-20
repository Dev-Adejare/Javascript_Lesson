

//Global Scope

const name = "Ade"
const age = 17;
const school = "Agege Primary School, Orile";


const one = () => {
    return`${name} of ${age} years of age, attended ${school}`
}
const answer = one()
    console.log(answer)


    const file = () => {
        return`${name} likes eating ${age} wraps of semo in ${school}`;
    }

    const sentence = file();
    console.log(sentence)


    //Local Scope

    const localScope = () => {
        const name = "Oloye Pupo";
        const religion = "Muslim";
        const activity = "Drinking of Wine";

        return `${name} who is a ${religion} enjoys ${activity}`;
    }

    const oloye = localScope()
    console.log(oloye)



    const religion = 'christian'

    const exampleThree = () => {
       const name = "chima"
       if(true){
           
           
           // BLOCK SCOPE
   
           const schoolName = "LASU"
   
           console.log(`${name} is a ${religion} and goes to ${schoolName}`)
       }
   }
   exampleThree()
   
   
   
   
    // HOISTING

    const result = exampleFive()
    console.log(result)

    function exampleFive(){
        return 2 + 2
    }

    //CLOSURE

    const outerFunction = () => {
        const ben = 5



        const innerFunction = () => {
            const man = 7

            return ben + man
        }



        // const final = innerFunction()

        // console.log(final * 2)
        return  innerFunction() * 2
    }

    // outerFunction()

    const answers = outerFunction()

    console.log(answers)


// CLASS WORK
    const firstNumber = () => {
        const f = 20
        
        const secondNumber = () => {
            const g = 4

            return f + g >= 40? "sum is greater than or equal to 40" :f + g;
        }

        return secondNumber() * 4

    }

    const output = firstNumber()
    console.log(output)




    //Solution=> Class-Exercise

    const FirstFunc = () => {
        const div = 2

        const secondFunc = () => {

            let certainNumber
            const mult = 4

            if (true){
                certainNumber = 5
            }

            const ans = certainNumber * mult
            return ans
        }

        const initialAnswer = secondFunc()

        const finalAnswer = initialAnswer / div

        console.log(finalAnswer)
    }

    FirstFunc()


    //Soliu-Solution

    const mainFunction = () => {
        const certainNumber = 8;
        const mainNum = 2;
    
        const childFunction = () => {
            const cdnNumber = 4;
    
            if (certainNumber) {
                return certainNumber * cdnNumber;
            }
    
        }
    
        return childFunction() / mainNum;
    
    }
    
    const finalAnswer = mainFunction();
    
    console.log(finalAnswer);

        
    




    


    










  


