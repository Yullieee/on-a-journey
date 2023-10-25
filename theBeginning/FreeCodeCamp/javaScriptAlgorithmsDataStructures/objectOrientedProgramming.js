//Create a Basic JavaScript Object

let dog = {
  name: "Mathis",
  numLegs: 2
};

//Use Dot Notation to Access the Properties of an Object

console.log(dog.numLegs);
console.log(dog.name);

//Create a Method on an Object

let dog1 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs."}
};

dog.sayLegs();

//Make Code More Reusable with the this Keyword

let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//Define a Constructor Function

function Dog() {
  this.name = "Mathis";
  this.color = "blue";
  this.numLegs = 2;
}

//Use a Constructor to Create Objects

let hound = new Dog();

//Extend Constructors to Receive Arguments

function Dog(name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

let terrier = new Dog('Mathis','blue');

//Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(42);
myHouse instanceof House;

//Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

//Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

//Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let ownProps2 = [];
let prototypeProps = [];

// Only change code below this line

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps2.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

//Understand the Constructor Property

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}

//Change the Prototype to a New Object

Dog.prototype = {
  numLegs: 2,
  eat: function() {
    console.log('yummy');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};

//Remember to Set the Constructor Property when Changing the Prototype

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Understand Where an Object’s Prototype Comes From

Dog.prototype.isPrototypeOf(beagle);

//Understand the Prototype Chain

Object.prototype.isPrototypeOf(Dog.prototype);

//Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nomn nom");
  }
};

//Inherit Behaviors from a Supertype

let duck = Object.create(Animal.prototype);
let beagle2 = Object.create(Animal.prototype);

//Set the Child's Prototype to an Instance of the Parent

Dog.prototype = Object.create(Animal.prototype);
let beagle3 = new Dog();

//Reset an Inherited Constructor Property

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

//Add Methods After Inheritance

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
}

//Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return('Alas, this is a flightless bird.');
}

//Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('WEEEEE ! ^c^');
  }
}

glideMixin(bird);
glideMixin(boat);

//Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

//Understand the Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("A cozy nest is ready");
})();

//This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

//Use an IIFE to Create a Module

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();


