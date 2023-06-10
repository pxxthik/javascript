// Create an array of numbers and take input from the user to add numbers to this array
let num = [1,2,3,4,5]
console.log("Current array: ", num)

let new_elem = prompt("Enter element to be add")
num.push(Number(new_elem))
console.log("Array after adding new element: ", num)

// Keep adding numbers to the array (1) until 0 is added to the array

do{  
  add_zero = Number.parseInt(prompt("Enter element"))
  num.push(add_zero)
}while(add_zero != 0)

console.log(num)

// Filter for numbers divisable by 10 from a given array
let new_arr = num.filter((elem)=>{
  return elem%10==0
})
console.log("Filtered array: ", new_arr)

// Create an array of square of given number
let squared_arr = num.map((elem)=>{
  return elem**2
})
console.log("Squared array: ", squared_arr)

// Use reduce to calculate factorial of a given number from an array of first n natural  numbers
let numbers = [1,2,3,4,5,6,7,8,9]
let factorial = numbers.reduce((elem1, elem2)=>{
  return elem1*elem2
})
console.log("Factorial: ", factorial)