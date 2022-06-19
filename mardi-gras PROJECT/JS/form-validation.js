function validation() {
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var mail = document.getElementById('email');

    var fnameError = document.querySelector('.fnameError');
    var lnameError = document.querySelector('.lnameError');
    var emailError = document.querySelector('.emailError');

    var text;

    if (fname.value == '') {
        text = "Please enter first name";
        fnameError.style.color = 'red';
        fnameError.innerHTML = text;
        fname.focus();
        return false;
    } else {
        fnameError.style.color = 'green';
        text = "valid name";
        fnameError.innerHTML = text;
    }
    if (lname.value == '') {
        text = "Please enter last name";
        lnameError.style.color = 'red';
        lnameError.innerHTML = text;
        lname.focus();
        return false;
    } else {
        lnameError.style.color = 'green';
        text = "valid name";
        lnameError.innerHTML = text;
    }
    if (mail.value == '' || mail.value.indexOf('@') == -1 || mail.value.indexOf('.') == -1) {
        text = "Please enter valid email";
        emailError.style.color = 'red';
        emailError.innerHTML = text;
        mail.focus();
        return false;
    } else {
        emailError.style.color = 'green';
        text = "valid email";
        emailError.innerHTML = text;
    }
    alert("Form submitted successfully!")
    return true;
}