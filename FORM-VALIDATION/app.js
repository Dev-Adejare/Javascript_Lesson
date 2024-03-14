const form = document.getElementById('form');

const password1El = document.getElementById('password1');

const password2El = document.getElementById('password2');

const messageContainer = document.querySelector('.message-container');

const message = document.getElementById('message');


let isValid = false
let passwordMatch = false

const validateForm = () => {
    isValid = form.checkVisibility();
    console.log(isValid);                // this checks for the form visibility whether its valid or not and return boolean if the condtn is met/not met

    //Style main message for an error

    if(!isValid) {
        message.textContent = "Please fill out the field";
        message.style.color = "red";
        message.container.style.borderColor = "red"
        return
    }

    //Check to see if the password match

    if(password1El.value === password2El.value) {
        passwordMatch = true;
        
    }
}


const processFormData = (e) => {
    e.preventDefault();
    // console.log(e)

}

form.addEventListener('submit', processFormData)  //this allows the register button to allow you proceed to next and or either to safe password details