// Object  : object store key value pairs. object don't have index
//           it is reference type. in which use {}

const person={name :"himanshu",age :22}  //here name and age is key and himanshu and 22 is value
console.log(person)

//Access value from object

console.log(person.name)   //himanshu
console.log(person.age)    //22

//Array inside object

const person1 ={
    name:"himanshu",
    age:24,
    hobbies:["cricket","Kabbadi"]
}
console.log(person1)
console.log(person1.hobbies)

//insert key value in object

person1.Gender="Male"

console.log(person1)

//(.) dot use for single word variable .Ex: Gender
//[] use for double words variable . Ex: person gender

const obj={
    key1:"value1",  
    key2:"value2",
   // key1:"value3"   // if we insert another key with same key name
}                    // then value will be update of first key 

console.log(obj)  

//spread operator in array

const arr2=[5,6,7]

const arr3=[... "abc"]  //output ["a", "b", "c"]  its only happen in string
console.log(arr3)          // not in number

// const arr1=[... 123456]   //given error bcz number is not iterable
// console.log(arr1)

//spread operator in object

const obj1={
    key1:"value1",  
    key2:"value2",
   
}                    
const obj2= {
      key3:"value3",
      key4:"value4"
}

const newObj={... obj1}
console.log(newObj)        //output : { key1: "value1", key2: "value2" }
const newObj1={... obj1, ...obj2}
console.log(newObj1)        //output : { key1: "value1", key2: "value2", key3: "value3", key4: "value4" }

//creating new object with spread operator

const obj3={... "abcd"}
console.log(obj3)       //output : { 0: "a", 1: "b", 2: "c", 3: "d" }

// object destructing

const band={
    Name: "Led Zepplin",
    song:" aa llaaa LLAa"
}

const BandName=band.Name;
const SongName=band.song;

console.log(BandName)
console.log(SongName)


let user=[
    {userId:1, Name : "himanshu", Gender : "Male"},
    {userId:2, Name : "ram", Gender : "Male"},
    {userId:3, Name : "rani", Gender : "female"}
]

console.log(user)

const [user1, user2, user3]=user
console.log(user1)   //output :{ userId: 1, Name: "himanshu", Gender: "Male" }
console.log(user2)    //output :{ userId: 2, Name: "ram", Gender: "Male" }
console.log(user3)    //output :{ userId: 3, Name: "rani", Gender: "female" }