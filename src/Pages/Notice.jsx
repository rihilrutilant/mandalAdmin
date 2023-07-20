
import React from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
function Notice() {
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
                  <th scope="col"></th>
                  <th scope="col"></th>
                  {/* <th scope="col"></th>
                  <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {/* {
                  allmembers?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row" className='all-padding1'>{index + 1}</th>
                      <td>{item?.mukhiya_mobile_no}</td>
                      <td>{item?.member_id}</td>
                      <td>{item?.member_password}</td>
                      <td><Link to='/fetchdata'><AiFillEye className='cursor-pointer1' /></Link></td>
                      <td><BiEditAlt className='cursor-pointer'  /></td>
                      <td><BsWhatsapp className='wp' /></td>
                    </tr>
                  ))
                } */}
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
                <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag'  name='mukhiya_mobile_no' />
                <p className='modal-title-name'>Member ID</p>
                <input type="text"  readOnly className='input-tag' name='member_id' />
                <p className='modal-title-name'>Password</p>
                <input type="password" className='input-tag' name='password' />
              </div>
              <div className="modal-footer">
                <button  type="submit" className="ad_slider_btn2">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- Add Data --------------- */}

        {/* --------- Update Data --------------- */}
        <button type="button" style={{ display: 'none' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal123">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal123" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Update Data</h4>
                <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Mukhiya Mobile No</p>
                <input type="text" className='input-tag' name='mukhiya_mobile_no'  />
                <p className='modal-title-name'>Password</p>
                <input type="text" className='input-tag' name='member_password'  />
              </div>
              <div className="modal-footer">
                <button type="submit" className="ad_slider_btn2">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- Update Data --------------- */}

      </div>
    </>
  )
}

export default Notice