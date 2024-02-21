const express = require("express");
const router = express.Router();
const Priority = require("../models/priority");

// Route to render the form for adding a priority
router.get("/add-priority", async (req, res) => {
    try {
        res.render("./priority/createPriority");
    } catch (error) {
        console.error("Error rendering create priority form:", error);
        res.status(500).send("Error rendering create priority form. Please try again later.");
    }
});

// Create Priority
router.post("/add-priority", async(req, res)=> {
    try {
        const { name, description } = req.body;
        const newPriority = await Priority.create ({ name, description});
        res.redirect("/priorities");
    } catch (error) {
        console.error("Error adding priority:", error);
        res.status(500).send("Error adding priority. Please try again later.");
    }
});

// Retrieve Route
router.get("/priorities", async (req, res) => {
    try {
        const priorities = await Priority.findAll();
        res.render("./priority/retrievePriorities", { priorities });
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).send("Error fetching priorities. Please Try Again");

    }
});

// Update route to fetch the page 
router.get("/update-priority/:id", async (req, res ) => {
    try {
        const priorityId = req.params.id;
        const priority = await Priority.findByPk(priorityId);
        res.render("./priority/updatePriority" ,{ priority });
    } catch (error) {
        console.error("Error fetching update page", error);
        res.status(500).send("Error fetching priority for update. Please try again later.");
    }
})

// Update route to update the priority
router.post("/update-priority/:id", async (req, res ) => {
    const { id } = req.params;
    try {
        const { name, description } = req.body;
        const updatedPriority = await Priority.update ({ name, description}, 
            { where: { id }});
        res.redirect("/priorities");
    } catch (error) {
        console.error("Error updating priority:", error);
        res.status(500).send("Error updating priority. Please try again later.");
    }
});

// Delete Route
router.post("/delete-priority/:id", async (req, res) => {
    const { id } = req.params;
    try {
    await Priority.destroy({
        where: {id}
        });
        res.redirect("/priorities");
    } catch (error) {
        console.error("Error deleting priority:", error);
        res.status(500).send("Error deleting priority. Please try again later.");
    }
})
module.exports = router;