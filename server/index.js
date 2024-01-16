const express = require("express");
const cors = require("cors");

const app=express();
const PORT=3000;

app.get("/" , (req,res)=>{
    return res.json("I am There");
} )

app.listen(PORT , ()=>{
    console.log("Server is running in port 3000");
})
