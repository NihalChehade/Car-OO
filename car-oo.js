class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is ${make} ${model} from ${year}`;
    }
}

class Car extends Vehicle {
    constructor() {
       super();
        this.numWheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.numWheels = 2;

    }
    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full.";
        }
        if (vehicle instanceof (Vehicle)) {
            this.vehicles.push(vehicle);
            return 'Vehicle added!';
        } else {
            return "Only vehicles are allowed in here!"
        }
    }
}