const express = require("express");
const {
  getData,
  addData,
  updateData,
} = require("../controllers/dataController");

const router = express.Router();

router.route("/").get(getData);
router.route("/add").post(addData);
router.route("/:id").put(updateData);

module.exports = router;
