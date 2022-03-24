const hexColor = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var colorName = document.getElementById("color-name");
var btnName = document.querySelector(".btn");


btnName.addEventListener("click", function(){
    let hexColorCode = '#';
    for(let i = 0; i < 6; i++){
        hexColorCode += hexColor[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColorCode;
    colorName.textContent = hexColorCode;
})


function getRandomNumber(){
    return Math.floor(Math.random() * hexColor.length);
}