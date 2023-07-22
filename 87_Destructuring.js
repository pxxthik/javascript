let arr1 = [3, 5]
let [a1, b1] = arr1

let arr2 = [3, 5, 8]
let [a2, b2] = arr2

let arr3 = [3, 4, 6, 7, 11, 13, 17]
let [a3, b3, c3, ...rest] = arr3

console.log(a3, b3, c3, rest)

let obj1 = {
  x1: 10,
  y1: 20
}
let {x1, y1} = obj1
console.log(x1, y1)

// Spread operator
let o1 = {...arr3}
console.log(o1)

console.log(...arr3)

const sum = (v1, v2, v3)=>{
  return v1+v2+v3
}
console.log(sum(...arr2))

let myObj = {
  name: "Salva",
  company: "Company XYZ",
  address: "33 Alkantra"
}
console.log({...myObj, name:"Sergio"})