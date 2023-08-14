let message = "Good global"

function hello1(){
  let message = "Good Morning"
  {
    let message = "Good After noon"
    console.log(message)
  }
  let c = function(){
    console.log("Iam c", message)
  }
  return c
}

let c = hello1()
c()