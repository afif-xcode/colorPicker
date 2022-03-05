const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomNumber();
    color.textContent = getRandomNumber();
});

function getRandomNumber() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}