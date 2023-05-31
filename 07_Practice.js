// Use logical operator to find whether the age of a person lies between 10 and 20

let age = prompt("Enter your age");
if(age>10 && age<20){
  console.log("Age is between 10 and 20")
}

// Demonstrate the use of switch case in javascript
switch(age){
  case 10:
    console.log("You are 10")
    break
  case 14:
    console.log("you are 14")
    break
  case 18:
    console.log("You are 18")
    break
  default:
    console.log("Enter age")
}

// Write a JS program to find whether a number is divisable by 2 and 3
let num1 = 12
if(num1%2===0 && num1%3===0){
  console.log("It is divisable")
}else{
  console.log("It is not divisable")
}

// Write a JS program to find whether a number is divisable by either 2 or 3
let num2 = 9
if(num2%2===0 || num2%3===0){
  console.log("It is divisable")
}else{
  console.log("It is not divisable")
}

// Print "you can drive" or "you cant drive" based on age being greater than 18 using ternary operator
console.log("You can", age<18?"not drive": "drive")