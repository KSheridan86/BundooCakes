let allBtn = document.querySelector(".all-btn");
if (allBtn) {
    allBtn.addEventListener('click', allCakes);
}
let fondantBtn = document.querySelector(".fondant-btn");
if (fondantBtn) {
    fondantBtn.addEventListener('click', showfondant);
}
let cupcakesBtn = document.querySelector(".cupcakes-btn");
if (cupcakesBtn) {
    cupcakesBtn.addEventListener('click', showCupcakes);
}
let ButterCreamBtn = document.querySelector(".butter-cream-btn");
if (ButterCreamBtn) {
    ButterCreamBtn.addEventListener('click', showButterCream);
}
let box = document.querySelector('#box-of-cakes');
let fondantBox = document.querySelector('#fondant')
let ButterCreamBox = document.querySelector('#butter-cream')
let cupcakesBox = document.querySelector('#cupcakes')

function allCakes() {
    box.style.display = 'flex';
    fondantBox.style.display = 'none';
    cupcakesBox.style.display = 'none';
    ButterCreamBox.style.display = 'none';
}

function showfondant() {
    box.style.display = 'none';
    fondantBox.style.display = 'flex';
    cupcakesBox.style.display = 'none';
    ButterCreamBox.style.display = 'none';
}

function showCupcakes() {
    box.style.display = 'none';
    fondantBox.style.display = 'none';
    cupcakesBox.style.display = 'flex';
    ButterCreamBox.style.display = 'none';
}

function showButterCream() {
    box.style.display = 'none';
    fondantBox.style.display = 'none';
    cupcakesBox.style.display = 'none';
    ButterCreamBox.style.display = 'flex';
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