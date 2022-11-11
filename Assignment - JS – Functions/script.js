let num1 = 0
let num2 = 0

function exec(){
  num1 = prompt("Enter First Number");
  num2 = prompt("Enter Second Number");
  Number(num1);
  Number(num2);
  calculate();
}

function calculate(){
  if (num1 % num2 != null && num1 % num2 > 0){
      alert("Residue exist!")
  }
  else{
    alert("No Residue!")
  }
}