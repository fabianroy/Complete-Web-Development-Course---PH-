class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Gari chole na');
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

let bus = new Bus('Volvo', 10000000, 30, 1000);
console.log(bus);
bus.move();

let truck = new Truck('Tata', 2000000, 1000);
console.log(truck);
truck.move();
