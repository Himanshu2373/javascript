// Arrays : ordered collection of element, in js array we store all type of data in single array

let fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[2]); //output : 2nd index element

let fruits1 = ["apple", "banana", "mango", 123, null];
console.log(fruits1);

//Change array elements

fruits1[4] = 90;
console.log(fruits1);

//check array or not
console.log(Array.isArray(fruits1));

// push and pop

fruits1.push("litchi"); // add last in array
console.log(fruits1);
fruits1.pop(); // last elemnts remove
console.log(fruits1);

//insrtion in starting point
fruits1.unshift("grapes"); //unshift is used to insert elment in starting index
console.log(fruits1);

fruits.shift(); //shift is used to remove element form starting index
console.log(fruits);

// difference between primitive and reference data type
//primitive
let num = 6;
let num1 = num;
console.log(num);
console.log(num1); //in primitive data type only update that var value those we update
num++;
console.log(num);
console.log(num1);

//reference

let arr1 = ["ram", "sita", "Laxman"];
let arr2 = arr1;
console.log(arr1);
console.log(arr2); // in reference both var value are updated

arr1.push("Bharat", "Shatrudhan");

console.log(arr1);
console.log(arr2);

// Array basic

let number = [1, 4, 5, 7];
console.log(number);

//push

number.push(9); // push is used for add element at last of array
console.log(number);

// splice
number.splice(3, 0, "Hello"); // here 3 is the position
console.log(number);

// searching

console.log(number.includes(7));
