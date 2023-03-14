let allBtn = document.querySelector(".all-btn");
if (allBtn) {
    allBtn.addEventListener('click', allCakes);
}
let savouryBtn = document.querySelector(".savoury-btn");
if (savouryBtn) {
    savouryBtn.addEventListener('click', showSavoury);
}
let cupcakesBtn = document.querySelector(".cupcakes-btn");
if (cupcakesBtn) {
    cupcakesBtn.addEventListener('click', showCupcakes);
}
let occasionsBtn = document.querySelector(".occasions-btn");
if (occasionsBtn) {
    occasionsBtn.addEventListener('click', showOccasions);
}
let box = document.querySelector('#box-of-cakes');
let savouryBox = document.querySelector('#savoury')
let occasionsBox = document.querySelector('#occasions')
let cupcakesBox = document.querySelector('#cupcakes')

function allCakes() {
    box.style.display = 'flex';
    savouryBox.style.display = 'none';
    cupcakesBox.style.display = 'none';
    occasionsBox.style.display = 'none';
}

function showSavoury() {
    box.style.display = 'none';
    savouryBox.style.display = 'flex';
    cupcakesBox.style.display = 'none';
    occasionsBox.style.display = 'none';
}

function showCupcakes() {
    box.style.display = 'none';
    savouryBox.style.display = 'none';
    cupcakesBox.style.display = 'flex';
    occasionsBox.style.display = 'none';
}

function showOccasions() {
    box.style.display = 'none';
    savouryBox.style.display = 'none';
    cupcakesBox.style.display = 'none';
    occasionsBox.style.display = 'flex';
}

// Code to hide the back to top button until the user scrolls down
function backToTop() {
    let topBtn = document.querySelector('.top-btn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if (topBtn) {
            topBtn.style.display = "flex";
        }
    } else {
        if (topBtn) {
            topBtn.style.display = "none";
        }
    }
}

window.addEventListener("scroll", backToTop);

// Code to set up emails with emailjs

function success() {
    console.log('Message sent function triggered....')
}

function sendMail(event) {
    event.preventDefault();
    var params = {
        from_name: document.getElementById('fullName').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_id", "template_id", params).then(function(res) {
        console.log("Success", res.status);
    });
    document.getElementById('fullName').value = "";
    document.getElementById('email_id').value = "";
    document.getElementById('message').value = "";
    success();
}   
let sendMessage = document.querySelector('#sendMessage');
sendMessage.addEventListener('click', sendMail);
