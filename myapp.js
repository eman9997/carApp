let express =require("express");
let mongoose =require("mongoose");
let methodOverride=require('method-override');
let bodyParser=require("body-parser");
let app= express();

mongoose.connect("mongodb://localhost/car_app");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extened: true}));
// app.use(express.static("views"));

let carSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    image: String
});
let Car =mongoose.model("Car", carSchema);

// Car.create({
//     make: "toyota",
//     model: "camery",
//     description: "My First car",
//     image: "https://i.ytimg.com/vi/2xgsPcMiWcY/maxresdefault.jpg"
// },(err,car)=>{
//     if (err) {
//         console.log("THis is your error  .."+err);
//     } else {
//         console.log(car);
//     }
// });

app.get("/",(req,res)=>{
    // if(error){
    //     // console.log(err);
    // } else{
        Car.find({}, (err,cars)=>{
            res.render("index",{cars:cars});
        });
//    }
});




app.listen("3000", ()=>{
    console.log("Your Cars are on local Port 3000");
});











