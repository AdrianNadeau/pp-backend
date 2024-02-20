if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const sequelize = require("./db");
const ejsMate = require("ejs-mate");

// Initialize Express app
const app = express();
const PORT = 3002;

// Set up EJS as view engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up static files directory
app.use(express.static(path.join(__dirname, "public")));
// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Listen for the port Number
sequelize.authenticate().then(() => {
    console.log('Database connection has been established successfully.');
  
}).then(() => {

    app.listen(PORT, () => {
        console.log(`App is listening on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
// Routes will go here
const companyRoutes = require("./routes/companyRoute"); 
const personRoutes = require("./routes/personRoute");

//Routes usage will go here
app.use(companyRoutes);
app.use(personRoutes);
