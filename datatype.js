let age =23
let name ="himanshu";
let marks
let rollNo= null;
console.log(typeof age)
console.log(typeof name)
console.log(typeof marks)
console.log(typeof rollNo)

// Covert Number to string 
// use number with plus operator and blank double quote
// or use string keyword before variable
console.log(age+" ");
console.log(typeof(age+" "));   
age = String(age);
console.log(typeof(age))
// convert string to number 
// add plus operator before string

console.log(typeof(+name))

//string concatenation '+'
//template string

let aboutMe= "my name is "+name+ " and my age is "+age;
console.log(aboutMe);

aboutMe= `my name is ${name} and age is ${age}`;
console.log(aboutMe)

// BigINT (use to maximum size of number)

let num=BigInt(12345689987456321)
console.log(num)
let num2 = 123n;
console.log(num2)

// Boolean vs comparision operator
//true or false   (== vs ===)

let num1="7";
let num3=7;
console.log(num1==num3)    // output is ture bcz its check only value no datatype and its only in js not other lang
console.log(num1===num3)   //  output is false bcz it's check both value and datatype
