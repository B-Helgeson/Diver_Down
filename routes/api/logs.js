const router = require("express").Router();
const logsController = require("../../controllers/logsController");

// Matches with "/api/logs"
router.route("/")
  .get(logsController.findRecentLogs)
  .post(logsController.create);

// Matches with "/api/logs/:id"
router.route("/:id")
  .get(logsController.findById)
  .put(logsController.update)
  .delete(logsController.remove);

module.exports = router;
