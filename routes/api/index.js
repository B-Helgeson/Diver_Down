const router = require("express").Router();
const diveRoutes = require("./dives");

// Dive routes
router.use("/dives", diveRoutes);

module.exports = router;
