// Exercise 1 : Colors

// 1. Write a JavaScript program that displays the colors in the following order 
// : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// 2. Check if at least one element of the array is equal to the value “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, index) => {
//     console.log(`${index + 1}# choice is ${item}`);
// });

// let result = colors.some((value) => {return value === 'Violet'});
// result ? console.log('Yeah') : console.log("No...");


// Exercise 2 : Colors #2
// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((item, index) => {
//     index < 3 ? console.log(`${index + 1}${ordinal[index + 1]} choice is ${item}`)
//     : console.log(`${index + 1}${ordinal[0]} choice is ${item}`);
// })


// Exercise 3 : Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ANSWER: ['bread', "carrot", "potato", 'chicken', "apple", "orange"] - 1 array

// ------2------
// const country = "USA";
// console.log([...country]);

// ANSWER: ['U','S','A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//ANSWER: I didn't know the answer here. it will be [ undefined, undefined ]


// Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome 
// message. You should get an array that looks like this :

// let welcome = users.map((user) =>{
//     return `Hello ${user.firstName}`;
// })
// console.log(welcome);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

// const residents = users.filter(user =>user.role == 'Full Stack Resident');
// console.log(residents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing 
// only the lastName of the Full Stack Residents.
// let lastNameFullStack = users.filter(user =>user.role == 'Full Stack Resident').map((user => {
//     return user.lastName;
// }));
// console.log(lastNameFullStack);



// Exercise 5 : Star Wars
// Use the reduce() method to combine all of these into a single string.

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// let starWars = epic.reduce((total, item) => {return total + item});
// console.log(starWars);


//  Exercise 6 : Employees #2

// 1. Using the filter() method, create a new array, containing the students that passed the course.
// 2. Bonus : Chain the filter method with a forEach method, to congratulate the students with 
// their name and course name (ie. “Good job Jenner, you passed the course in 
// Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
 
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

// const goodStudents = students.filter((student) => student.isPassed);
// console.log(goodStudents);

const congrants = students.filter((student) => student.isPassed).forEach(student => 
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
);
