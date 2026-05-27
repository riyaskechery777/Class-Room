import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-green-900 text-white p-6">

      <h2 className="text-3xl font-bold mb-10">
        Hiraa School
      </h2>

      <ul className="space-y-5">

        <li>
          <Link
            to="/admin"
            className="hover:text-green-300"
          >
            Admin Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/teacher"
            className="hover:text-green-300"
          >
            Teacher Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/student"
            className="hover:text-green-300"
          >
            Student Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/courses"
            className="hover:text-green-300"
          >
            Courses
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-green-300"
          >
            Contact
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;