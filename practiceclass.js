class Car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    d() {
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
    
}
let newclass = new Car ("Toyota", "Fortuner", 2020)
newclass.d()


class BMI {
    constructor(height, weight){
        this.height= height
        this.weight = weight
    }
    b() {
        console.log(`${this.height} ${this.weight}`)
    }
}
var class1 = new BMI (174, 95)

class1.b()