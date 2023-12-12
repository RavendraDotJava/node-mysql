const express = require('express');
const app = express();
const connection = require('../db')

connection.connect((err)={
    if (err) {
        console.log(err);
    }
})

//index
const indexcontroller=((req,res)=>{
    res.send("controller");
})

//users
const userscontroller=((req,res)=>{

   connection.query("select * from node_test order by id desc",(error,result,fields)=>{
            if (error) {
                console.log(error);
            } else {
                //res.send(JSON.stringify(result));
                res.render("index",{data:result})
                
            }
   })
})
//delete
const deletecontroller=((req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    connection.query(`delete from node_test where id=${id}`,(error,result,fields)=>{
        if (error) {
            console.log(error);
        } else {
            //res.send(JSON.stringify(result));
            console.log(result);
            res.redirect('/users')
            
        }
    })

})
//insert
const insertcontroller=((req,res)=>{
    console.log(req.body);
    let fname=req.body.fname;
    let lname=req.body.lname;
    let email=req.body.email;
    let gender=req.body.gender;
    let message=req.body.message;

    var sql ="insert into node_test (fname,lname,email,gender,message) values(?,?,?,?,?)";
    connection.query(sql,[fname,lname,email,gender,message],(err,result)=>{
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            res.redirect('/users')
          }
    })

})

//update
const updatecontroller=((req,res)=>{
    console.log(req.body);
    let id = req.body.id;
    let fname=req.body.fname;
    let lname=req.body.lname;
    let email=req.body.email;
    let gender=req.body.gender;
    let message=req.body.message;

    var sql =`update node_test set fname=?, lname=?, email=?, gender=?, message=? where id=${id} `;
    connection.query(sql,[fname,lname,email,gender,message],(err,result)=>{
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            console.log(result);
            res.redirect('/users');
          }
    })

})
const updategetcontroller=((req,res)=>{
    let id = req.params.id;
    connection.query(`select * from node_test where id=${id}`,(error,result,fields)=>{
        if (error) {
            console.log(error);
        } else {
            //res.send(JSON.stringify(result));
            res.render("update",{data:result})
            console.log(result);
            
        }
})
   
})



module.exports={indexcontroller,userscontroller,deletecontroller,insertcontroller,updatecontroller,updategetcontroller};