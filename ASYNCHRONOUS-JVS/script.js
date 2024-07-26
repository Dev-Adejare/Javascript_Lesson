// "Use Strict"

// // // const interval = setInterval(() => console.log("Hello World"), 1000);
// // // clearInterval(interval);

// // // const myInterval = setTimeout(() => console.log ("Hello World"), 1000);
// // // console.log(myInterval)

// // //SYNCHRONOUS-JVS => is the one which the code is executed line by line & there task are completed instantly.

// const functionOne = () => {
//     console.log("Function One")

//     functionTwo();
//     console.log("FunctionOne, PartTwo")

// }

// const functionTwo = () => {
//     setTimeout (() => console.log ("Function Two"), 2000);
// }

// functionOne();

// // //Call-Back => A callback is a function passed as an argument to another function

// const fetchuser = (username) => {
//     setTimeout(() => {
//         return {user: username}
//     },2000);

// }

// // const user = fetchUser('test');
// // console.log(user);

// // const fetchUserOne = (username, callback) => {
// //     setTimeout(() => {
// //         console.log("Now we have the user");
// //         callback({user: username})

// //     }, 2000);
// // }

// // const user2 = fetchUserOne("Adejare", (user2) => {
// //     console.log(user2);
// // })

// // //Callback Hell =>

// const fetchUserTwo = (username, callback) => {
//     setTimeout(() => {
//         console.log("Now we have the user")
//         callback({username});
//     },2000)
// }



// const fetchUserPhotoDetails = (photo, callback) => {
//     setTimeout(() => {
//         console.log(`Now we have the photos details ${photo}`)
//         callback("details");

//     },2000)
// }

// const user3 = fetchUserTwo("Michael", (user) => {
//     console.log(`Your name is: ${user.username}`);
//     fetchUserPhotos(user.username, (userPhotos) => {
//         console.log(`Your photo are: ${userPhotos}`);
//         fetchUserPhotoDetails(userPhotos[0], (details) => {
//             console.log(`Your photo detals are: ${details}`);
//         });
//     });
// });

// // //This is called callback Hell. It becomes unreadable

// // const user4 = fetchUserTwo("Michael", (user) => {
// //     fetchUserPhotos(user.username, (userPhotos) => {
// //         fetchUserPhotoDetails(userPhotos[0], (details) => {
// //             fetchUserPhotoDetails(userPhotos[0], (details) => {
// //                 fetchUserPhotoDetails(userPhotos[0], (details) => {
// //                     fetchUserPhotoDetails(userPhotos[0], (details) => {
// //                         console.log(details);

// //                     })
// //                 })
// //             })
// //         })
// //     })
// // })

// // //PROMISE =>
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we are in Promise Land");

//         resolve({username: "Bode"});
//         reject("User not found")
//     },5000);

// })
// promise
// .then((user) => console.log(user.username))
// .catch((error) => console.log(error));

// // Using Promise to resolve the above issue;

// const fetchUser = (username) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("we are using Promise");
//         resolve(username)
//     }, 4000);
//     })
// }

// const fetchUserPhotos = (username) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("we have the photos");
//         resolve(["photo1", "photo2"])
//     }, 4000);
//     })
// }

// const fetchUserDeatails = (photo) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we have the photo details");
//         resolve("details");
//     }, 4000);
//     })
// }

// fetchUser("Zainab")
// .then((user) => fetchUserPhotos (user))
// .then((photos) => fetchUserPhotos(photos[0]))
// .then((details) => console.log(details))

// //Async & await

//Example1

// const myUsers = {
//   userList: [],
// };

// const myFoolFunc = async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const fetchJson = await response.json();
//     console.log(fetchJson);
//     // return fetchJson
// }

// myFoolFunc()

// const anotherFn = async () => {
//     const data = await myFoolFunc ();
//     myUsers.userList = data
//     console.log(myUsers.userList)
// }
// anotherFn()
// console.log(myUsers.userList)

// Example2
const getAllUsersEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchJson = await response.json();
  console.log(fetchJson);

  const username = fetchJson.map((user) => {
    return user.username;
  });
  console.log(username);
};

getAllUsersEmail();

// //Try block
const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
    // console.log(data)
  } catch (error) {
    console.log("Error:", error.message);
  }
};
getData()
  .then((data) => console.log("data:", data))
  .catch((error) => console.log("Error:", error.message));

// //Example3

const fetchDataWithErr = async () => {
    try{
        console.log('Fetching Data...')
        const res = await fetch ('https://jsonplaceholder.typicode.com/users');

        if(!res.ok) {
            throw new Error('Failed to fetch data ori e baje')
        }

        const $data = await res.json();
        return $data

    }catch (error) {
        console.log('Error:', error.message)
    }
}

fetchDataWithErr()
.then(result => {
    if(result) {
        console.log("Data", result)
    }
})

// const fetchAllData = async () => {
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users');

//         if (!response.ok) {
//             throw new Error('Not found will fixed soon')
//         }

//         const [userData] = await response.json() //Assuming data is an array of user
//         const {username, email, name} = userData.map((userData));
//         return {username, email, name};

//     }catch (error) {
//         console.log("Error:", error.message)
//     }
// }
// fetchAllData().then(({username,email,name}) =>{
//     console.log("Username:", username)
//     console.log("Email:", email)
//     console.log("Name:", name)
// })

// //Class-Work

// To get all the 10names, email, & username only
const fetchAllData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Not found will fixed soon");
    }

    const userData = await response.json(); //Assuming data is an array of user
    const mappedData = userData.map(({ username, email, name }) => {
      return { username, email, name };
    });
    console.log(mappedData);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
fetchAllData();

//To get all user Address Details, and company name

const fetchNestData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Not found will fixed soon");
    }

    const userData = await response.json(); //Assuming data is an array of user

    const mappedData = userData.map(
      ({ id, username, email, name, address, phone, website, company }) => ({
        id,
        username,
        email,
        name,
        address: {
          street: address.street,
        },
        phone,
        website,
        company: {
          name: company.name,
        },
      })
    );

    console.log(mappedData);
  } catch (error) {}

  try {
  } catch (error) {
    console.log("Error:", error.message);
  }
};
fetchNestData();


// //Mathematical_Method

const roundNub = Math.round(4.6); // round up the number after decimal & make it one
console.log(roundNub);

const ceil = Math.ceil(4.7); // Round up all the number to the next number after the first number in the box
console.log(ceil);


const floor = Math.floor(4.7); // Any number you put here returns all the number round up the number down infront
console.log(floor);

const sign = Math.sign(2) //Any number you put here, it returns one, just one number as 1
console.log(sign);

const pow = Math.pow(2,3); // Return the multiple of first number in the second number places.
console.log(pow);

const square = Math.sqrt(81); // Return square root
console.log(square);

const absolute = Math.abs(62); //Return the number back
console.log(absolute);

const random = Math.random();
console.log(random)

const trunc = Math.trunc(4.9);
console.log(trunc);

const cos = Math.cos(0 * Math.PI / 180);
console.log(cos)     // returns 1 (the cos of 0 degrees)

const log = Math.log(2);
console.log(log) //returns the natural logarithm of 2.

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E