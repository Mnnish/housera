import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
import { Home, Menu, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container-fluid max-1400 px-4 px-lg-5">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="nav-logo-icon"><Home size={24} /></div>
          <div>
            <div className="brand-name">Housera</div>
            <div className="brand-tag">Your Home, Our Priority</div>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <Menu className="text-white" size={18} />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-lg-4 gap-2 mt-3 mt-lg-0">
            {/* NavLink automatically gets 'active' class when path matches */}
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about-us">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/properties">Properties</NavLink></li>
            {/* <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li> */}
            <li className="nav-item"><NavLink className="nav-link" to="/contact-us">Contact Us</NavLink></li>
          </ul>

          <a href="tel:9718417331" className="nav-call-btn d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Phone className="text-warning" size={20} /> 9718 417 331
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;