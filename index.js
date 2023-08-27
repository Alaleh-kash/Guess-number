
//var dogAge = prompt("How old is your dog?");
//var humanAge = ((dogAge-2)*4) + 21;
//alert("your dog is" + humanAge + " years old in human years.");//


var number = Number(prompt("enter your number?"));

//var secretNumber = 20;

var secretNumber = Math.floor(Math.random() *100 +1);
 
 i=1;
 
 while (number !== secretNumber){

 if (number > secretNumber) {
    number = Number(prompt(number + " your number is big"));

 }

 else if (number < secretNumber) {

 	number = Number(prompt(number + " your number is small"));
 }

 i++;
}

if (number || secretNumber) {

	alert("congradulation!" + "" + " your secrect number is " + secretNumber);
}
