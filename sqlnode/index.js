const { faker } = require('@faker-js/faker');
const mysql=require('mysql2')
const express=require('express')
const path=require('path')
const app=express()

const methodOverride=require("method-override")
// app.set()
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'abhay021026',
  database: 'college'
});


function getRandomUser() {
  return [
    faker.string.uuid(),
     faker.internet.username(),  // ✅ note: username() not userName()
    faker.internet.email(),
    // avatar: faker.image.avatar(),
     faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  ];
}

// let q="SHOW TABLES"
// let q="INSERT INTO users(id,username,email,password) values ? ";
// let user=[["1234","abhaysrivastavaa","abc@ccgmail.com","12345dd"],

// ["12345","abhay","abac@gmail.com","1234a5"]]
// let data=[]

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;  
//         console.log(result)
//         // console.log(result.length);
//         // console.log(result[0]);
//     })
// }catch(err){
//     console.log(err)
// }
// connection.end();


app.get("/",(req,res)=>{
  let q="select count(*) from users";
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;  
        // console.log(result[0]["count(*)"])
        let count=result[0]["count(*)"]
        res.render("home.ejs",{count})
        // console.log(result.length);
        // console.log(result[0]);
    })
}catch(err){
    console.log(err)
    res.render("some error in db ")
}
  // res.send("welcome to home page")
})
app.get("/user",(req,res)=>{
  let q="select* from users";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let data=result;
      // console.log(data);
      // res.send(data)
      res.render("users.ejs",{data});
    });
  }catch(err){
    res.send("some error occured")
  }
})

app.get("/user/:id/edit",(req,res)=>{
let {id}=req.params;
let q=`select * from users where id='${id}'`;
try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      // let data=result;
      let user=result[0];
      console.log(result);
      // res.send(data)
      res.render("edit.ejs",{user});
    });
  }catch(err){
    res.send("some error occured")
  }

// console.log(id);
// res.render("edit.ejs")

})

//update routeee
app.patch("/user/:id",(req,res)=>{
  // res.send("updated")
  let {id}=req.params;
  let {password:formpassword,username:newusername}=req.body;
let q=`select * from users where id='${id}'`;
try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      // let data=result;
      let user=result[0];
    if(formpassword!=user.password){
      res.send("WRONG PASSWORD")
    }else{
      let q2=`UPDATE users SET username='${newusername}' WHERE id='${id}'`;
      connection.query(q2,(err,result)=>{
        if(err) throw err;
        res.send(result); 
      })
    }
      
      // res.send(user)
      console.log(result);
      // res.send(data)
      // res.render("edit.ejs",{user});
      // res.send(user);
    });
  }catch(err){
    res.send("some error occured")
  }
})


app.listen("8080",()=>{
  console.log("server is listening on 8080")
})
// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;  
//         console.log(result)
//         // console.log(result.length);
//         // console.log(result[0]);
//     })
// }catch(err){
//     console.log(err)
// }
// connection.end();

// console.log(getRandomUser());
