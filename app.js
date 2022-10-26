const express=require("express");
const app=express();
const cors=require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// routes
const brandRoute=require("./routes/Brand.route");

app.get('/',(req,res)=>{
res.send("Route is working...YaY!!");
});

// route location
app.use('/api/v1/brand',brandRoute)

module.exports=app;