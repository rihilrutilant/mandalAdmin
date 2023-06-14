import React, { useEffect } from 'react'
import '../style/IntroPage.css'
import logo from '../assets/logo.svg'

const IntroPage = () => {
  const userData = localStorage.getItem("Admin_Token");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userData) {
        window.location.href = "/mukhiya_member"
      } else {
        window.location.href = "/admin_login"
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [userData]);

  return (
    <>
      <div className="loading-container">
        <img src={logo} alt="Logo" className="logo123" />
      </div>
    </>
  )
}

export default IntroPage