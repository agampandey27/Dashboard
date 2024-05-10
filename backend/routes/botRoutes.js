const express = require("express");
const Robot = require("../models/botDocModel.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { robotId, name, type, batteryLevel, status } = req.body;

    const newRobot = new Robot({
      robotId,
      name,
      type,
      batteryLevel,
      status,
    });

    await newRobot.save();

    res
      .status(201)
      .json({ message: "Robot created successfully", robot: newRobot });
  } catch (error) {
    console.error("Error creating robot:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const robots = await Robot.find({});

    return res.status(200).json({
      count: robots.length,
      data: robots,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const robot = await Robot.findById(id);

    if (!robot) {
      return res.status(404).json({ message: "Robot not found" });
    }

    return res.status(200).json(robot);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.status) {
      return res.status(400).send({
        message: "Send the 'status' field to update",
      });
    }

    const result = await Robot.findByIdAndUpdate(id, {
      status: req.body.status,
    });

    if (!result) {
      return res.status(404).json({ message: "Robot Not Found" });
    }

    return res
      .status(200)
      .send({ message: "Robot Status Updated Successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Robot.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Robot Not Found" });
    }

    return res.status(200).send({ message: "Robot Deleted" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
