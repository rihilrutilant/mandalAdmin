import React from 'react';
import { FaThLarge, FaChalkboardTeacher } from 'react-icons/fa';
import { RiFilePaperFill } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { TfiDropboxAlt } from 'react-icons/tfi'
import { TbBeach } from 'react-icons/tb'
import { VscTable } from 'react-icons/vsc'
import { ImBooks } from 'react-icons/im'
import { SiGoogleclassroom } from "react-icons/si"
import { BsPersonLinesFill, BsCreditCard2BackFill } from 'react-icons/bs'
import { IoIosPaper } from 'react-icons/io'
import { MdOutlineExitToApp } from 'react-icons/md'
import { NavLink } from "react-router-dom";
import "./component_css/Sidebar.css";
import logo from "../../src/assets/logo2.png"

const ICON_SIZE = 20;

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
              <BsPersonLinesFill size={ICON_SIZE} />
              <span>Mukhya</span>
            </NavLink>
            <NavLink to="/headline" className="nav-link">
              <IoIosPaper size={ICON_SIZE} />
              <span>HeadLine</span>
            </NavLink>
            <NavLink to="/slider" className="nav-link">
              <BsCreditCard2BackFill size={ICON_SIZE} />
              <span>Slider</span>
            </NavLink>
            <NavLink to="/noties" className="nav-link">
              <RiFilePaperFill size={ICON_SIZE} />
              <span>Notice</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <FaChalkboardTeacher size={ICON_SIZE} />
              <span>Commity</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <SlCalender size={ICON_SIZE} />
              <span>Events</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <TfiDropboxAlt size={ICON_SIZE} />
              <span>Motivation</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <i class="fa-solid fa-newspaper"></i>
              <span>News</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <VscTable size={ICON_SIZE} />
              <span>Business</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <ImBooks size={ICON_SIZE} />
              <span>Advertisement</span>
            </NavLink>
            <NavLink to="/demo" className="nav-link">
              <SiGoogleclassroom size={ICON_SIZE} />
              <span>Prayojak</span>
            </NavLink>
            <NavLink onClick={logout} className="logout">
              <MdOutlineExitToApp size={ICON_SIZE} />
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