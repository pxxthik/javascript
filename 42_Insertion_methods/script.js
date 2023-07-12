let a = document.getElementsByTagName("div")[0]
// a.innerHTML += "<h1>Hello World</div>"

let div = document.createElement("div")
div.innerHTML = "<h1>Hello World</div>"
// a.appendChild(div)
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
a.replaceWith(div)