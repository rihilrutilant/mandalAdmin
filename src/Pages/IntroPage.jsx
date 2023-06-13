import React, { useEffect } from 'react'
import '../style/IntroPage.css'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'

const IntroPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/admin_login')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="loading-container">
        <img src={logo} alt="Logo" className="logo123" />
      </div>
    </>
  )
}

export default IntroPage