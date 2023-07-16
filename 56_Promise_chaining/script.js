// let p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("Resolved after 2 sec")
//     resolve("Promise 1")
//   }, 2000)
// })

// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve, reject)=>{
//     resolve("Promise 2")
//   })
//   return p2
// }).then((value)=>{
//   console.log(value)
//   return 2
// }).then((value)=>{
//   console.log(value)
// })

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)

        script.onload = () => {
            resolve(1)
        }
        script.onerror = () => {
            reject(0)
        }
    })
}

let p1 = loadScript("https://google.com")
p1.then((value) => {
    console.log(value)
    return loadScript("https://google.com")
}).then((value) => {
    console.log("second script ready" + value)
}).catch((error) => {
    console.log(error)
})