let a = prompt("Hey whats your age?")
console.log(typeof a)

// Converting a string to a number
a = Number.parseInt(a)
console.log(typeof a)

if(a<0){
  console.log("Age is Invalid")
}
else if(a<9){
  console.log("You are a kid")
}
else if(a < 18){
  console.log("You can think of driving after 18")
}
else{
  console.log("You can drive")
}

// Switch case
switch(a){
  case 0:
    console.log("You are a baby");
    break
  case 6:
    console.log("Your age is 6")
    break
  case 18:
    console.log("You are 18 now")
    break
  default:
    console.log("Your age is greater than 0")
}

// Ternery Operator
console.log("You can ", a<18? "not drive": "drive")