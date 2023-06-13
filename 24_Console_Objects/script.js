console.log("Hello")

let a= 8;
let b= 4;
console.log((a+b))

console.log(console)

// throws an error when the condition is false
console.assert(5>3)

// Clears the console
console.clear()

let obj = {a: 1, b: 2, c: 3}
console.table(obj)

console.warn("This is warning")
console.error("This is an error")

console.info("This is info")

console.table(console)


// time
console.time("forloop")
for(let i=0; i< 1000; i++){
  console.log(1000)
}
console.timeEnd("forloop")

console.time("whileloop")
let i=0;
while(i<1000){
  console.log(1000)
  i++;
}
console.timeEnd("whileloop")

alert("Hai")
let var1 = prompt("Enter the value of a");
var1 = Number.parseInt(var1)
let write = confirm("Write it on DOM?")
if(write){
  document.write(var1)
}