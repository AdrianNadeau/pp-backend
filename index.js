if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");
const path = require("path");
const sequelize = require("./db");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store); 

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

// Initialize and configure session middleware
const sessionStore = new SequelizeStore({ db: sequelize }); 
app.use(session({
    secret: "your_secret_key", 
    resave: false,
    saveUninitialized: false,
    store: sessionStore, 
    cookie: { secure: false } 
}));

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Initialize flash middleware
app.use(flash());

// Set up locals for flash messages
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Routes will go here
const userRoutes = require("./routes/userRoute"); 
const companyRoutes = require("./routes/companyRoute"); 
const personRoutes = require("./routes/personRoute");


//Routes usage will go here
app.use(userRoutes);
app.use(companyRoutes);
app.use(personRoutes);



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