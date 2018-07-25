const   router = require("express").Router(),
        diveRoutes = require("./divers"),
        certRoutes = require("./certs"),
        logRoutes = require("./logs");

// available routes
    router.use("/divers", diveRoutes)
    router.use("/certs", certRoutes)
    router.use("/logs", logRoutes)

module.exports = router;
