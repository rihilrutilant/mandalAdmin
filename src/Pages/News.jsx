
import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import { apiconst } from '../Globle/keys'
import { AiFillDelete } from 'react-icons/ai';
import makeAPIRequest from '../Globle/apiCall'

const News = () => {

  //---------------------fetch all members------------------
  const [news, setNews] = useState([])


  const getALLNews = useCallback(() => {
    makeAPIRequest('get', apiconst.getAllNews, null, null, null)
      .then((response) => {
        console.log("🚀 ~ file: News.jsx:19 ~ .then ~ response:", response.data)
        setNews(response.data.newsData)
      }).catch(() => {
        alert("There is something wrong entry")
      });
  }, [])




  //---------------------fetch all members------------------


  // ---------------------Add News-----------------------
  const refClose = useRef(null)
  const [addNews, setAddNews] = useState({
    news: "",
    title: ""
  })
  const [newsImg, setNewsImg] = useState()

  const onChanges = (e) => {
    setAddNews({ ...addNews, [e.target.name]: e.target.value })
  }
  
  const createNews = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("photo", newsImg)
    formData.append("news", addNews.news)
    formData.append("title", addNews.title)
    
    makeAPIRequest("post", apiconst.createNews, formData, null, null)
    .then((res) => {
        console.log("🚀 ~ file: News.jsx:41 ~ onChanges ~ addNews:", res)
        refClose.current.click()
        getALLNews()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //----------------------------------add News-----------------

  //-----------------------remove motivation---------------------

  const deleteNews = (id) => {
    makeAPIRequest("delete", apiconst.remove_News + id, null, null)
      .then((res) => {
        getALLNews()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // -------------------------------remove motivation----------------------


  useEffect(() => {
    getALLNews();
  }, [getALLNews])




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
                  <th scope="col">Title</th>
                  <th scope="col">News</th>
                  <th scope="col">Images</th>

                </tr>
              </thead>
              <tbody>
                {
                  news?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row" className='all-padding1'>{index + 1}</th>
                      <td>{item?.title}</td>
                      <td>{item?.news}</td>
                      <td><img src={apiconst.getAnyImages + item?.photo} alt="myphoto" className='inner-photo' /></td>
                      <td><AiFillDelete onClick={() => deleteNews(item?.news_id)} /></td>
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
                <h4 className="modal-title" id="exampleModalLabelnews">Add New News</h4>
                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={createNews}>
                <div className="modal-body">
                  <p className='modal-title-name'>Images</p>
                  <input type="file" className='input-tag' name='photo' onChange={(e) => setNewsImg(e.target.files[0])} />
                  <p className='modal-title-name'>Title</p>
                  <input type="text" className='input-tag' name='title' onChange={onChanges} />
                  <p className='modal-title-name'>News</p>
                  <input type="text" className='input-tag' name='news' onChange={onChanges} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="ad_slider_btn2">Save changes</button>
                </div>
              </form>
            </div>

          </div>
        </div >
        {/* --------- Add Data --------------- */}

      </div >
    </>
  )
}

export default News