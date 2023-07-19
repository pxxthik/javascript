class RailwayForm {
    constructor(name, trainno, address) {
        console.log("Constructor called")
        this.name = name
        this.trainno = trainno
        this.address = address
    }
    submit() {
        alert("Form submited for train no " + this.trainno)
    }
    preview() {
        console.log("Your name: " + this.name)
        console.log("Your train no is: " + this.trainno)
        console.log("Your address: " + this.address)
    }
    cancel() {
        alert(this.name + " form is cancelled for train no " + this.trainno)
        this.trainno = 0
    }
}

let myForm = new RailwayForm("myname", 12488, "33 Alkantara, Madrid")
myForm.preview()
myForm.submit()
myForm.cancel()