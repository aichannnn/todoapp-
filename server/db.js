const express =require("express");
const {Pool} =require("pg");


//schema 
const pool =new Pool({
    user :"postgres",
    password:"root",
    host:"localhost",
    port:5432,
    database:"my_pgdb"
});

module.exports = pool