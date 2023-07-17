// write a program to load a javascript file in browser using promises, use .then() to display an alert when the load is complete

// const loadScript = function(src){
//   return new Promise((resolve, reject)=>{
//     let script = document.createElement("script")
//     script.type = "text/javascript"
//     script.src = src
//     document.body.appendChild(script)

//     script.onload = (()=>{
//       resolve(1)
//     })
//     script.onerror = (()=>{
//       reject(0)
//     })
//   })
// }

// let result = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// result.then((value)=>{
//   console.log("Script loaded")
// }).catch((value)=>{
//   console.log("Error occured")
// })

// Write the same program from previous question and use async await syntax
const load = async function (src) {
    let elem = document.createElement("script")
    elem.type = "text/javascript"
    elem.src = src
    document.body.appendChild(elem)
    elem.onload = (() => { console.log("Script.loaded") })
    elem.onerror = (() => { console.log("error ocuured") })
}

const run = async () => {
    let a = await load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
}
run()

// Create a promise which rejects after 3 sec use an async await to get its value use a try catch to handle its error

const hello = async function () {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
            // reject(0)
        }, 3000)
    })

    try {
        let res = await p
        console.log(res)
    } catch (err) {
        console.log("Error occured " + err)
    }
}
hello()

// Write a program using promise.all() inside an async/await to await 3 promises compare its results with the case where we await these promises one by one.

const p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(10) }, 1000)
    })
}

const p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(20) }, 2000)
    })
}

const p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(30) }, 3000)
    })
}

const r = async () => {
    // let a = await p1()
    // console.log(a)
    // let b = await p2()
    // console.log(b)
    // let c = await p3()
    // console.log(c)

    let a = p1()
    let b = p2()
    let c = p3()

    let abc = await Promise.all([a, b, c])
    console.log(abc)
}

r()