const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const colors=require("colors");

// app import
const app=require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>{
    console.log(`Database connection is successful 🛢` .red.bold);
  })

// server connect
const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Port is running on http://localhost:${port}`.blue.bold);
});