
const express = require("express");
const Report = require("../models/Report");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  res.json(await Report.find());
});

module.exports = router;
