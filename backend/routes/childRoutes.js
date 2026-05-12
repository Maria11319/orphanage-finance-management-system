const express = require("express");
const router = express.Router();
const Child = require("../models/Child");

// GET all children
router.get("/", async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD child
router.post("/", async (req, res) => {
  try {
    const newChild = new Child(req.body);
    const savedChild = await newChild.save();
    res.status(201).json(savedChild);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;