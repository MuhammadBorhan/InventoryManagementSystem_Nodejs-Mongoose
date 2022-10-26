const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const colors=require("colors");

const app=require("./app");

const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Port is running on http://localhost:${port}`.blue.bold);
});