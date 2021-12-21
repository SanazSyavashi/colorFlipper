let colorArr = ["red", "blue", "yellow", "green", "pink", "brown"];

function changeBackGroundColorAndShow() {
    let color = BackgroundColor(getRandomNum());
    setBackGroundColor(color);
    showResult(color);
}

function getRandomNum() {
    return (Math.floor(Math.random() * 6));
}

function BackgroundColor(inputNum) {
    return colorArr[inputNum];
}

function setBackGroundColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function showResult(color) {
    document.querySelector("p").innerHTML = `Back ground color is: ${color}`;
}