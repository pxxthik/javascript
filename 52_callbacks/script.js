// Synchronous programming
// let a = prompt("What is your name?")
// let b = prompt("What is your age?")
// let c = prompt("What is faverate color?")
// console.log(a+" is "+b+" year old and has "+c+" faverate color")

// Asynchronous programming
// console.log("Start")
// setTimeout(function (){
//   console.log("Hey Im good")
// }, 2000)
// console.log("End")

// Callbacks
function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("SRC: " + src)
        callback(null, "your name")
    }
    script.onerror = function () {
        console.log("Error occured")
        callback(new Error("Src got some error"), "your name")
    }
    document.body.append(script)
}

function hello(error, name) {
    if (error) {
        console.log(error)
        return
    }
    alert("Hello " + name)
}

function goodmorning() {
    alert("goodmorning")
}

loadScript("https://cdnf.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", hello)