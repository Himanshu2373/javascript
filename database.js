const mysql = require('mysql');

const con = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"blooddonation",
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error");
    }
    else{
        console.warn("connected")
    }
});

con.query('select * from login', (err,result,fields)=>{
    if(err){
        return  console.log(err);
    }
    return console.log(result);
});