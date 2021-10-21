
import "./App.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    
        <nav>
          <div className="logo">
            <img src="logo192.png" alt="reactjs" />
          </div>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contactus">Contact us</Link></li>
            <li> <Link to="/services">Services</Link></li>
          </ul>
        </nav>

  );
}

export default NavBar;
