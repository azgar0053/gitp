const colors = ["Green", "White", "Grey", "Blue", "Orange", "Black", "Maroon", "Purple", "Aliceblue", "Chocolate", "Brown", "Cyan", "Darkred", "Greenyellow", "Indigo", "Navy", "Teal", "SpringGreen", "StealBlue", "SeaGreen"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colorN");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}   