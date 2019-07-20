let mongoose =require("mongoose");

let carSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    image: String
});


module.exports =mongoose.model("Car", carSchema);