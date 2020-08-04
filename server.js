const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true 
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


//mongoose
mongoose.Promise = global.Promise;
//connect to mongo db
mongoose.connect(
  process.env.MONGOD_URI ||
  "mongodb://root:root123@ds139781.mlab.com:39781/heroku_b4jxfkcg",
  {
    useMongoClient: true
  }
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});