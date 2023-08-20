// Iterable : In which use FOR Of loop. Ex- array, string

// ARRAY BLIKE OBJECT : In which use length property and access by index number

// SETS : It is iterable , store data, sets also have its own methods ,
//         No index based access ,unique item only(duplicate not allaow)

const num= new Set([1,3,23,5])
console.log(num)                //Output :[ 1, 3, 23, 5 ]

const num1= new Set()
num1.add(5)
num1.add(7)
num1.add(8)
num1.add(['item1','item2'])
num1.add(['himanshu','ram'])
console.log(num1)               //Output : [ 5, 7, 8, (2) […], (2) […] ]

// has() : it is used to check element is prensent or not

if(num1.has(8))
{
    console.log("present")
}

// MAPS for array

// object: it store key always in string or symbol
// maps : it store key in any tpe

//in which use set(), get() and keys() function 

let person = new Map()
person.set(`FirstName`,'Himanshu')
person.set(`age`,24)

console.log(person.get('FirstName'))

for(let key of person.keys()){
    console.log(key)
}

for(let [key, value] of person){
    console.log(key, value)
}

//MAPS for object
const person1={
     id:1,
     name:"himanshu"
}

const info=new Map()
info.set(person1,{age:24, gender:"MALE"})
console.log(info)