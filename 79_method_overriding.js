class Employee {
    login() {
        console.log(`Employee has logged in`)
    }
    logout() {
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee {
    requestLeaves(leaves) {
        super.requestLeaves(leaves)
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+ 1} leaves (One extra)`)
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`)
    }
}

let e = new Programmer()
e.login()
e.requestLeaves(3)