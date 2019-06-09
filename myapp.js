let express =require("express");
let mongoose =require("mongoose");
let methodOverride=require('method-override');
let app= express();

mongoose.connect("mongodb://localhost/car_app");
app.set('view engine', 'ejs');
// app.use(express.static("views"));

let carSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    image: String
});
let Car =mongoose.model("Car", carSchema);

Car.create({
    make: "toyota",
    model: "camery",
    description: "My First car",
    image: "https://i.ytimg.com/vi/2xgsPcMiWcY/maxresdefault.jpg"
},(err,car)=>{
    if (err) {
        console.log("THis is your error  .."+err);
    } else {
        console.log(car);
    }
});
app.get("/",(req,res)=>{
    res.send("Welcome");
});




app.listen("3000", ()=>{
    console.log("Your Cars are on local Port 3000");
});











