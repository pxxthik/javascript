// var
var a = 5
{
  var a = "this"
  console.log(a)
}
console.log(a)

// let
let b = 10
b = 5
{
  let b = 20
  console.log(b)
}
console.log(b)

// const
const auther = "me"
// let auther = 9 // throws an error

// neither be changed or re-declared in whole program