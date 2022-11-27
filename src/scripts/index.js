let errorMsg = document.getElementsByClassName("error-message")

document.getElementById("form")
    .addEventListener('keyup', (e) => {
        e.preventDefault()
        getInputs()
        validate(inputs)
    })

document.getElementById("submit")
    .addEventListener('click', (e) => {
        e.preventDefault()
        getInputs()
        validate(inputs)
    })

function getInputs(){
    let firstN = document.getElementById("first-name")
    let lastN = document.getElementById("last-name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    return inputs = [firstN, lastN, email, password]
}

function validate(inputs) {
    inputs.map((input, index) => {
        if (input.value === "" || input.value === " ") {
            input.classList.remove("valid")
            input.classList.add("invalid")
            errorMsg[index].innerText = `${input.placeholder} cannot be empty`
        } else {
            input.classList.remove("invalid")
            input.classList.add("valid")
        }

        if (input.placeholder === 'Email address' && validateEmail(input.value) === false) {
            errorMsg[index].innerText = `looks like this is not an email`
            input.classList.remove("valid")
            input.classList.add("invalid")
        }
        if (input.placeholder === 'Password' && validatePassword(input.value) === false) {
            errorMsg[index].innerText = `weak password`
            input.classList.remove("valid")
            input.classList.add("invalid")
        }


    })
}

function validateEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    let passwordPattern =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}