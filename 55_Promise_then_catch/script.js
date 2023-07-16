let p = new Promise((resolve, reject)=>{
    console.log("Promise pending...")
    setTimeout(()=>{
      console.log("Fullfilled")
      // resolve(true)
      reject(new Error("new error"))
    }, 2000)
  })
  
  p.then((value)=>{
    console.log(value)
  }, (error)=>{
    console.log(error)
  })
  
  // p.then((value)=>{
  //   console.log("value"+ value)
  // })
  
  // p.catch((error)=>{
  //   console.log(error)
  // })