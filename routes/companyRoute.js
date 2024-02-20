// companyRoute.js

const express = require("express");
const router = express.Router();
const Company = require("../models/company");
const Person = require("../models/person");

//Route to render the company creation form 
router.get("/create-company", (req, res) => {
    res.render("./company/createCompany");
});
// Create Company Route
router.post("/create-company", async (req, res) => {
    try{
        const { company_name, company_description, company_details} = req.body;
        const newCompany = await Company.create({company_name, company_description, company_details });
        res.redirect("/companies");

    } catch (error) {
        console.error("Failed to create company", error);
        res.status(500).send("Error creating a company try again!")
    }        
});
// Retrieve Route
router.get("/companies", async (req, res) => {
    try {
        const companies = await Company.findAll();
        
        res.render("./company/retrieveCompanies", { companies });
    } catch (error) {
        console.error("Error while fetching companies data", error);  
        res.status(500).send("Error while fetching companies");
    }
});

// Route to render company details along with associated persons
router.get("/company/:id", async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findByPk(companyId);
        if (company) {
            const persons = await Person.findAll({ where: { companyId } });
            res.render("./company/companyDetails", { company, persons });
        } else {
            res.status(404).send("Company not found");
        }
    } catch (error) {
        console.error("Error while fetching company details", error);
        res.status(500).send("Error while fetching company details");
    }
});

// Update Route to fetch the pagee
router.get("/update-company/:id", async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findByPk(companyId);
        const companies = await Company.findAll();
        res.render("./company/update-company", {companies , company});
    }   catch (error) {
       console.error("Error while updating company", error);
       res.status(500).send("Error while updating company"); 
    }
});
// Update Company Route
router.post("/update-company/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const {company_name, company_description, company_details} = req.body;
        const updatedCompany = await Company.update(
            { company_name, company_description, company_details },
           { where: { id }
        }
        );
    res.send("company updated successfully!");
    
    } catch (error) {
        console.error("Error while updating company" , error);
        res.status(500).send("Error while updating Company");
        }
});

// Delete Route
router.post("/delete-company/:id", async (req, res)=> {

    const { id } = req.params;
    try {
        await Company.destroy({
            where: { id }
        });
        res.send("Company deleted successfully");
    } catch (error) {
        console.error("Error deleting Company");
        res.status(500).send("Error deleting company.");
    }
});
module.exports = router;