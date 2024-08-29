import "./Navigation.css";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h2>AM</h2>
          </div>
          <div className="navlink">
            <h5>
              {" "}
              <Link to="/home" className="link-nav">
                {" "}
                Home
              </Link>{" "}
            </h5>
            <h5>
              {" "}
              <Link to="/recommended" className="link-nav">
                {" "}
                Recommended
              </Link>{" "}
            </h5>
            <h5>
              {" "}
              <Link to="/new" className="link-nav">
                {" "}
                New
              </Link>{" "}
            </h5>
            <h5>
              <Link to="/list" className="link-nav">
                {" "}
                List
              </Link>{" "}
            </h5>
          </div>
          <div className="search-nav">
            {" "}
            <input type="text" placeholder="Search" />{" "}
            <FaRegUser className="user-nav" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
