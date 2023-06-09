let arr = [43, 23, 21]

// Array map method
let a = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value - 1000
})

console.log(a)

// Array filter method
let arr2 = [43, 23, 21, 0, 3, 5]
let a2 = arr2.filter((val) => {
  return val < 10
})
console.log(a2)

// Array reduce method
let arr3 = [1, 2, 1, 3, 0, 6, 4, 7, 8, 3, 5]

let c = arr3.reduce((h1, h2) => {
  return h1 + h2
})
console.log(c)