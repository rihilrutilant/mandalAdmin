import React, { useState } from 'react'
import apiconst from '../keys'
import axios from 'axios'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import '../style/AdminLogin.css'

const AdminLogin = () => {

  const naviget = useNavigate()

  // ------------------ Admin Login----------------------
  const [admin_info, setadmin_info] = useState({
    mobile_no: "",
    password: ""
  })

  const submit_admin_data = async (e) => {
    e.preventDefault()

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiconst.admin_login,
      headers: {
        'Content-Type': 'application/json'
      },
      data: admin_info
    };

    axios.request(config)
      .then((response) => {
        const data = response.data;
        if (data.status === 1) {
          const A_token = data.data.auth_token;
          localStorage.setItem("Admin_Token", A_token)
          naviget('/mukhiya_member')
        }
      })
      .catch((error) => {
        alert('Please Enter Valid Data')
      });
  }

  const admin_data = (e) => {
    setadmin_info({ ...admin_info, [e.target.name]: e.target.value })
  }
  // ------------------ Admin Login----------------------


  return (
    <>
      <div id="modal_overlay">
        <div className="cell">
          <div className="modal_main">
            <img src={logo} alt="logo" />
            <div className='login_modal'>
              <h2>LOG IN</h2>
              <form onSubmit={submit_admin_data}>
                <input type="text" name="mobile_no" onChange={admin_data} placeholder="Username" />
                <input type="password" name="password" onChange={admin_data} placeholder="Password" />
                <div className="loginbtn-part">
                  <button className="loginbtn lrBtn" type="submit">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin