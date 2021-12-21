const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeBackGroundColorAndShow() {
    let color = BackgroundColor();
    setBackGroundColor(color);
    showResult(color);
}

function getRandomNum() {
    return (Math.floor(Math.random() * hex.length));
}

function BackgroundColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let randomNum = getRandomNum();
        hexColor += hex[randomNum];
    }
    return hexColor;
}

function setBackGroundColor(color) {
    document.body.style.backgroundColor = color;
}

function showResult(color) {
    document.querySelector("p").innerHTML = `Back ground color is: ${color}`;
}