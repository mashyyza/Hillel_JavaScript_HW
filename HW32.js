class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    showInfo() {
      console.log(`"${this.name}", ${this.age}`);
    }
  }
  
  class Car {
    constructor(brand, model, year, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      this.owner = null;
    }
  
    assignOwner(owner) {
      if (owner.age >= 18) {
        this.owner = owner;
      } else {
      }
    }
  
    showInfo() {
      if (this.owner) {
        this.owner.showInfo();
        console.log(`"${this.brand}", "${this.model}", ${this.year}, "${this.licensePlate}"`);
      } else {
        console.log(`No owner information available.`);
      }
    }
  }
  
  let peopleInfo = [
    ["Sonya", 25],
    ["Dasha", 32],
    ["Sasha", 45],
    ["Ivan", 15]
  ];
  
  let carsInfo = [
    ["BMW", "X6", 2023, "AT0000AB"],
    ["Ford Fusion", "limited", 2023, "KA7777EX"],
    ["Audi", "Q8", 2022, "AT5555AB"],
    ["Tesla", "X", 2023, "AT4444AB"]
  ];
  
  let people = peopleInfo.map(([name, age]) => new Human(name, age));
  let cars = carsInfo.map(([brand, model, year, licensePlate]) => new Car(brand, model, year, licensePlate));
  
  people.forEach((person, index) => cars[index].assignOwner(person));
  cars.forEach(car => car.showInfo());
  