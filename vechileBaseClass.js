class Vechiles {
    constructor (make, model, year, electric, hasTurbo) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.electric = electric;
        this.hasTurbo = hasTurbo;

    }
    isGreen(green)
    {
    this.green = this.electric    
    if(this.green === true)
    {
        console.log("Super Green")
    } else {console.log("not so much")}}
    isFast(speed)
    {
        this.speed = this.hasTurbo
        speed = true

        if(this.speed === true)
        {
            console.log(`The ${this.model} ${this.make} is fast`)
        } else {console.log("not fast")}
    }
}

const cars = new Vechiles('BMW','M35i',2022,false,true)
cars.isFast(true)
cars.isGreen()

table = document.createElement('ul')