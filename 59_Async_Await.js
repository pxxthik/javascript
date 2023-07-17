async function hello() {
    let delhiWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 2000)
    })

    let bangloreWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 4000)
    })

    console.log("Fetching delhi whether")
    let delhiW = await delhiWhether
    console.log("delhi whether is " + delhiW)
    console.log("Fetching banglore whether")
    let bangloreW = await bangloreWhether
    console.log("banglore whether is " + bangloreW)

    return [delhiW, bangloreW]
}

const func = async function () {
    return "Iam waiting"
}

const main1 = async function () {
    let a = await hello()
    console.log(a)
    let b = await func()
    console.log(b)
}

main1()