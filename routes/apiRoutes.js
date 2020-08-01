//set require elements
const router = require("express").Router();
const Workout = require("../models/workout");

//GET ("/api/workouts")
//get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    })
});


//GET("/api/workouts/range")
//must get the last or first seven workouts!!
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    })
});

//POST("/api/workouts")
//post will update and CREATE a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});


//PUT{"/api/workouts/:id"}
//put route will create a new workout and UPDATE
//Workout will have already been created after pushing add exercise ==>
//new exercise will be updated
router.put("/api/workouts/:id", (req, res) => {
    console.log("id", req.params.id);
    console.log(req.body);
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
    
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;