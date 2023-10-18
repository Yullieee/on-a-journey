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