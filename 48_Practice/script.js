// Write a program to show different alerts when different buttuns are clicked
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn1.onclick = () => {
    alert("Alert 1")
}

btn2.onclick = () => {
    alert("Alert 2")
}

// Craete a website which is capable of storing bookmarks of your faverate website using href

// Repeat Q2 using eventListeners
document.getElementById("GoToGoogle").addEventListener("click", () => {
    var url = "https://www.google.com";
    var win = window.open(url, "", "width=500, height=500, scrollbars=yes, resizable=yes")
    win.focus()
})

// write a javascript program to keep fetching contents of a website(Every 5 seconds)
const fetchContent = async (url) => {
    con = await fetch(url)
    let a = await con.json()
    return a
}

setInterval(async () => {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

// Create a glowing blulb effect using classList toggle method in javascript
let glowingBulb = document.getElementById("glowingBulb")
glowingBulb.onclick = () => {
    glowingBulb.classList.toggle("dark")
}