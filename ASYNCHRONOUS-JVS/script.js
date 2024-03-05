// "use strict"



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

// // const fetchUserPhotos = (username, callback) => {
// //     setTimeout(() => {
// //         console.log(`Now we have the photo for ${username}`)
// //         callback(["photo1", "photo2"]);
// //     },2000)
// // }

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

const myUsers = {
    userList: []
}

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


//Example2
const getAllUsersEmail = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchJson = await response.json();
    console.log(fetchJson);
    
    const  username = fetchJson.map((user) => {
        return user.username
    })
    console.log(username);
}

getAllUsersEmail()



//Try block
const getData = async () => {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data

    }catch (error) {
        console.log("Error:", error.message)
    }
}
getData()

.then((data) => console.log("data:", data)).catch((error) => console.log("Error:", error.message));