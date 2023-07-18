let p = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
p.then((response) => {
    console.log(response.status)
    console.log(response.headers)
    return response.json()
}).then((value) => {
    console.log(value)
})