//Global and Local Scope (Functional scope)

// var myName = "Sander"; //global scope

// function login(arg) {
//     var myName = arg //locaL scope
//   return (myName = arg);
// }

// var someVar = login("Petter");

// console.log('someVar: ',someVar);

// console.log(myName);

// //Global scope
// var carName = "Volvo"
// //code here can use carName

// function myFunction() {
//     //code here can also use carName
// }

//Local scope
//If you declair variable inside the function, you use it inside the function

//Global scope
//If you declair a variable outside the function you can use it both outside and inside function

//Example 2: Callback functions

// var enterSite = function () {
//   console.log("Hello you entered the website");
// };

// function loginToSite(arg) {
//   arg();
// }

// loginToSite(enterSite);

//Assigning a function to a variable
// var login = function(name) {
//     console.log("You may login: ", name);
// }

// login("Sander");

//Example 4:
// var user = {
//     name: "Sander",
//     job: "Student",
//     login: function (name) {
//         console.log("Hello my name is",name);
//     }
// }

// console.log("My user object: ", user);
// console.log("Name: ", user.name);

// user.login("Sander");

// console.dir(window);

//Constant variable:
// const count = 1;

// count = 99;

// count = count + 99; //error(can not change a const)

// let count = 1;
// count = 2;
// count = count + 1; //3
// count += count + 1; //5(7)
// console.log(count);

// {
//   let pet = "dog";
//   function bark() {
//     console.log(pet);
//   }
//   bark();
// }

// const profile = {
//     name: "Sander",
//     age: "27",
//     job: "Student"
// }
// console.log("Console.log: ", profile);
// console.dir("console.dir: " + profile);

//new line in log
// const sentence = `One
// Two`;

// const sentenceTwo = "One\nTwo";

// console.log(sentence);
// console.log(sentenceTwo);

// const profile = {
//   name: "Sander",
//   age: "27",
//   job: "Student",
// };

// console.log(profile["name"]);
// console.log(profile["age"]);
// console.log(profile.name);
