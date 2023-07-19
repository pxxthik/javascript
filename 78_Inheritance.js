class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running")
    }
    shout() {
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana")
    }
    hide() {
        console.log(this.name + " is hiding")
    }
}

let ani = new Animal("Bruno", "white")
let mon = new Monkey("chimpu", "orange")

ani.shout()
mon.eatBanana()
mon.hide()