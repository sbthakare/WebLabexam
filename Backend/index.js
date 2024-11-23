const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db.js");
const cors = require("cors");


db();

const Schema = mongoose.Schema;

const studentsschema = new Schema({
  sid: Number,
  name: String,
  addr: String,
  stream: String,
  year: Number
});

const studentModel = mongoose.model("students", studentsschema);

const app = express();
app.use(cors());
app.use(express.json());


app.get("/students", async (req, res) => {
  try {
    const result = await studentModel.find();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});


app.post("/students", async (req, res) => {
  try {
    const record = new studentModel(req.body);
    await record.save();
    res.status(201).send("Record inserted successfully");
  } catch (err) {
    res.send({ message: "Failed to add ", error: err.message });
  }
});


app.put("/students/:sid", async (req, res) => {
  try {
    await studentModel.updateOne({ sid: req.params.sid }, req.body);
    res.send("Record updated");
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(9000);

