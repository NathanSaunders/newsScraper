//dependencies
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let logger = require("morgan");
let cheerio = require("cheerio");
let axios = require("axios");

//initialize Express app
let express = require("express");
let app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(process.cwd() + "/public"));
//Require set up handlebars
let exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//connecting to MongoDB
//mongoose.connect("mongodb://localhost/newsScraper");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/newsScraper";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

let routes = require("./controller/controller.js");
app.use("/", routes);
//Create localhost port
let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});