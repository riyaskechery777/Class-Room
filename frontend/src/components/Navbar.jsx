import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Hiraa Moral School
      </h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;