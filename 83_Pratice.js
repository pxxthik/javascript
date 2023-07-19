// Create a javascript class to create a complex number create a constructor to set a real and complex part
class Complex {
    constructor(real, complex) {
        this.real = real
        this.complex = complex
    }
    display() {
        console.log(`Your complex number is: ${this.real} + i${this.complex}`)
    }
}

let num = new Complex(2, 3)
num.display()

// Write a method to add two complex numbers in the above class
class Add extends Complex {
    constructor(real, complex) {
        super(real, complex)
    }
    add() {
        console.log(`Complex number after adding : ${this.real + 1} + i${this.complex + 1}`)
    }
}

let num2 = new Add(2, 3)
num2.add()

// Create a class student from a class Human. Override a methods se changes
class Human {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(this.name + "is eating")
    }
}

class Student extends Human {
    constructor(name) {
        super(name)
    }
    eat() {
        super.eat()
        console.log(this.name + " is eating in school")
    }
}

let human = new Human("Human_name")
human.eat()
let student = new Student("student_name")
student.eat()

// See if student is an instance of Human using instanceof keyword
if (student instanceof Human) {
    console.log("student is an instance of Human")
}

// Use getter and setter to set and get the real and imaginary parts of complex number
class GSComplex {
    constructor(real, imag) {
        this._real = real
        this._imag = imag
    }
    get real() {
        return this._real
    }
    set real(newReal) {
        this._real = newReal
    }
    get imag() {
        return this._imag
    }
    set imag(newImag) {
        this._imag = newImag
    }
}

let gs = new GSComplex(10, 20)
console.log(gs.real)
console.log(gs.imag)
gs.real = 888
gs.imag = 999
console.log(gs.real)
console.log(gs.imag)