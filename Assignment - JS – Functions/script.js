let num1,num2 = 0


function exec(){
  num1 = prompt("Enter First Number");
  num2 = prompt("Enter Second Number");
  Number(num1);
  Number(num2);
  calculate(num1,num2);
}

function calculate(number1,number2){
    let response = number1 % number2;
    if (response != 0){
      alert("Residue is " + response)
    }
    else{
        alert("No Residue!")
    }
}
