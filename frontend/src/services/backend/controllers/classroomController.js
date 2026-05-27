const Classroom = require("../models/Classroom");

/* Create Classroom */
exports.createClassroom = async (req, res) => {
  try {

    const { className, liveClassLink } = req.body;

    const classroom = await Classroom.create({
      className,
      liveClassLink,
      teacher: req.user.id,
    });

    res.status(201).json({
      message: "Classroom created successfully",
      classroom,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

/* Get All Classrooms */
exports.getClassrooms = async (req, res) => {
  try {

    const classrooms = await Classroom.find()
      .populate("teacher", "name email");

    res.status(200).json(classrooms);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};