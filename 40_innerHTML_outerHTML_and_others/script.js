console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0])

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

let first = document.getElementById("first")

console.log(first.innerHTML)
// Hey iam span

console.log(first.outerHTML)
// <span id="first">Hey iam span</span>

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

console.log(document.body.textContent)