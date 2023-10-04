
function validateName() {
    let name = document.getElementById('username')
    let nameError = document.getElementById('username-error')

    if (name.value.trim() == "") {
        nameError.innerHTML = "Username cannot be blank"
        return false
    } else if (name.value.length < 5) {
        nameError.innerHTML = "Username must not be less than 5 charecters"
        return false
    } else {
        nameError.innerHTML = ""
        return true
    }
}

function validateEmail() {
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')

    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.value.trim() == "") {
        emailError.innerHTML = "Email cannot be blank"
        return false
    } else if (!email.value.match(regEx)) {
        emailError.innerHTML = "Email not in global format"
        return false
    } else {
        emailError.innerHTML = ""
        return true
    }
}

function validatePassword() {
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')

    if (password.value.length < 8 || password.value.length > 20) {
        passwordError.innerHTML = "Password have atleast 8 charecters and not more than 20 charecters"
        return false
    } else {
        passwordError.innerHTML = ""
        return true
    }
}
function validateRepeat() {
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')

    if (password.value != repeatPassword.value) {
        repeatError.innerHTML = "Password mismatch"
        return false
    } else {
        repeatError.innerHTML = ""
        return true

    }
}

function validateForm(){
    let submitError = document.getElementById('submit-error')
   if(!validateEmail() || !validateName() || !validatePassword() || !validateRepeat()) {
    submitError.innerHTML = "Please solve the errors"
    return false
   }else{
    submitError.innerHTML = ""
    return  true
   }
}