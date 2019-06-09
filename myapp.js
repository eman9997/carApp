let express =require("express");
let mongoose =require("mongoose");
let methodOverride=require('method-override');
let app= express();

mongoose.connect("mongodb://localhost/car_app");
app.set('view engine', 'ejs');

let carSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    image: String
});
let Car =mongoose.model("Car", carSchema);

Car.create({
    make: "mazda",
    model: "6",
    description: "My First car",
    image: "https://s1.poctra.com/700/copart-p-2018/m05/fc/fcd13182a25703b36d4cbaf5d7c4b4a4_2/2005-Mazda-6-S-front-left-30798168.jpg"
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












// let express=require("express");
// const app=express();
// let searchterm;

// const request=require("request");
// app.use(express.static("public"));
// // const requestPromises=require("request-promise-native");
// app.set('view engine', 'ejs');

// app.get("/",(req, res)=>{
//     res.render("search");

// });


// app.get("/results",(req, res)=>{
//     searchterm=req.query.Search;
//     request('http://www.omdbapi.com/?s=' +searchterm+ '&apikey=thewdb', function (error, response, body) {
//     if(!error && response.statusCode == 200){
//         let data=JSON.parse(body);
//         // console.log(data["Search"]["1"]["Title"]); 

//         res.render("home",{data:data});
//     }
//     });
    
// });

// // app.use(express.static("views"));

// app.listen("3000",()=>{
//     console.log("Now Serving localhost: 3000");
// });






