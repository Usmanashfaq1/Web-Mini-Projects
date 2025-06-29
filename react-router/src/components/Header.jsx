import { Link } from "react-router-dom";
import Weather from "./Weather";
import Dollar from "./Dollar";
import Clock from "./Clock";

// import '../styles/header.css'
const Header = () => {
  console.log("Header rendered");
  return (
    <header className="bg-pink-500">
      <button className="bg-amber-50 m-4 border-2  p-1">
        <strong>Weaving Factory System</strong>
      </button>

      <Weather />

      <Dollar />
      <Clock />

      <nav>
        <ul className="flex justify-end m-4 items-center list-none gap-8 pr-2.5   ">
          <li className="bg-amber-50  border-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-amber-50  border-2 p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-amber-50  border-2 p-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
