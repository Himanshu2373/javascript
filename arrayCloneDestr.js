
//array clone 

 let arr=["item1", "item2","item3", "item4"]
let arr1=arr.slice(0)  //copy from 0 index
console.log(arr)
console.log(arr1)

arr.push("item5")
console.log(arr)     //here using slice or concate , create another array and store all value from arr1 to
                        // arr2  after store we update in arr1 then it can cont updated in another array 
console.log(arr1)

 let arr2=[].concat(arr1)   
console.log(arr2)
// // slice crete clone from specified index and concate create from 0 index

// // //spread operator  :- IT is also use for create clone

 let arr3=[... arr2]
  console.log(arr3)
 let arr4=[... arr2, "ram","Raja" ]
  console.log(arr4)

  // array destructing : array elements are stored in indivisiual variable

  const arr5=["value1", "value2", "value3"]

  let[var1, var2, var3]=arr5  
  console.log(var1)      //output  value1
  console.log(var2)      //output value2
  console.log(var3)     // output value3

