document.write("hello")

// let a = setTimeout(() => {
//   alert("inside settimeout")
// }, 2000)

// let b = prompt("Do you want to see the alert?")
// if (b == 'n') {
//   clearTimeout(a)
// }
// console.log(a)

const sum = (a,b)=>{
  alert(a+b)
}
setTimeout(sum, 2000, 10,20)

// setInterval(()=>{alert("setInterval")}, 2000)
setInterval(sum, 2000, 4,4)