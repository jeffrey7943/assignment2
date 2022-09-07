const express = require("express");
const {
  getData,
  addData,
  updateData,
  deleteData,
  getSingleData,
} = require("../controllers/dataController");

const router = express.Router();

router.route("/").get(getData);
router.route("/add").post(addData);
router.route("/:id").get(getSingleData);
router.route("/:id").put(updateData);
router.route("/:id").delete(deleteData);

module.exports = router;
