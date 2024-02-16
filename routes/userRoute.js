// userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Route to render the user creation form
router.get("/user", (req, res) => {
    res.render("userForm");
});

// Route to handle form submission and create a new user
router.post("/create", async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const newUser = await User.create({ firstName, lastName, email });
        res.send("User created successfully!");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user. Please try again later.");
    }
});
// Route to fetch users and render them in a view
router.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.render("userList", { users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users. Please try again later.");
    }
});
module.exports = router;
