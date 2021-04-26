var number1 = document.getElementById("numberArea");
var count1 = document.getElementById("count");
var return0 = document.getElementById("return");
var count2 = document.getElementById("reduce");

count1.onclick = function countnumber() {
    number1.innerHTML = ~~number1.innerHTML + 1;
};

count2.onclick = function countnumber() {
    number1.innerHTML = ~~number1.innerHTML - 1;
    if(number1.innerHTML<0){
        number1.innerHTML="0"
    }
};

return0.onclick = function be0() {
    number1.innerHTML = "0";
};

window.onload=count1.onclick;

