// Below are the functions used to send emails using emailjs and 
// manipulate the DOM to reflect the success of the email being sent

// Attach an event listener to the send message button which triggers the sendMail function
let sendMessage = document.querySelector('#sendMessage');
if (sendMessage) {
sendMessage.addEventListener('click', sendMail);
}

// This function calls the validateForm function and if it returns true 
// sends the email using emailjs and triggers the success function
function sendMail(event) {
    event.preventDefault();
    if (validateForm() === true) {
        var params = {
            from_name: document.getElementById('fullName').value,
            email_id: document.getElementById('email_id').value,
            message: document.getElementById('message').value,
        };
        emailjs.send("service_hqcpnug", "template_9n8mrmh", params).then(function (res) {
            if (res.status == 200) {
                console.log("Success", res.status);
            } else {
                console.log("Failed", res.status);
            }
        });
        document.getElementById('fullName').value = "";
        document.getElementById('email_id').value = "";
        document.getElementById('message').value = "";
        success();
    }
}

// This validate the form inputs and if all fields are valid, it returns true
function validateForm() {
    let name = document.getElementById('fullName').value;
    let nameError = document.getElementById('nameError');
    let email = document.getElementById('email_id').value;
    let emailError = document.getElementById('emailError');
    let message = document.getElementById('message').value;
    let msgError = document.getElementById('msgError');

    if (!name) {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
        if (email == null || email == "") {
            emailError.style.display = 'block';
        } else if (!email.includes('@')) {
            emailError.style.display = 'block';
        } else if (!email.includes('.')) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
            if (!message) {
                msgError.style.display = 'block';
            } else {
                msgError.style.display = 'none';
                return true;
            }
        }
    }
}

// This function displays a success message after the email has been sent
function success() {
    let msgBox = document.querySelector('#msg-box');
    let successBox = document.querySelector('#success-box');
    msgBox.style.display = 'none';
    successBox.style.display = 'block';
}

// attach an event listener to the newsletter button which triggers the newsletter function
let newsletterBtn = document.querySelector('#nlBtn');
newsletterBtn.addEventListener('click', newsletter);

// This function calls the validateNewsletter function and if it returns true 
// sends the email using emailjs and calls the newsletterSuccess function
function newsletter(event) {
    event.preventDefault();
    if (validateNewsletter() === true) {
        var params = {
            from_name: document.getElementById('nameNl').value,
            email_id: document.getElementById('emailNl').value,
            message: "Please add me to your newsletter",
        };
        emailjs.send("service_hqcpnug", "template_9n8mrmh", params).then(function (res) {
            if (res.status == 200) {
                console.log("Success", res.status);
            } else {
                console.log("Failed", res.status);
            }
        });
        newsletterSuccess();
    }
}

// This validate the form inputs and if all fields are valid, it returns true
function validateNewsletter() {
    let name = document.getElementById('nameNl').value;
    let nameError = document.getElementById('nameErrorNl');
    let email = document.getElementById('emailNl').value;
    let emailError = document.getElementById('emailErrorNl');

    if (name == null || name == "") {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
    }
    if (email == null || email == "") {
        emailError.style.display = 'block';
    } else if (!email.includes('@')) {
        emailError.style.display = 'block';
    } else if (!email.includes('.')) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

// This function displays a success message after the email has been sent
function newsletterSuccess() {
    let newsletterBox = document.querySelector('#newsletter-box');
    newsletterBox.style.display = 'none';
    let newsletterSuccess = document.querySelector('#newsletter-success');
    newsletterSuccess.style.display = 'block';
}


// Public key needed for emailjs, declared and called here
function publicKey() {
    emailjs.init("uoGVktHyGRIYXRDQY");
}
publicKey();