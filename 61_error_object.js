try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>140){
     throw new ReferenceError("This is probably not true") 
    }
  }
  catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
  }
  
  console.log("Running")