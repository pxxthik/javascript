let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey iam resolved")
        resolve(1)
    }, 2000)
})

p1.then((value) => {
    console.log("Congrats promise has resolved with the value " + value)
})

p1.then((value) => {
    console.log("Hurray")
})