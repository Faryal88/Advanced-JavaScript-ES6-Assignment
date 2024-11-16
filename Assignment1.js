// Question # 1:
function scopeExample() {
	// var: function-scoped variable
	var varVariable = "I am function-scoped (var)";
  
	// let: block-scoped variable
	let letVariable = "I am block-scoped (let)";
  
	// const: block-scoped constant variable
	const constVariable = "I am block-scoped and cannot be reassigned (const)";
  
	return `Scopes:
	- varVariable: ${varVariable}
	- letVariable: ${letVariable}
	- constVariable: ${constVariable}`;
  }
console.log(scopeExample());
  

// Question # 2:
function createMultiplier(multiplier) {
	return function(number) {
	  return number * multiplier;
	};
  }
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  console.log(double(5));   
  console.log(double(10));  
  console.log(triple(5));   
  console.log(triple(10));  
  

// Question # 3:
function personInfo({ name, age, country = "Unknown Country", city = "Unknown City" }) {
	return `Name: ${name}, Age: ${age}, Country: ${country}, City: ${city}`;
  }

  const person1 = { name: "Alice", age: 30, country: "USA", city: "New York" };
  console.log(personInfo(person1));
  
  const person2 = { name: "Bob", age: 25 };
  console.log(personInfo(person2));

  
// Question # 4:
function calculateTotal(price, ...discounts) {
	discounts.forEach(discount => {
	  price -= discount;
	});
	return price;
  }
  console.log(calculateTotal(100, 10, 5));    
  console.log(calculateTotal(200, 20, 10, 5)); 
  console.log(calculateTotal(50, 15));         


// Question # 5:
const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b
  };
  
  console.log(calculator.add(5, 3));        
  console.log(calculator.subtract(10, 4));  
  console.log(calculator.add(15, 25));      
  console.log(calculator.subtract(20, 5));  
  
  
// Question # 6:
const books = [
	{ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
	{ title: "1984", author: "George Orwell", yearPublished: 1949 },
	{ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 }
  ];
  
  function logBookInfo(booksArray) {
	for (const book of booksArray) {
	  console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`);
	}
  }
  logBookInfo(books);
  


// Question # 7:
function* idGenerator() {
	let id = 1;
	while (true) {
	  yield id++;
	}
  }

  const generateId = idGenerator();
  
  console.log(generateId.next().value); 
  console.log(generateId.next().value); 
  console.log(generateId.next().value); 
  console.log(generateId.next().value);  
  console.log(generateId.next().value);  
  

// Question # 8:
function add(a, b) {
	return a + b;
  }
  
  function subtract(a, b) {
	return a - b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function divide(a, b) {
	if (b === 0) {
	  return "Error: Division by zero";
	}
	return a / b;
  }
  
  console.log("Addition: ", add(5, 3));        
  console.log("Subtraction: ", subtract(10, 4));
  console.log("Multiplication: ", multiply(4, 7)); 
  console.log("Division: ", divide(20, 5));    
  console.log("Division by zero: ", divide(10, 0)); 
  

 
// Question # 9:  
const student = {
	name: "Alisha",
	age: 18,
	grade: "A",
	subjects: ["Math", "Science", "English"]
  };
  for (const property in student) {
	console.log(`${property}: ${student[property]}`);
  }
  

// Question # 10:
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num ** 2);

console.log("Original Array: ", numbers);   
console.log("Squared Array: ", squaredNumbers); 


// Question # 11:
function operate(num1, num2, callback) {
	return callback(num1, num2);  
  }
  
  function add(num1, num2) {
	return num1 + num2;
  }
  
  function subtract(num1, num2) {
	return num1 - num2;
  }
  
  console.log("Addition: ", operate(5, 3, add));        
  console.log("Subtraction: ", operate(5, 3, subtract)); 


 
// Question # 12:
setTimeout(() => {
	console.log("Hello, World!");
  }, 3000);  
  

// Question # 13:
const intervalId = setInterval(() => {
	const currentTime = new Date().toLocaleTimeString();  
	console.log("Current Time: ", currentTime);
  }, 2000);  
  
  setTimeout(() => {
	clearInterval(intervalId);
	console.log("Interval cleared after 10 seconds.");
  }, 10000);  


// Question # 14:
function fetchData() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve("Data received!");
	  }, 2000); 
	});
  }
  fetchData()
	.then(response => {
	  console.log(response);  
	})
	.catch(error => {
	  console.log(error);  
	});
  
  
  
// Question # 15:
async function fetchData() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve("Data received!");
	  }, 2000); 
	});
  }
  async function fetchAndLogData() {
	try {
	  const response = await fetchData();
	  console.log(response);  
	} catch (error) {
	  console.log(error);  
	}
  }
  fetchAndLogData();
  

// Question # 16:
function power(base, exponent) {
	return base ** exponent;
  }
  console.log(power(2, 3)); 
  console.log(power(5, 2));  
  console.log(power(10, 0)); 
  console.log(power(7, -2)); 


// Question # 17:
class Animal {
	constructor(name, species) {
	  this.name = name;
	  this.species = species;
	}
	speak() {
	  console.log(`${this.species} named ${this.name} says ${this.sound()}`);
	}
	sound() {
	  return "some sound";
	}
  }
  const dog = new Animal("Rex", "Dog");
  const cat = new Animal("Whiskers", "Cat");
  dog.sound = () => "Woof!";
  cat.sound = () => "Meow!";
  dog.speak();  
  cat.speak(); 
  
  
// Question # 18:
function checkEvenOrOdd(number) {
	return number % 2 === 0 ? "Even" : "Odd";
  }
  console.log(checkEvenOrOdd(4));   
  console.log(checkEvenOrOdd(7));   
  console.log(checkEvenOrOdd(10)); 
  console.log(checkEvenOrOdd(15));  
  console.log(checkEvenOrOdd(0));   
  console.log(checkEvenOrOdd(-3));  
  


// Question # 19:
const user = {
	name: "Faryal Abbasi",
	address: {
	  city: "New York",
	  country: "USA"
	}
  };
  function logCity(user) {
	console.log(user.address?.city || "City not available");
  }
  logCity(user); 
  const userWithoutAddress = {
	name: "Jane Smith"
  };
  
  logCity(userWithoutAddress);  
  