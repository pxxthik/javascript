class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)
    }
    walk() {
        console.log(this.name + " is walking")
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let j = new Animal("oggy")
j.walk()

let str = "new str"
console.log(Animal.capitalize(str))