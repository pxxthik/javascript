let num = [3,54,1,2,4,7,88,9]

for(let i=0; i<num.length; i++){
  console.log(num[i])
}

console.log("\n**ForEach Loop**")
num.forEach((elem)=>{
  // any operation
  console.log(elem)
})

// Array.from()
// used to create array from other objects

// eg. :
// let a = document.getElementByClassName("class_name")
// Array.from(a).forEach((elem)=>{})

// eg.:
let str = "Hello world"
let arr = Array.from(str)
arr.forEach((char)=>{console.log(char)})

// For of
console.log("\n\n**For of**")
for(let i of num){
  console.log(i)
}

// For in
console.log("\n\n**For in**")
for(let i in num){
  console.log(`Index of ${num[i]} is ${i}`)
}