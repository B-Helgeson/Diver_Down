const router = require("express").Router();
const diveRoutes = require("./divers");

// available routes
router.use("/divers", diveRoutes);

module.exports = router;
