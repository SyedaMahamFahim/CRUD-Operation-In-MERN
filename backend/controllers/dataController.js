const CarData = require("../models/DataModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

// Register Car  Data
exports.registerCarData = catchAsyncErrors(async (req, res, next) => {
  const { name, emailAddress, color, numberPlate, model } = req.body;

  const carData = await CarData.create({
    name,
    emailAddress,
    color,
    numberPlate,
    model,
  });
  res.status(201).json({
    carData,
    success: true,
    message: "Submitted Successfully",
  });
});
