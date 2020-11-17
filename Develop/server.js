const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");

const PORT = 8080;

const app = express();



app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log("Listening on port:8080. Please visit http://localhost:%s/ in your browser.", PORT, PORT);
});