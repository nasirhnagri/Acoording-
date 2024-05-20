// let arr = ["hussain", "nasir", 123, 456,]
// console.log(arr)
// arr.splice(1, 3, "huhui", "aksas", "sndjn",)

// console.log(arr)


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// console.log(fruits)
// const citrus = fruits.slice(-3, -1);


// console.log(citrus)
// Object methods, "this"
// Objects are usually created to represent entities of 
// the real world, like users, orders and so on:
 
// let user = {
//     name: "Nasir",
//     age: 20
//   };

//   let users = {
//     name: "Ali",
//     age: 33
//   };
  
//   users.sayHi = function() {
//     alert("Hello!");
//   };
  
//   users.sayHi(); // Hello!

//   Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.

// Then we can call it as user.sayHi(). The user can now speak!

// A function that is a property of an object is called its method.

// So, here we’ve got a method sayHi of the object user.

// Of course, we could use a pre-declared function as a method, like this:

// let user = {
//     // ...
//   };
  
  // first, declare
//   function sayHi() {
//     alert("Hello!");
//   }
  
  // then add as a method
//   user.sayHi = sayHi;
  
//   user.sayHi(); // Hello!

// these objects do the same

// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };
  
  // method shorthand looks better, right?
  // user = {
  //   sayHi() { // same as "sayHi: function(){...}"
  //     alert("Hello");
  //   }
  // };

  // =============================================

  // let users = {
  //   name: "John",
  //   age: 30,
  
  //   sayHi() {
  //     // "this" is the "current object"
  //     alert(this.name);
  //   }
  
  // };
  
  // user.sayHi(); // John


// console.log("Hello");
// // is the same as
// console.log("Hello");

// Find the value of the first element with a value over 18:

// const ages = [3, 10, 18, 20];
// console.log(ages)


// function checkAge(age) {
//   return age > 18;
// }

// function myFunction() {
//   // document.getElementById("demo").innerHTML = ages.find(checkAge);

//   console.log()
// }


// let findMethod = ["nasir", "hussain", "muntazir", 12,34,54,["ali", 12,"6th","glt"]]

// console.log(findMethod)
// let result = findMethod.find([2])
// ===========================================================================
// ===========================================================================
// ===========================================================================

// Array includes

// let array = ["hussain","Ali","Nasir","ibrahim", 11,12,23,33,43,32,24]

// console.log(array)
// let newArr = array.includes(12)
// console.log(newArr)

