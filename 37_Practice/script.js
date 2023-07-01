// Create a navbar and change the color of it first element ro red

let nav = document.body.firstElementChild;
nav.firstElementChild.style.color = 'red'

// Create a table without tbody now use "view page source" button to check whether it has a tbody or not

// Create an element with 3 children now change the color of first and last element to green
let container2 = document.getElementById("container2")
container2.firstElementChild.style.color = "green"
container2.lastElementChild.style.color = "green"

// Write a javascript code to change background of all <li> tags to cyan
let li = document.getElementsByTagName("li")
Array.from(li).forEach((elem) => {
    elem.style.color = "cyan"
})