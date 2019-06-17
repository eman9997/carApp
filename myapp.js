let express =require("express");
let mongoose =require("mongoose");
let methodOverride=require('method-override');
let bodyParser=require("body-parser");
let app= express();


mongoose.connect("mongodb://localhost/car_app",{useNewUrlParser: true } );

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extened: true}));
app.use(express.static("public"));

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

// INDEX PAGE
app.get("/",(req,res)=>{
    res.redirect("/cars")
});
app.get("/cars",(req,res)=>{
    Car.find({}, (err,cars)=>{
        if(err){
            // console.log(err);
        } else{
        res.render("index",{cars:cars});
        }
    });
});
// END OF INDEX


// This new is part of posting Create then post
app.get("/cars/new",(req,res)=>{
    res.render("new");
});
app.post("/cars",(req,res)=>{
    Car.create(req.body.car,(err,newcar)=>{
        if (err) {
            console.log("THis is your error  .."+err);
        } else {
            res.redirect("/cars");
        }
    });
});
// END of POST

app.get('/cars/:id',(req,res)=>{
    Car.findById(req.params.id,(err,foundCar)=>{
        if(err){
            console.log(err);
        } else{
            res.render("show",{car:foundCar});
        }
    });

    
});



app.listen("3000", ()=>{
    console.log("Your Cars are on local Port 3000");
});









