import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import wl from "../assets/whatsapp.png"
import Navbar from '../component/Navbar'
import axios from 'axios'
import apiconst from '../keys'

const MukhyaMember = () => {

  //---------------------fetch all members------------------

  const [allmembers, setallmembers] = useState()

  const fetchallmembers = useCallback(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiconst.fatch_all_members,
      headers: {
        'auth-token': localStorage.getItem('Admin_Token')
      }
    };

    axios.request(config)
      .then((response) => {
        const data = response.data;
        setallmembers(data)
      })
      .catch((error) => {
        console.log(error);
      });
  })

  useEffect(() => {
    fetchallmembers();
  }, [fetchallmembers])


  //---------------------fetch all members------------------


  // ---------------- Add member--------------------
  const [allData, setallData] = useState({
    mukhiya_mobile_no: "",
    member_id: "",
    password: ""
  })
  const refClose = useRef(null);
  const addData = (e) => {
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiconst.create_mukhya_member,
      headers: {
        'auth-token': localStorage.getItem('Admin_Token'),
        'Content-Type': 'application/json'
      },
      data: allData
    };
    axios(config)
      .then(function (response) {
        refClose.current.click()
      })
      .catch(function (error) {
        alert("Please Enter Valid Data")
      });
  }
  const onChangesholiday = (e) => {
    setallData({ ...allData, [e.target.name]: e.target.value })
  }
  // ---------------- Add member--------------------

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
                <th scope="col">Index</th>
                <th scope="col">Mukhiya Mobile No</th>
                <th scope="col">Member ID</th>
                <th scope="col">Password</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                allmembers && allmembers.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.mukhiya_id}</th>
                    <td>{item.mukhiya_mobile_no}</td>
                    <td>{item.member_id}</td>
                    <td>{item.member_password}</td>
                    <td><img src={wl} className='wl-logo' alt="" /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        {/* --------- Add Data --------------- */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Add New Data</h4>
                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='mukhiya_mobile_no' />
                <p className='modal-title-name'>Member ID</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='member_id' />
                <p className='modal-title-name'>Password</p>
                <input type="password" className='input-tag' onChange={onChangesholiday} name='password' />
              </div>
              <div className="modal-footer">
                <button onClick={addData} type="submit" className="btn btn-primary">Save changes</button>
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