const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
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
    duration: {
        type: Number
    },
    // weight (type -> number)
    weight: {
        type: Number
    },
    // reps (type -> number)
    reps: {
        type: Number
    },
    // sets (type -> number)
    sets: {
        type: Number
    },
    // distance (type -> number)
    distance: {
        type: Number
    }
   }
  ] 
},
//look up virtuals properties!
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
