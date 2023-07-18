let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const get = async function () {
    let p = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let res = await p.json()
    console.log(p.status)
    return res
}

const todo = async () => {
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    console.log(p)
    let response = await p.json()
    console.log(response)
    return response
}

const mainFunc = async () => {
    // let res = await get()
    // console.log(res)

    let res = await todo()
    console.log(res)
}

mainFunc()