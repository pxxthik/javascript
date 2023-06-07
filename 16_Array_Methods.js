let num = [1, 2, 3, 34, 4]

let b = num.toString()
console.log(b)

let c = num.join("_")
console.log(c, typeof(c))

// pop methods removes last element and returns the popped element
let popped_element = num.pop()
console.log(num, popped_element)

// push adds the element and returns the length of new array length
let new_array_length = num.push(56)
console.log(num, new_array_length)

// shift removes the first element and returns the removed element
num.shift()
console.log(num)

// unshift add the element at the begining
num.unshift(99)
console.log(num)