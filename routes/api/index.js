const router = require("express").Router();
const diveRoutes = require("./dives");

// Book routes
router.use("/dives", diveRoutes);

module.exports = router;
