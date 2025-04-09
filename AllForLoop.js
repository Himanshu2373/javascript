// FOR OF LOOP in array

const arr5=["value1", "value2", "value3"]

for(let arr of arr5){
    console.log(arr)  // output : value1 value2 value3
}

// //for IN LOOP in array

const arr1=["value1", "value2", "value3"]

for(let arr in arr1){
    console.log(arr)    //output: index number(0 1 2)
    console.log(arr1[arr]) // output : value1 value2 value3
}


//  FOR OF LOOP in object

let user=[
    {userId:1, Name : "himanshu", Gender : "Male"},
    {userId:2, Name : "ram", Gender : "Male"},
    {userId:3, Name : "rani", Gender : "female"}
]

for(let user1 of user){
console.log(user1)      //output : { userId: 1, Name: "himanshu", Gender: "Male" }
                      //           { userId: 2, Name: "ram", Gender: "Male" }
                      //           { userId: 3, Name: "rani", Gender: "female }
console.log(user1.userId)    //output : 1  2  3                    
}

// FOR EACH LOOP IN ARRAY

const num=[1,2,3,4,5]

num.forEach(function(number){
    console.log(number*2)
})

// FOR EACH LOOP IN OBJECT

const user1=[
    {first:"HIMANSHU",age:24},
    {first:"RAM", age:23}
]

user1.forEach(function(USER){
    console.log(USER.first)
})
