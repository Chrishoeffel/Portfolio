import React, {useState } from 'react';
import './Navbar.css';

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">Chris Ladd</div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className= "fas fa-bars bars"></i>
      </nav>
    </div>
  )
}
export default NavBar;