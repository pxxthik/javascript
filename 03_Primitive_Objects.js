// nn bb ss u
let a = null; // null
let b = 55; // Number
let c = true; // Boolean
let d = BigInt("99889988") // BigInt
let e = "Hello world" // String
let f = Symbol("I am a nice symbol") // Symbol
let g = undefined; // undefined
let h; // remains undefined

console.log(a,b,c,d,e,f,g,h)
console.log(typeof(d))

// Non Premitive Datatype
// Objects in JS
const items = {
  "item1": true,
  "item2": true
}
console.log(items['item1'])