// import main packages

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");
const path = require("path");
var cors = require("cors");

// create the express app

const app = express();

app.use(cors());

// built in middlewares

app.use(bodyParser.json());
// to support JSON-encoded bodies  api / postman
// can also use express.json()

// to support URL-encoded bodies / from websites
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for serving static files

app.use(express.static(path.join(__dirname, "public")));

// custom middleware

const auth = require("./middleware/Auth");

// connect to local or remote URI database

// var dbConfig = config.get("review_Api.db_config.dev_db_url");

// const dburl = 'mongodb+srv://user:<password>@cluster0.xdrfl.mongodb.net/smart_review_db?retryWrites=true&w=majority'

const locatDB = "mongodb://localhost:27017/review_db";

mongoose
  .connect(locatDB, { useNewUrlParser: true })
  .then(() => console.log("successfully connected to database..."))
  .catch((err) => console.log("mongodb connect error ....", err));

// require routes

// signin and login and Employees
require("./routes/authRoute")(app);

//  Add/remove/update/view employees routes
require("./routes/postRoute")(app);

//  Add/update/view performance reviews routes
require("./routes/reviewRoute")(app);

// main route

app.get("/", (req, res) => {
  // serving the static html,Img files here in public folder

  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// send 404 if not found

app.get("*", function (req, res) {
  res.send("Page / route not Found").status(404);
});

// PORT
const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => console.log(`listeing on  ... ${port}`));
