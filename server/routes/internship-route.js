const express = require("express");
const router = express.Router();

const {
  getAllInternships,
  getInternshipById,
  getFilterOptions,
} = require("../controller/internship-controller");

router.get("/internships", getAllInternships);
router.get("/internships/:id", getInternshipById);
router.get("/filters", getFilterOptions);

module.exports = router;