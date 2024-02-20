const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const Company = require("../models/company");

// Route to render the form for adding a person
router.get("/add-person", async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.render("./persons/createPerson", { companies });
    } catch (error) {
        console.error("Error fetching companies:", error);
        res.status(500).send("Error fetching companies. Please try again later.");
    }
});
// Create Route
router.post("/add-person", async (req, res) => {
    try {
        const { firstName, lastName, initials, role, companyId } = req.body;
        const newPerson = await Person.create({ firstName, lastName, initials, role, companyId });
        res.redirect('/persons');

    } catch (error) {
        console.error("Error adding person:", error);
        res.status(500).send("Error adding person. Please try again later.");
    }
});

// Retreive Route
router.get("/persons", async (req, res) => {

    try {
        const persons = await Person.findAll({ include: Company });
        res.render("./persons/retrievePersons", { persons });
    } catch (error) {
        console.error("Error while fetching perons", error);
        res.status(500).send("Error fetching persons");
    }
});
// Update Route to fetch the page
router.get("/update-person/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await Person.findByPk(personId);
        const companies = await Company.findAll();
        res.render("./persons/updatePerson", { person, companies });
    } catch (error) {
        console.error("Error fetching person for update:", error);
        res.status(500).send("Error fetching person for update. Please try again later.");
    }
});

// Update Route
router.post("/update-person/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { firstName, lastName, initials, role, companyId } = req.body;
        const updatedPerson = await Person.update({ firstName, lastName, initials, role, companyId }, {
            where: { id }
        });
        res.send("Person updated successfully!");

    } catch (error) {
        console.error("Error updating person:", error);
        res.status(500).send("Error updating person. Please try again later.");
    }
});

// Delete Route
router.post("/delete-person/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Person.destroy({
            where: { id }
        });
        res.send("Person deleted successfully!");

    } catch (error) {
        console.error("Error deleting person:", error);
        res.status(500).send("Error deleting person. Please try again later.");
    }
});

module.exports = router;