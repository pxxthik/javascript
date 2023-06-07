let a = [1, 2, 3, 4]
console.log(a)

let b = [1, 2, 3, null, false, "Not Present"]

// adding new value
b[6] = 55
// Changing existing value
b[0] = 110

console.log(b)

console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])
console.log(b[4])
console.log(b[5])
console.log(b[6])
console.log(b[7])
// 6th index will be undefiened

console.log("The length of array b is", b.length)
console.log(typeof(b))