const express = require("express");
const router = express.Router();

// controllers
const {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
} = require("../controllers/jobsController");
const { route } = require("express/lib/router");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
