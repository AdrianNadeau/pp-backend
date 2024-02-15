if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

//models will go here

const express = require("express");
var bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");
const flash = require("connect-flash");
const path = require("path");
const ejsMate = require("ejs-mate");
const app = express();
const PORT = 3002;
app.engine("ejs", ejsMate);

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.set(path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use(bodyParser.json());
app.use(express.json());
// Routes will go here

//Routes usage will go here

// Listen for the port Number
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
