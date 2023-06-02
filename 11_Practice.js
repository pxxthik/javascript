// Write a program to print the marks of a student in an object using for loop

let obj = {
    student1: 98,
    student2: 70,
    student3: 80
  }
  
  for(let i=0; i<Object.keys(obj).length; i++){
    console.log("Marks of", Object.keys(obj)[i], "is", obj[Object.keys(obj)[i]])
  }
  
  
  // Write the program in Q1 using for in loop
  for(let i in obj){
    console.log("Marks of", i, "is", obj[i])
  }
  
  // Write a program to print "Try Again" until the user enters the correct number
  const checkForNum = ()=>{
    let num = prompt("Enter a valid number: ")
    if(isNaN(num)){
      console.log("Try Again")
      checkForNum()
    }else{
      console.log("Success")
    }
  }
  
  checkForNum()
  
  // Write a function to find mean of 5 number
  
  function mean(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5
  }
  
  console.log(mean(1,2,3,4,5))