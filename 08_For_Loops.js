for(let i=0; i<34; i++){
    console.log(i)
  }
  
  // Program to add first n numbers
  let sum = 0;
  let num = prompt("Enter a number")
  for(let i=0; i<num; i++){
    console.log(sum, "+", i, "=", sum+=i);
  }
  
  // For in loop
  let obj = {
    item1: 1,
    item2: 2,
    item3: 3,
    item4: 4,
    item5: 5
  }
  
  for(let a in obj){
    console.log(a, obj[a])
  }
  
  // For of loop
  for(let b of "Hello world"){
    console.log(b)
  }