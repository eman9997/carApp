var mongoose = require("mongoose");
let Car= require("./models/car");


var data = [
    {
        make: "mazda", 
        model: "6",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image:"https://car-images.bauersecure.com/pagefiles/80898/mazda_6tourer_07.jpg"

    },
    {
        make: "toyota", 
        model: "camery",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        image:"https://car-images.bauersecure.com/pagefiles/80898/mazda_6tourer_07.jpg"

    }
]
 
function seedDB(){
    //Remove all campgrounds
    Car.remove({}, (err)=>{
        if(err){
            console.log("your mistake is:   "+err)
        }
        data.forEach((seed)=>{
            Car.create(seed,(err, data)=>{
                if(err){
                    console.log("your mistake : "+err);
                }
                else{
                    console.log("info recorded");
                }
            });
        });
    }

    )}
 module.exports = seedDB;