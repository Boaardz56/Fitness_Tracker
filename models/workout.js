const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
   //date (type: Date)   
    type: Date,
   //get default but do NOT call the
    default: Date.now
  },
   //exercises (type -> [])
  exercises: [
    // type (type -> string)
    {
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
    },
    // name (type -> string)
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
    },
    // duration (type -> number)
    duration: Number,
    // weight (type -> number)
    weight: Number,
    // reps (type -> number)
    reps: Number,
    // sets (type -> number)
    sets: Number,
    // distance (type -> number)
    distance: Number,
   }
  ] 
},
//look up virtuals properties!
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
