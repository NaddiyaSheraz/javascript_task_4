
let operator = "";
function DivideFun(){
   operator  = "/";
}
function MultiplyFun(){
    operator = "*";
}
function AddFun(){
    operator = "+";
}
function SubtractFun(){
    operator = "-";
}
  
    
function showResult(){
    let firstInput = parseFloat(document.getElementById("num1").value);
    let secondInput = parseFloat(document.getElementById("num2").value);
    result = 0;
 if(operator  == "/"){
    result = firstInput / secondInput;
 }else if(operator  == "*"){
    result = firstInput * secondInput;
 }else if(operator  == "+"){
    result = firstInput + secondInput;
 }else if(operator  == "-"){
    result = firstInput - secondInput;
 }else {
    result = 'Please select an operation';
}

document.getElementById("resultdisplay").innerText =  result;
}
