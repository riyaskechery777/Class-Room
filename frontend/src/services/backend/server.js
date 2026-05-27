const classroomRoutes = require("./routes/classroomRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/classrooms", classroomRoutes);
app.use("/api/auth", authRoutes);