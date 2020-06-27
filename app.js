function getnum(num){
    var input= document.getElementById('screen');
    input.value += num;
}
function clr(){
    var input = document.getElementById('screen');
    input.value = "";
}
function calculation(){
    var output= document.getElementById('screen');
    output.value = eval(output.value);


}