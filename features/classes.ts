class Vehicle {
  drive(): void {
    console.log('hello');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const mazda = new Car();
mazda.drive();
