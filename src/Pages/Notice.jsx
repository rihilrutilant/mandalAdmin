
import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import { apiconst } from '../Globle/keys'
import { BiEditAlt } from 'react-icons/bi'
import makeAPIRequest from '../Globle/apiCall'
import { AiFillDelete } from 'react-icons/ai'


const Notice = () => {

  const refClose = useRef(null)

  // ----------------------- get Notices --------------------
  const [getNotices, setGetNotices] = useState([])
  const getData = useCallback(() => {
    makeAPIRequest("get", apiconst.getNotices, null, null)
      .then((res) => {
        setGetNotices(res?.data?.suchnadetail)
      })
      .catch((err) => {
        console.log('error', err);
      })
  }, [],)

  // ----------------------- get Notices --------------------

  // ----------------------- delete notice -------------------
  const deleteNotice = (id) => {
    makeAPIRequest('delete', apiconst.deleteNotices + id, null, null, null)
      .then((res) => {
        if (res?.data?.message) {
          getData()
        }
      })
      .catch((err) => {
        console.log('error', err);
      })
  }
  // ----------------------- delete notice -------------------


  // ---------------------- Add notice -----------------------
  const [noticeData, setNoticeData] = useState({
    notes: "",
    year: ""
  })

  const [Image, setImage] = useState()

  const noticeChange = (e) => {
    setNoticeData({ ...noticeData, [e.target.name]: e.target.value })
  }

  const addNotice = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("photo", Image)
    formData.append("notes", noticeData.notes)
    formData.append("year", noticeData.year)

    makeAPIRequest('post', apiconst.addNotice, formData, null, null)
      .then((res) => {
        if (res?.data?.suchnadetail) {
          refClose.current.click()
          getData()
        }
      })
      .catch((err) => {
        console.log('error', err);
      })
  }
  // ---------------------- Add notice -----------------------

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <div>
        <div className="flex-section">
          <SideBar />
          <div className="total-rightsde-section">
            <Navbar />
            <div className="add-data">
              <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#noticeModel">
                + Add Data
              </button>
            </div>
            <div className="inner-form-data">
              <div className="sub-member-data">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Photo</th>
                      <th scope="col">notes</th>
                      <th scope="col">year</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getNotices?.map((item, index) => (
                        <tr key={index} className='tbody-tr'>
                          <th scope="row"><img src={apiconst.getAnyImages + item.photo} alt="photo" className='inner-photo' /></th>
                          <td>{item.notes}</td>
                          <td>{item.year}</td>
                          <td><AiFillDelete onClick={() => deleteNotice(item.suchna_id)} /></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

            {/* ------------------- Modal --------------------------------- */}

            <div className="modal fade" id="noticeModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form encType='multipart/form-data' onSubmit={addNotice}>
                      <input type="text" name='notes' className="form-control mt-3" placeholder='Enter Name' onChange={noticeChange} />
                      <input type="text" name='year' className="form-control mt-3" placeholder='Enter Year' onChange={noticeChange} />
                      <span>Image :- </span>
                      <input type="file" name='photo' className='mt-3' onChange={(e) => setImage(e.target.files[0])} />
                      <br />
                      <button type="submit" className="btn btn-primary btn-md mt-4" style={{ width: "100%" }}>Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------- Modal --------------------------------- */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notice