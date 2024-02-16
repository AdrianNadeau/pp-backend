const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const Company = require("../models/company");

// Route to render the form for adding a person
router.get("/add-person", async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.render("addPersonForm", { companies });
    } catch (error) {
        console.error("Error fetching companies:", error);
        res.status(500).send("Error fetching companies. Please try again later.");
    }
});
// Route to handle form submission and add a person
router.post("/add-person", async (req, res) => {
    try {
        const { firstName, lastName, initials, role, companyId } = req.body;
        const newPerson = await Person.create({ firstName, lastName, initials, role, companyId });
        res.send("Person added successfully!");
    } catch (error) {
        console.error("Error adding person:", error);
        res.status(500).send("Error adding person. Please try again later.");
    }
});

module.exports = router;