let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let field;
let showBtnPassword = document.querySelector(".btn");
let fnFlag = false, lnFlag = false, emailFlag = false, pwdFlag = false;

let nameRegx = /^[a-z," "]+$/i;
let emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w)*(\.\w{2,3})+$/;
let passwordRegx = /^(?=.*\d)(?=.*[@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

for(let errorMessage of errorMessages) {
    errorMessage.classList.add("d-none");
}

for(let element of emptyFieldMessage) {
    element.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field) {
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(firstName) {
        fnTarget.classList.add("error");
        emptyFieldMessage[0].classList.add("d-none");
        if(!nameRegx.test(firstName)) {
            errorMessages[0].classList.remove("d-none");

        }
        else {
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag = true;
        }
    }
    else {
        emptyFieldMessage[0].classList.remove("d-none");
    }
 

    if(lastName) {
        lnTarget.classList.add("error");
        emptyFieldMessage[1].classList.add("d-none");
        if(!nameRegx.test(lastName)) {
            errorMessages[1].classList.remove("d-none");
        }
        else {
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag = true;
        }
    }
    else {
        emptyFieldMessage[1].classList.remove("d-none");
    }


    if(email) {
        emailTarget.classList.add("error");
        emptyFieldMessage[2].classList.add("d-none");
        if(!emailRegx.test(email)) {
            errorMessages[2].classList.remove("d-none");
        }
        else {
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag = true;
        }
    }
    else {
        emptyFieldMessage[2].classList.remove("d-none");
    }

    if(password) {
        pwdTarget.classList.add("error");
        emptyFieldMessage[3].classList.add("d-none");
        if(!passwordRegx.test(password)) {
            errorMessages[3].classList.remove("d-none");
        }
        else {
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            pwdFlag = true;
        }
    }
    else {
        emptyFieldMessage[3].classList.remove("d-none");
    }
    if(fnFlag && lnFlag && emailFlag && pwdFlag) {
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "\success.html";
    }
});


showBtnPassword.addEventListener("click", (event) => {
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text") {
        pwdTarget.setAttribute("type", "password");
    }
    else {
        pwdTarget.setAttribute("type", "text");
    }
});
