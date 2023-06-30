let firstCardTitle = document.getElementById("firstCardTitle")
firstCardTitle.style.color = "gray"

let titles = document.querySelectorAll(".card-title")
console.log(titles)
titles[2].style.color = "blue"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("query"))