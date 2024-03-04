// const interval = setInterval(() => console.log("Hello World"), 1000);
// clearInterval(interval);

// const myInterval = setTimeout(() => console.log ("Hello World"), 1000);
// console.log(myInterval)


//SYNCHRONOUS-JVS => is the one which the code is executed line by line & there task are completed instantly.

const functionOne = () => {
    console.log("Function One")


    functionTwo();
    console.log("FunctionOne, PartTwo")

}


const functionTwo = () => {
    setTimeout (() => console.log ("Function Two"), 2000);
}


functionOne();


//Call-Back => A callback is a function passed as an argument to another function

const fetchUser = (username) => {
    setTimeout(() => {
        return {user: username}
    },2000);
   
}

const user = fetchUser('test');
console.log(user);

const fetchUserOne = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the user");
        callback({user: username})

    }, 2000);
}

const user2 = fetchUserOne("Adejare", (user2) => {
    console.log(user2);
})

//Callback Hell =>  

const fetchUserTwo = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the user")
        callback(username);
    },2000)
}

const fetchUserPhotos = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the photo details")
        callback(["photo1", "photo2"]);
    },2000)
}

const fetchUserPhotoDetails = (photo, callback) => {
    setTimeout(() => {
        console.log("Now we have the photos")
        callback(photo);

    },2000)
}

const user3 = fetchUserTwo("test", (username) => {
    console.log(username);
    fetchUserPhotos(username, (userPhotos) => {
        console.log(userPhotos);
        fetchUserPhotoDetails(userPhotos[0], (details) => {
            console.log(details);
    });
    });
});


