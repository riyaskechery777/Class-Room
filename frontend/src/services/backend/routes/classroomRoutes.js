const express = require("express");

const router = express.Router();

const {
  createClassroom,
  getClassrooms,
} = require("../controllers/classroomController");

const authMiddleware = require("../middleware/authMiddleware");

/* Create Classroom */
router.post(
  "/create",
  authMiddleware,
  createClassroom
);

/* Get Classrooms */
router.get(
  "/all",
  authMiddleware,
  getClassrooms
);

module.exports = router;