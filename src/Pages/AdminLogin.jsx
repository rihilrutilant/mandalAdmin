import React, { useState } from 'react'
import { apiconst } from '../Globle/keys'
import logo from '../assets/logo.svg'
import '../style/AdminLogin.css'
import makeAPIRequest from '../Globle/apiCall'

const AdminLogin = () => {

  const userData = sessionStorage.getItem("Admin_Token");

  if (userData) {
    window.location.href = "/mukhiya_member"
  }
  // ------------------ Admin Login----------------------
  const [admin_info, setadmin_info] = useState({
    mobile_no: "",
    password: ""
  })

  const submit_admin_data = async (e) => {
    e.preventDefault()

    makeAPIRequest('post', apiconst.admin_login, admin_info, null, null)
      .then((response) => {
        const data = response.data;
        if (data.status === 1) {
          sessionStorage.setItem("Admin_Token", data.data.auth_token)
          window.location.href = '/mukhiya_member';
        }
      })
      .catch(() => {
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