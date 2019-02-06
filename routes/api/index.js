const router = require("express").Router()
const projectRoutes = require("./projects");

// Routes
router.use("/projects", projectRoutes);

module.exports = router;