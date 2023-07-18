console.log(document.cookie)
document.cookie = "name=myname"

let key = prompt("Enter your key")
let value = prompt("Enter your value")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

console.log(decodeURIComponent(key), " = ", decodeURIComponent(value))
console.log(document.cookie)