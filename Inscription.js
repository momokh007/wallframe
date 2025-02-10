let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let phoneRegEx = new RegExp(/^[0-9]g/);
let password = document.getElementById("pasword");
const passwordRegEx = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
);

name1.addEventListener("change", function () {
    if (name1.value.length < 2) {
        alert("the name must be at least 2 characters");
        name1.setAttribute("class", "form-control is-invalid");
        name1.focus();
    }
});
email.addEventListener("change", function () {
    if (!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", "form-control is-invalid");
        email.focus();
    }
});
password.addEventListener("change", function () {
    if (!passwordRegEx.test(password.value)) {
        alert(
            "password should contain digits letter and at least 6 characters"
        );
        password.setAttribute("class", "form-control is-invalid");
        password.focus();
    }
});
phoneNumber.addEventListener("change", function () {
    if (phoneNumber.value.length < 8) {
        alert("the phone number should contain 8 digits");
        phoneNumber.setAttribute("class", "form-control is-invalid");
        phoneNumber.focus();
    }
    if (!phoneRegEx.test(phoneNumber.value)) {
        alert("the phone number should contain only number");
        phoneNumber.setAttribute("class", "form-control is-invalid");
        phoneNumber.focus();
    }
});
