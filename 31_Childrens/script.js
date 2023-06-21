console.log(document.body.firstChild)
console.log(document.body.lastChild)

// If you want to convert this into an array
console.log(document.body.childNodes)
let arr = Array.from(document.body.childNodes)
console.log(arr)

// Returns true if it has childNodes
console.log(document.body.hasChildNodes())


console.log(document.body.firstChild)

let a = document.body.firstChild

console.log(a.parentNode)
console.log(a.parentElement)

console.log(a.firstChild.nextSibling)

let b = document.body
console.log("Hello world")
console.log(b.firstChild)
console.log(b.firstElementChild)