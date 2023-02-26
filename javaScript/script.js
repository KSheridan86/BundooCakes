let allBtn = document.querySelector(".all-btn");
allBtn.addEventListener('click', allCakes);
let savouryBtn = document.querySelector(".savoury-btn");
savouryBtn.addEventListener('click', showSavoury);
let cupcakesBtn = document.querySelector(".cupcakes-btn");
cupcakesBtn.addEventListener('click', showCupcakes);
let occasionsBtn = document.querySelector(".occasions-btn");
occasionsBtn.addEventListener('click', showOccasions);
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