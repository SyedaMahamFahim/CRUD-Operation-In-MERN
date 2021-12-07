const mongoose = require("mongoose");

const  carDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name should have more than 2 characters"],
  },
  emailAddress: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  color: {
    type: String,
    required: [true, "Please Enter The Color"],
  },
  numberPlate: {
    type: String,
    required: [true, "Please Enter The Number"],
  },
  model: {
    type: String,
    required: [true, "Please Enter The Model"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("CarData", carDataSchema);