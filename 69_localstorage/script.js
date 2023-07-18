let key = prompt("Enter key you want to set")
let value = prompt("Enter the value")

localStorage.setItem(key, value)

console.log(localStorage.getItem(key))
// localStorage.removeItem(key)

// localStorage.clear()
console.log(localStorage.key(0))
console.log(localStorage.length)