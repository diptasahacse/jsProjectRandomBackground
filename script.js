/* 
JavaScript Project

Author : Dipta Saha
Email : diptasaha.lpu.cse@gmail.com
Github : https://github.com/diptasahacse
Website : https://diptasaha.com/

*/


// a method which can take rgb color and return hex color code
function rgbToHex(Color){
            
    var rgbValue = Color.slice(4,-1);
    var colorArray = rgbValue.split(", ");
    var intRedColor = Number(colorArray[0]);
    var intGreenColor = Number(colorArray[1]);
    var intBlueColor = Number(colorArray[2]);

    function checkLength(value){
        if(value.length != 2){
            return "0"+value;
        }
        else{
            return value;

        }
    }

    var hexRed = checkLength(intRedColor.toString(16));
    var hexGreen = checkLength(intGreenColor.toString(16));
    var hexBlue = checkLength(intBlueColor.toString(16));


    return ("#"+hexRed+hexGreen+hexBlue);

}
// a method which can generate rgb color randomly and set as body background color, show the color and hex color code in box. 
function changeBackground(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    var rgbColorCode = "rgb("+red+", "+green+", "+blue+")";
    document.body.style.backgroundColor = rgbColorCode;
    document.getElementById('colorcode').innerText = rgbToHex(rgbColorCode);
    document.getElementById('colorcode').style.borderColor = rgbColorCode;


    var selectStyle = document.querySelector('style');
    if(selectStyle != null){
        selectStyle.parentElement.removeChild(selectStyle);

    }
    var style = document.head.appendChild(document.createElement("style"));
    style.innerHTML = `.colorcode::before{background-color: ${rgbColorCode}}`;
}
//call changeBackground method to change background color randomly
changeBackground();

//button with onclick
document.getElementById('changecolorbtn').onclick = changeBackground;
