// Exercise 1 : Location
// Analyze the code below. What will be the output?
// ANSWER: We use nested destructuring here, so the output is I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//  Exercise 2: Display Student Info
// Using the code above, destructure the parameter inside the function and return a string 
// as the example seen below:
//output : 'Your full name is Elie Schoppik'

// function displayStudentInfo(objUser){
//     const {first: a, last: b} = objUser;
//     console.log(`Your full name is ${a} ${b}`);   
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Exercise 3: User & id

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// const users = { user1: 18273, user2: 92833, user3: 90315 };
// let userArray = Object.entries(users);
// console.log(userArray);
// for (const user of userArray) {
//     user[1] = user[1] * 2;
// };
// console.log(userArray);


// Exercise 4 : Person class
// Analyze the code below. What will be the output?
// ANSWER: object, beceause classes are templates for creating objects

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);


// Exercise 5 : Dog class

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

// // Analyze the options below. Which constructor will successfully extend the Dog class?
// // ANSWER: number 2 is correct
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// Exercise 6 : Challenges

// 1. Evaluate these (ie True or False)

// [2] === [2]  FALSE
// {} === {} FALSE

// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4; 
// console.log(object2.number) //4
// console.log(object3.number) //4
// console.log(object4.number) //5

// 1. Create a class Animal with the attributes name, type and color. The type is the animal 
// type, for example: dog, cat, dolphin etc …

class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
// 2. Create a class Mammal that extends from the Animal class. Inside the class, add a 
// method called sound(). This method takes a parameter: the sound the animal makes, and 
// returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }

    makeSound(sound){
        console.log(`${sound}! I'm a ${this.type} named ${this.name}. I'm ${this.color}.`);
    }
}

// 3. Create a farmerCow object that is an instance of the class Mammal. The object accepts 
// a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

farmerCow = new Mammal('Molly', 'cow', 'white');
farmerCow.makeSound("Moooo");