// MAP FUN : use to create new array

const num= [3,4,5,6,4]

const squ= function(number){
    return number*number;
}

const squre=num.map(squ)
console.log(squre)

//or
const num1=[1,2,3,4,5,6,7]
const squrenum=num1.map(function(number){
        return number*number
})
console.log(squrenum)
console.log(num1)

// FILTER METHOD : IT'S ALWAYS RETURN BOOLEAN VALUE

let isEven=function(number){
      return number%2==0
}
const evenNum=num1.filter(isEven)
console.log(evenNum)

//or
 isEven=num1.filter(function(number){
    return number%2==0
})
console.log(isEven)



// REDUCE METHOD :


let num2=[1,2,3,4,5,6,7]
let sum=num2.reduce((acc,currentValue)=>{
    return acc+currentValue
})                                             // by default accumulator value is 0
console.log(sum)

//or

 num2=[1,2,3,4,5,6,7]
 sum=num2.reduce((acc,currentValue)=>{
    return acc+currentValue
},100)                                         // by accumulator value assign with 100
console.log(sum)

// SORT METHOD for array: 

// ASCII CODE 
//  0-9 : 48-57
//  A-Z : 65-90
//  a-z : 97-122      string sorting perform according top ascii code

let num3=[5,9,1200,400,3000]
num3.sort()
console.log(num3)   // output is unexpected due to string and ascii code
                      //  [ 1200, 3000, 400, 5, 9 ]

num3.sort((a,b)=>a-b)   //output in accending order and (b-a) for decending order
// OR
num3.sort((a,b)=>{return a-b})
console.log(num3)


// SORT METHOD for Object: 

let product=[
    {proID:1,proName:"p1",price:300},
    {proID:2,proName:"p2",price:850},
    {proID:3,proName:"p3",price:700},
    {proID:4,proName:"p4",price:400},
]
product.sort((a,b)=>{return b.price-a.price})
console.log(product)


const lowHigh =product.slice(0).sort((a,b)=>{return a.price-b.price})
console.log(lowHigh)

// FIND METHOD for Array: 

let arr=["Hello","Hii","cat","DOg","Lion"]
const ans=arr.slice(0).find(function(string){
    return string.length===3
})

console.log(ans) 


// FIND METHOD for Object: 

product=[
    {proID:1,proName:"p1",price:300},
    {proID:2,proName:"p2",price:850},
    {proID:3,proName:"p3",price:700},
    {proID:4,proName:"p4",price:400},
]
const ans1=product.find((product)=>{return product.proID===3})
console.log(ans1)

// EVERY METHOD for :In which check all elements are statisfied cond. then return true otherwise false

let arr1=[8,2,10,4,12,6]
let output=arr1.every((num)=>{
    return num%2===0
})

console.log(output) 


// SOME METHOD  :In which check any one element are statisfied cond. then return true otherwise false

arr1=[11,9,7,3,1,6]
output=arr1.some((num)=>{
    return num%2===0
})

console.log(output) 

// FILL METHOD  : it is used to fill elemrnts in array . in which use three parameter value, satrt, end 

let arr2=[11,9,7,3,1,6]
arr2.fill(1,1,4)      //here 1 is value and 1 is starting index and 4 is ending index
console.log(arr2)     //output:[ 11, 1, 1, 1, 1, 6 ]

//or
const myArr=new Array(10).fill(5)
console.log(myArr)                //output:[ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]

// SPLICE METHOD  : it is used to delete or remove elements between array . in which
//                  also use three arguments first means starting index second means delete and third means insert
//                 we can perform delete and insert operation in same time
let myArr1=["item1","item2","item3"]
myArr1.splice(1,1)       //start from 1st index and delete 1 element
console.log(myArr1)    //output:[ "item1", "item3" ]

//insert
myArr1=["item1","item2","item3"]
myArr1.splice(1,0,"insert")       //start from 1st index , delete 0 element and insert "insert"
console.log(myArr1)     // Output :[ "item1", "insert", "item2", "item3" ]





