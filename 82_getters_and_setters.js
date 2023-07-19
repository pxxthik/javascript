class Animal {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log(this._name + " is flying")
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name)
    }
    eatCarrot() {
        console.log(this.name + " is eating carrot")
    }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)

let c = 9
console.log(a instanceof Animal)
console.log(c instanceof Animal)

let r = new Rabbit("My Rabbit")
r.eatCarrot()

console.log(r instanceof Animal) // true
console.log(r instanceof Rabbit) // true