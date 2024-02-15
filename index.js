if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

//models will go here

const express = require("express");
var bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");
const flash = require("connect-flash");
const app = express();
const PORT = 3002;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// Routes will go here

//Routes usage will go here

// Listen for the port Number
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
