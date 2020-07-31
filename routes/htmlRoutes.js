const router = require("express").Router();
const path = require("path");


//index.html ("/")
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

//exercise.html ("/exercise")
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./exercise.html"));
  });

//stats.html ("/stats")
outer.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./stats.html"));
  });