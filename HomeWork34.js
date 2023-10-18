class Human {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Flat {
    residentsArray = [];
  
    addResident(resident) {
      if (this.residentsArray.length < 2) {
        this.residentsArray.push(resident);
      }
    }
  
    getResidents() {
      return this.residentsArray;
    }
  }
  
  class Building {
    flatsArray = [];
  
    constructor(maxFlatsNumber) {
      this.maxFlatsNumber = maxFlatsNumber;
    }
  
    addFlat(flat) {
      if (this.flatsArray.length < this.maxFlatsNumber) {
        this.flatsArray.push(flat);
      } else {
        console.warn("The number of flats it's maximum.");
      }
    }
  }
  
  const residents = [
    new Human("Katya", "female"),
    new Human("Ivan", "male"),
    new Human("Masha", "female"),
    new Human("Kolya", "male"),
    new Human("Olya", "female"),
    new Human("Sasha", "male")
  ];
  
  const flats = [];
  let currentFlat = new Flat();
  
  residents.forEach(resident => {
    currentFlat.addResident(resident);
    if (currentFlat.getResidents().length === 2) {
      flats.push(currentFlat);
      currentFlat = new Flat();
    }
  });
  
  const building = new Building(3);
  flats.forEach(flat => building.addFlat(flat));
  
  console.log(building.flatsArray[0].getResidents());
  