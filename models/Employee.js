// models/Employee.js
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// models/Employee.js
const EmployeeSchema = new mongoose.Schema({
  employeeId: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: String,
  designation: String,
  gender: String,
  course: String,
  image: String,
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
