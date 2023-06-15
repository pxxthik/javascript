console.log(document.body.firstChild)
console.log(document.body.lastChild)

// If you want to convert this into an array
console.log(document.body.childNodes)
let arr = Array.from(document.body.childNodes)
console.log(arr)

// Returns true if it has childNodes
console.log(document.body.hasChildNodes())