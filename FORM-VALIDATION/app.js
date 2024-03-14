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
        messageContainer.style.borderColor = "red"
        return
    }

    //Check to see if the password match

    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    }else{
        passwordMatch = false;
        message.textContent = "Make sure password match"
        message.style.borderColor = "red";
        message.style.color = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return
    }

    //Check to see if Form is valid and password Match

    if(isValid && passwordMatch) {
        message.textContent = "Successfully Registerd!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green"  // This shows success message if valid & brings otherwise if not match
       
    }
}


const processFormData = (e) => {
    e.preventDefault();
    // console.log(e)

    validateForm();  // Submit Data if Valid

}

form.addEventListener('submit', processFormData)  //this allows the register button to allow you proceed to next and or either to safe password details