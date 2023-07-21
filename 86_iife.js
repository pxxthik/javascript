let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 3000)
    })
}

// let f = async () => {
//   let b = await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
//   let d = await a()
//   console.log(d)
// }
// f()

(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()