class RailwayForm {
    submit() {
        alert("Form submited for train no " + this.trainno)
    }
    cancel() {
        alert(this.name + " form is cancelled for train no " + this.trainno)
    }
    fill(name, trainno) {
        this.name = name
        this.trainno = trainno
    }
}

let cos1 = new RailwayForm()
cos1.fill("cos 1", 5657)
let cos2 = new RailwayForm()
cos2.fill("cos 2", 4546)

cos1.submit()
cos2.submit()
cos2.cancel()