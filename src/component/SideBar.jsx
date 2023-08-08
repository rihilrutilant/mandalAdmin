import React from 'react';
import { NavLink } from "react-router-dom";
import "./component_css/Sidebar.css";
import logo from "../../src/assets/logo2.png"

const SideBar = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };
  return (
    <>
      {/* <div className='body_content'> */}
      <nav className='navbar'>
        <div style={{ display: "block" }}>
          <NavLink className="logo" to="/mukhiya_member">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/mukhiya_member" className="nav-link">
              <span>Mukhya</span>
            </NavLink>
            <NavLink to="/headline" className="nav-link">
              <span>HeadLine</span>
            </NavLink>
            <NavLink to="/slider" className="nav-link">
              <span>Slider</span>
            </NavLink>
            <NavLink to="/notice" className="nav-link">
              <span>Notice</span>
            </NavLink>
            <NavLink to="/commity" className="nav-link">
              <span>Commity</span>
            </NavLink>
            <NavLink to="/event" className="nav-link">
              <span>Events</span>
            </NavLink>
            <NavLink to="/motivation" className="nav-link">
              <span>Motivation</span>
            </NavLink>
            <NavLink to="/news" className="nav-link">
              <span>News</span>
            </NavLink>
            <NavLink to="/business" className="nav-link">
              <span>Business</span>
            </NavLink>
            <NavLink to="/advertisement" className="nav-link">
              <span>Advertisement</span>
            </NavLink>
            <NavLink to="/prayojak" className="nav-link">
              <span>Prayojak</span>
            </NavLink>
            <NavLink to="/datashree" className="nav-link">
              <span>Datashree</span>
            </NavLink>
            <NavLink onClick={logout} className="logout">
              <span>Log Out</span>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  )
}

export default SideBar