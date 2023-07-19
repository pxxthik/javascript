class Employee {
    constructor(name) {
        this.name = name
        console.log("Employee Constructor here for " + this.name)
    }
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
    // constructor(...args){
    //   super(...args)
    // }
    constructor(name, age) {
        super(name)
        this.age = age
        console.log("Programmers age is: " + this.age)
    }
    requestLeaves(leaves) {
        super.requestLeaves(leaves)
        console.log("One extra is granted")
        // console.log(`Employee has requested ${leaves+ 1} leaves (One extra)`)
    }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`)
    }
}

let e = new Programmer("My_Name", 19)
e.login()
e.requestLeaves(3)