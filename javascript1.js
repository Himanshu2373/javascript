
//prompt
let sum =0;
let year2;
let date= +prompt("Enter date ")
let month= +prompt("Enter month number ")
let year = +prompt("enter year from 1600 to 4099 ")
//date
if(date<=31){
    sum+=date%7;
    //console.log(sum)
}
else{
    console.log("date is invalid")
}
// //year
// //check leap year
 if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
   year2=1;
  
  }
 
// //year code
if(year>=1900 && year<=1999){
    sum+=0
    
}
else if(year>=1800 && year<=1899){  
    sum+=2
    
}
else if(year>=1700 && year<=1799){
    sum+=4
   
}
else if(year>=1600 && year<=1699){
    sum+=6
  
}
else if(year>=2000 && year<=2099)
{
    sum+=6
   
}
else if(year>=3000 && year<=3099){
    sum+=4
   
}
else if(year>=4000 && year<=4099){
    sum+=2
   
}
else {
    console.log("invaild year")
}


 let sum1=year%100;
 sum+= sum1%7;
 sum+= Math.floor(sum1/4);
 


if(year2==1){
   switch(month)
   {
    case 1:
          sum+=0
          break;
    case 2:
          sum+=3
          break;
    case 3:
          sum+=4
          break;
    case 4:
          sum+=0
          break;
    case 5:
          sum+=2
          break;
    case 6:
          sum+=5
          break;
    case 7:
          sum+=0
          break;
    case 8:
         sum+=3
         break;
    case 9:
         sum+=6
         break;
    case 10:
         sum+=1
         break;
    case 11:
         sum+=4
         break;
    case 12:
         sum+=6
          break;
   }
}
else{
    switch(month)
   {
    case 1:
          sum+=1
          break;
    case 2:
          sum+=4
          break;
    case 3:
          sum+=4
          break;
    case 4:
          sum+=0
          break;
    case 5:
          sum+=2
          break;
    case 6:
          sum+=5
          break;
    case 7:
          sum+=0
          break;
    case 8:
         sum+=3
         break;
    case 9:
         sum+=6
         break;
    case 10:
         sum+=1
         break;
    case 11:
         sum+=4
         break;
    case 12:
         sum+=6
          break;
   }
    
}
let total =sum%7

switch(total)
   {
    case 1:
          console.log("SUNDAY")
          break;
    case 2:
        console.log("MONDAY")
          break;
    case 3:
        console.log("TUESDAY")
          break;
    case 4:
        console.log("WEDNESDAY")
          break;
    case 5:
        console.log("THURSDAY")
          break;
    case 6:
        console.log("FRIDAY")
          break;
    case 7:
        console.log("SATURDAY")
          break;
   }