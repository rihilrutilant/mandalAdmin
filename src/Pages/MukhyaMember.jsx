import React, { useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import wl from "../assets/whatsapp.png"
import Navbar from '../component/Navbar'

const MukhyaMember = () => {

  const [allData, setallData] = useState({
    number: "",
    id: "",
    password: ""
  })

  const onChangesholiday = (e) => {
    setallData({ ...allData, [e.target.name]: e.target.value })
    console.log(allData.number);
    console.log(allData.id);
    console.log(allData.password);
  }

  return (
    <>
      <div className="flex-section">
        <SideBar />
        <div className="total-rightsde-section">
          <Navbar />
          <div className="add-data">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              + Add Data
            </button>
          </div>
          <table className="table table-striped oneeight">
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

        {/* --------- Add Data --------------- */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Add New Data</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='number' />
                <p className='modal-title-name'>Member ID</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='id' />
                <p className='modal-title-name'>Password</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='password' />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        {/* --------- Add Data --------------- */}

      </div>
    </>
  )
}

export default MukhyaMember