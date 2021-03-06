const router = require("express").Router();
const path = require("path");


//index.html ("/")
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//exercise.html ("/exercise")
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

//stats.html ("/stats")
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = router;