const userName = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');
const usernameErr = document.querySelector('.username-err');
const emailErr = document.querySelector('.email-err');
const password1Err = document.querySelector('.password1-err');
const password2Err = document.querySelector('.password2-err');
const togglePassword = document.querySelector('#togglePassword');
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function showErr(errbox, err, message) {
        err.textContent = message;
        err.style.visibility = "visible";
        err.style.color = "red";
        errbox.style.border = '2px solid red';
}

function showPass(errbox, err, message) {
        err.textContent = message;
        err.style.visibility = "visible";
        err.style.color = "green";
        errbox.style.border = '2px solid green';
        userName.style.border = '2px solid green';
        email.style.border = '2px solid green';
        password1.style.border = '2px solid green';
}

function clearErr(errbox, err) {
        setTimeout(() => {
                errbox.style.border = '2px solid #f0f0f0';
                errbox.style.borderRadius = '4px';
                err.style.visibility = "hidden";
                userName.style.border = '2px solid #f0f0f0';
                email.style.border = '2px solid #f0f0f0';
                password1.style.border = '2px solid #f0f0f0';
        }, 3000)
}

function clearInputs() {
        userName.value = '';
        email.value = '';
        password1.value = '';
        password2.value = '';
}

function checkPassword(pass1, pass2, pass1Err, pass2Err) {
        if (pass1.value.length < 6) {
                showErr(pass1, pass1Err, 'Password must be at least 6 characters');
                clearErr(pass1, pass1Err);
        }

        if (pass2.value.length === 0) {
                showErr(pass2, pass2Err, 'Password 2 is required');
                clearErr(pass2, pass2Err);
        }


        if (pass1.value !== pass2.value) {
                showErr(pass2, pass2Err, 'Password does not matched');
                clearErr(pass2, pass2Err);
        }

        if ((email.value.includes('@')) && (userName.value.length > 3) && (pass1.value.length > 6) && (pass1.value === pass2.value)) {
                showPass(pass2, pass2Err, 'Form Submitted Successfully');
                clearErr(pass2, pass2Err);
        }
        if (userName.value.length < 3) {
                showErr(userName, usernameErr, 'Username must be at least 3 characters')
                clearErr(userName, usernameErr);
        }

        {
                if (email.value.match(mailformat)) {
                } else {
                        showErr(email, emailErr, 'Email is not valid');
                        clearErr(email, emailErr);
                }
        }
}

submit.addEventListener('click', function (e) {
        checkPassword(password1, password2, password1Err, password2Err);
        setTimeout(clearInputs, 3000);
        e.preventDefault();
})