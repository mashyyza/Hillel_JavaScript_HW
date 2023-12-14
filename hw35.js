const HamburgerOptions = {
    SIZE_SMALL: { price: 50, calories: 20 },
    SIZE_LARGE: { price: 100, calories: 40 },
    STUFFING_CHEESE: { price: 10, calories: 20 },
    STUFFING_SALAD: { price: 20, calories: 5 },
    STUFFING_POTATO: { price: 15, calories: 10 },
    TOPPING_MAYO: { price: 20, calories: 5 },
    TOPPING_SAUCE: { price: 15, calories: 0 },
  };
  
  class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let price = HamburgerOptions[this.size].price + HamburgerOptions[this.stuffing].price;
      for (const topping of this.toppings) {
        price += HamburgerOptions[topping].price;
      }
      return price;
    }
  
    calculateCalories() {
      let calories = HamburgerOptions[this.size].calories + HamburgerOptions[this.stuffing].calories;
      for (const topping of this.toppings) {
        calories += HamburgerOptions[topping].calories;
      }
      return calories;
    }
  }
  
  const hamburger = new Hamburger("SIZE_SMALL", "STUFFING_CHEESE");
  hamburger.addTopping("TOPPING_MAYO");
  console.log("Calories: " + hamburger.calculateCalories());
  console.log("Price: " + hamburger.calculatePrice());
  hamburger.addTopping("TOPPING_SAUCE");
  console.log("Price with sauce: " + hamburger.calculatePrice());
  