
import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import { apiconst } from '../Globle/keys'
import { BiEditAlt } from 'react-icons/bi'
import makeAPIRequest from '../Globle/apiCall'

const News = () => {

  //---------------------fetch all members------------------
  const [news, setnews] = useState([])

  const [lastId, setlastId] = useState()

  const fetchnews = useCallback(() => {
    makeAPIRequest('get', apiconst.fatch_all_members, null, null, null)
      .then(async (response) => {
        let data = response.data.data;
        setnews(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    fetchnews();
  }, [fetchnews])


  //---------------------fetch all members------------------


  // ---------------- Add member--------------------
  const [allData, setallData] = useState({
    photo: "",
    news: ""
  })

  const refClose = useRef(null);
  const refClose1 = useRef(null);


  const addData = (id) => {
    const { photo, news } = allData
    const member_id = id
    let data = {
      photo,
      news,
    }
    makeAPIRequest('post', apiconst.create_mukhya_member, data, null, null)
      .then(function (response) {
        refClose1.current.click()
        fetchnews()
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
    photo: "",
    news: "",
  })

  const ref = useRef(null);

  const updateMember = (currentRest) => {
    ref.current.click();
    setEditMember({
      photo: currentRest.photo,
      news: currentRest.news,
    })
  }

  const handleSubmit = (e) => {
    updateAllMember(
      editMember.photo,
      editMember.news,
    )
  }

  const updateAllMember = (photo,news) => {

    const data = {
      photo:photo,
      news:news,
    }
    makeAPIRequest('put', apiconst.edit_mukhya_member , data, null, null)
      .then(() => {
        refClose.current.click()
        fetchnews()
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
                  <th scope="col">Images</th>
                  <th scope="col">News</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  {/* <th scope="col"></th>
                  <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {
                  news?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row" className='all-padding1'>{index + 1}</th>
                      <td>{item?.mukhiya_mobile_no}</td>
                      <td>{item?.member_id}</td>
                      <td>{item?.member_password}</td>
                      <td><BiEditAlt className='cursor-pointer' onClick={() => updateMember(item)} /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* --------- Add Data --------------- */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabelnews" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabelnews">Add New Data</h4>
                <button type="button" className="btn-close" ref={refClose1} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>Images</p>
                <input type="file" className='input-tag' onChange={onChangesholiday} name='photo' />
                <p className='modal-title-name'>News</p>
                <input type="text" value={lastId} readOnly className='input-tag' name='news' />
              </div>
              <div className="modal-footer">
                <button onClick={() => addData(lastId)} type="submit" className="ad_slider_btn2">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- Add Data --------------- */}

        {/* --------- Update Data --------------- */}
        <button type="button" style={{ display: 'none' }} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalnews">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModalnews" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Update Data</h4>
                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className='modal-title-name'>images</p>
                <input type="text" className='input-tag' onChange={editChange} name='photo' value={editMember.mukhiya_mobile_no} />
                <p className='modal-title-name'>News</p>
                <input type="text" className='input-tag' onChange={editChange} name='news' value={editMember.member_password} />
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

export default News