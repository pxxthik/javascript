const f = () => {
    try {
        let a = 0
        // console.log(b)
        console.log("Try block")
        return
    }
    catch (err) {
        console.log("catch block")
        console.log(p)
    }
    finally {
        console.log("Finally runs")
        // close the file
    }
}

f()
console.log("End")