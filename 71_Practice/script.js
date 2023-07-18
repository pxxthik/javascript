// Use a free API from internet & feed your app with live data

const func = async function (url) {
    let p = await fetch(url)
    let res = await p.json()
    return res
}
const myFunc = async function () {
    let res = await func("https://random.dog/woof.json")
    console.log(res)
}
myFunc()

// Create a note saving app which stores your note to localstorage
let title = prompt("Enter note title")
let note = prompt("Enter note")
localStorage.setItem(title, note)

// Repeat last question and fetch the notes which was saved
console.log(localStorage.getItem(localStorage.key(localStorage.length - 1)))

// Delete the note in previous question
localStorage.clear()