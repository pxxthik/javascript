let first = document.getElementById("first")

let a = first.getAttribute("class")
console.log(a)

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

first.setAttribute("class", "newClass")
first.removeAttribute("class")

console.log(first.attributes)

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)