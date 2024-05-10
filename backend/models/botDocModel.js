const mongoose = require("mongoose");

const robotSchema = mongoose.Schema({
  robotId: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of robotId
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  batteryLevel: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["idle", "active", "charging"], // Restrict status to predefined values
    required: true,
  },
  lastActivity: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Robot = mongoose.model("RobotCollection", robotSchema);
module.exports = Robot;
