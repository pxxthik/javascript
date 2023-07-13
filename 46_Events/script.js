let a = document.getElementById("first")
a.onclick = ()=>{
  console.log("Clicked")
}

let x = (e)=>{
  console.log(e)
  alert("hello1")
}
let y = (e)=>{
  alert("hello2")
}

let btn = document.getElementById("btn")

btn.addEventListener("click", x)
btn.addEventListener("click", y)

let a = prompt("WHat is your faverate number?")
if(a == "2"){
  btn.removeEventListener("click", x)
}