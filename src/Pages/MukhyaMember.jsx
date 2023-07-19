import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import { apiconst } from '../Globle/keys'
import { BiEditAlt } from 'react-icons/bi'
import makeAPIRequest from '../Globle/apiCall'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MukhyaMember = () => {

  //---------------------fetch all members------------------
  const [allmembers, setallmembers] = useState([])

  const [lastId, setlastId] = useState()

  const fetchallmembers = useCallback(() => {
    makeAPIRequest('get', apiconst.fatch_all_members, null, null, null)
      .then(async (response) => {
        let data = response.data.data;
        if (data.length > 0) {
          for (let index = data.length - 1; index < data.length; index++) {
            const element = data[index].member_id;
            const numericPart = parseInt(element.slice(4), 10);
            const newId = `MPGM${(numericPart + 1).toString().padStart(4, '0')}`;
            setlastId(newId);
          }
        }
        else {
          setlastId('MPGM0001')
        }
        setallmembers(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    fetchallmembers();
  }, [fetchallmembers])


  //---------------------fetch all members------------------


  // ---------------- Add member--------------------
  const [allData, setallData] = useState({
    mukhiya_mobile_no: "",
    password: ""
  })

  const refClose = useRef(null);
  const refClose1 = useRef(null);


  const addData = (id) => {
    const { mukhiya_mobile_no, password } = allData
    const member_id = id
    let data = {
      mukhiya_mobile_no,
      member_id,
      password
    }
    makeAPIRequest('post', apiconst.create_mukhya_member, data, null, null)
      .then(function (response) {
        refClose1.current.click()
        fetchallmembers()
      })
      .catch(function (error) {
        alert("Please Enter Valid Data")
      });
  }

  const onChangesholiday = (e) => {
    setallData(() => ({ ...allData, [e.target.name]: e.target.value }))
  }
  // ---------------- Add member--------------------

  // ---------------- Edit member--------------------
  const [editMember, setEditMember] = useState({
    mukhiya_id: "",
    mukhiya_mobile_no: "",
    member_password: ""
  })

  const ref = useRef(null);

  const updateMember = (currentRest) => {
    ref.current.click();
    setEditMember({
      mukhiya_id: currentRest.mukhiya_id,
      mukhiya_mobile_no: currentRest.mukhiya_mobile_no,
      member_password: currentRest.member_password
    })
  }

  const handleSubmit = (e) => {
    updateAllMember(
      editMember.mukhiya_id,
      editMember.mukhiya_mobile_no,
      editMember.member_password,
    )
  }

  const updateAllMember = (id, mukhiya_mobile_no, member_password) => {

    const data = {
      mukhiya_mobile_no: mukhiya_mobile_no,
      member_password: member_password
    }
    makeAPIRequest('put', apiconst.edit_mukhya_member + id, data, null, null)
      .then(() => {
        refClose.current.click()
        fetchallmembers()
      })
      .catch(() => {
        alert("There is something wrong entry")
      });
  }

  const editChange = (e) => {
    setEditMember({ ...editMember, [e.target.name]: e.target.value })
  }

  // ---------------- Edit member--------------------

  return (
    <>
      <div className="flex-section">
        <SideBar />
        <div className="total-rightsde-section">
          <Navbar />
          <div className="add-data">
            <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              + Add Data
            </button>
          </div>
          <div className="data_table">
            <table className="table table-striped oneeight">
              <thead style={{ borderBottom: '1px' }}>
                <tr>
                  <th scope="col" className='all-padding'>Index</th>
                  <th scope="col">Mukhiya Mobile No</th>
                  <th scope="col">Member ID</th>
                  <th scope="col">Password</th>
                  <th scope="col"></th>
                  {/* <th scope="col"></th>
                  <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {
                  allmembers?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row" className='all-padding1'>{index + 1}</th>
                      <td>{item?.mukhiya_mobile_no}</td>
                      <td>{item?.member_id}</td>
                      <td>{item?.member_password}</td>
                      <td><Link to='/fetchdata'><AiFillEye className='cursor-pointer1' /></Link></td>
                      <td><BiEditAlt className='cursor-pointer' onClick={() => updateMember(item)} /></td>
                      <td><BsWhatsapp className='wp' /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* --------- Add Data --------------- */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Add New Data</h4>
                <button type="button" className="btn-close" ref={refClose1} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag' onChange={onChangesholiday} name='mukhiya_mobile_no' />
                <p className='modal-title-name'>Member ID</p>
                <input type="text" value={lastId} readOnly className='input-tag' name='member_id' />
                <p className='modal-title-name'>Password</p>
                <input type="password" className='input-tag' onChange={onChangesholiday} name='password' />
              </div>
              <div className="modal-footer">
                <button onClick={() => addData(lastId)} type="submit" className="ad_slider_btn2">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- Add Data --------------- */}

        {/* --------- Update Data --------------- */}
        <button type="button" style={{ display: 'none' }} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal123">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal123" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Update Data</h4>
                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag' onChange={editChange} name='mukhiya_mobile_no' value={editMember.mukhiya_mobile_no} />
                <p className='modal-title-name'>Password</p>
                <input type="text" className='input-tag' onChange={editChange} name='member_password' value={editMember.member_password} />
              </div>
              <div className="modal-footer">
                <button onClick={() => handleSubmit()} type="submit" className="ad_slider_btn2">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- Update Data --------------- */}

      </div>
    </>
  )
}

export default MukhyaMember