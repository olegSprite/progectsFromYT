const btn = document.getElementById("btn");
const colorText = document.querySelector("#color");
const colorItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener("click", function() {
    chengeColor(getRandomColor())
})

function getRandomColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * colorItems.length);
        color += colorItems[randomNumber]
    }
    return color;
}

function chengeColor(color) {
    colorText.textContent = color
    document.body.style.backgroundColor = color
}