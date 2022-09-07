const express = require("express");
const {
  getData,
  addData,
  updateData,
  deleteData,
} = require("../controllers/dataController");

const router = express.Router();

router.route("/").get(getData);
router.route("/add").post(addData);
router.route("/:id").put(updateData);
router.route("/:id").delete(deleteData);

module.exports = router;
