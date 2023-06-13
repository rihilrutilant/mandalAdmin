import React from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import wl from "../assets/whatsapp.png"
import Navbar from '../component/Navbar'

const MukhyaMember = () => {
  return (
    <>
      <div className="flex-section">
        <SideBar />
        <div className="total-rightsde-section">
          <Navbar />
          <table class="table table-striped oneeight">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mukhiya Mobile No</th>
                <th scope="col">Member ID</th>
                <th scope="col">Password</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1234567890</td>
                <td>MPGM0002</td>
                <td>naitik123</td>
                <td><img src={wl} className='wl-logo' alt="" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MukhyaMember