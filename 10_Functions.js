let a = 1;
let b = 2;
let c = 3;

const hello = ()=>{
  console.log("Hello world")
}

function OnePlusAvg(x,y){
  return 1+((x+y)/2);
}

console.log("One plus average of a and b is ", 1+((a+b)/2))
console.log("One plus average of b and c is ", OnePlusAvg(b,c))
console.log("One plus average of c and a is ", OnePlusAvg(c,a))

hello()