const router = require("express").Router();
const certsController = require("../../controllers/certsController");

// Matches with "/api/certs"
router.route("/")
  .get(certsController.findAllDiversCerts)
  .post(certsController.create);

// Matches with "/api/certs/:id"
router
  .route("/:id")
  .get(certsController.findById)
  .put(certsController.update)
  .delete(certsController.remove);

module.exports = router;
