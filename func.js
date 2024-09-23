var form = document.getElementById("form")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var password2 = document.getElementById("password2")

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
    var usernameValue = username.value.trim()
    var emailValue = email.value.trim()
    var passwordValue = password.value.trim()
    var password2Value = password2.value.trim()

    if (usernameValue === "") {
        setError(username, "Username cannot be blank")
    } else {
        setSuccess(username)
    }

    if (emailValue === "") {
        setError(email, "Email cannot be blank")
    } else if (!validEmail(emailValue)) {
        setError(email, "Enter a valid email")
    } else {
        setSuccess(email)
    }

    if (passwordValue === "") {
        setError(password, "Password cannot be blank")
    } else {
        setSuccess(password)
    }

    if (password2Value === "") {
        setError(password2, "Confirm password cannot be blank")
    } else if (passwordValue !== password2Value) {
        setError(password2, "Passwords do not match")
    } else {
        setSuccess(password2)
    }
}

function setError(input, message) {
    var parent = input.parentElement
    var small = parent.querySelector("small")
    parent.className = "container2 error"
    small.innerText = message
}

function setSuccess(input) {
    var parent = input.parentElement
    parent.className = "container2 success"
}

function validEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) 
}