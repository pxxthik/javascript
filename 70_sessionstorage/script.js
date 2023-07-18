// sessionStorage.setItem("name", "myname")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.setItem("name", "myname")
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert("changed " + e)
}