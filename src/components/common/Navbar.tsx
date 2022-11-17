import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <ul>
          <li>
            <Link to="/usersignin" className="btns">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
