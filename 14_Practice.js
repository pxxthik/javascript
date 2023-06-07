// What will the following print in javascript
console.log("hello\"".length)

// Explore the includes, startswith & endswith fuction of a string
console.log("hello".includes("llo"))
console.log("hello".startsWith("he"))
console.log("hello".endsWith("llo"))

// Write a program to convert a given string to lower case
console.log("HELLO WORLD".toLowerCase())

// Extract the amount out of this string
let str = "Please give rs 1000"
console.log(Number(str.split(' ')[3]))

// Try to change 4th charecter of a given string. Will you able to do it?
console.log(str[3])
str[3] = 'z'
console.log(str[3])