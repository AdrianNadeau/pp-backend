// companyRoute.js

const express = require("express");
const router = express.Router();
const Company = require("../models/company");

//Route to render the company creation form 
router.get("/company", (req, res) => {
    res.render("./company/createCompany");
});
// Create Company Route
router.post("/create-company", async (req, res) => {
    try{
        const { company_name, company_description, company_details} = req.body;
        const newCompany = await Company.create({company_name, company_description, company_details });
        res.send("Company created successfully!");

    } catch (error) {
        console.error("Failed to create company", error);
        res.status(500).send("Error creating a company try again!")
    }   
        
});

module.exports = router;