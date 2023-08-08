import React, { useCallback, useEffect, useRef, useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import makeAPIRequest from '../Globle/apiCall'
import { apiconst } from '../Globle/keys'
import { AiFillDelete } from 'react-icons/ai'

function DataShree() {

    // --------------------- Add dataShree ---------------------
    const refClose = useRef(null)
    const [image, setImage] = useState(null)
    const [datashreeInfo, setDatashreeInfo] = useState({
        name: "",
        village: "",
        dataShreeType: "",
        numberOfsnehMilan: "",
        type: "",
        member: "",
        year: "",
    })
    const datashree = (e) => {
        setDatashreeInfo({ ...datashreeInfo, [e.target.name]: e.target.value })
    }

    const addDataShree = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('name', datashreeInfo.name)
        formData.append('village', datashreeInfo.village)
        formData.append('dataShreeType', datashreeInfo.dataShreeType)
        formData.append('numberOfsnehMilan', datashreeInfo.numberOfsnehMilan)
        formData.append('type', datashreeInfo.type)
        formData.append('member', datashreeInfo.member)
        formData.append('year', datashreeInfo.year)

        makeAPIRequest('post', apiconst.addDatashree, formData, null, null)
            .then((res) => {
                if (res?.data?.dataShreedetail) {
                    refClose.current.click()
                    getData()
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // --------------------- Add dataShree ---------------------


    // --------------------- delete dataShree -----------------------
    const deleteDataShree = (id) => {
        makeAPIRequest('delete', apiconst.deleteDataShree + id, null, null, null)
            .then((res) => {
                if (res?.data?.message) {
                    getData()
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // --------------------- delete dataShree -----------------------

    // ---------------------- get dataShree ----------------------
    const [getDataShresData, setGetDataShresData] = useState([])
    const getData = useCallback(() => {
        makeAPIRequest('get', apiconst.getDataShree, null, null, null)
            .then((res) => {
                setGetDataShresData(res?.data?.dataShreedetail)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [],)
    // ---------------------- get dataShree ----------------------

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    <div className="add-data">
                        <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#dataShree">
                            + Add Data
                        </button>
                    </div>
                    <div className="inner-form-data">
                        <div className="sub-member-data">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Photo</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Village</th>
                                        <th scope="col">DataShree Type</th>
                                        <th scope="col">SnehMilan Number</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Member</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getDataShresData?.map((item, index) => (
                                            <tr key={index} className='tbody-tr'>
                                                <th scope="row"><img src={apiconst.getAnyImages + item.image} alt="myphoto" className='inner-photo' /></th>
                                                <td>{item.name}</td>
                                                <td>{item.village}</td>
                                                <td>{item.dataShreeType}</td>
                                                <td>{item.numberOfsnehMilan}</td>
                                                <td>{item.type}</td>
                                                <td>{item.member}</td>
                                                <td>{item.year}</td>
                                                <td><AiFillDelete onClick={() => deleteDataShree(item.id)} /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}

                    <div className="modal fade" id="dataShree" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add DataShree</h1>
                                    <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form encType='multipart/form-data' onSubmit={addDataShree}>
                                        <input type="text" name='name' className="form-control mt-3" placeholder='Enter Name' onChange={datashree} />
                                        <input type="text" name='village' className="form-control mt-3" placeholder='Enter Mobile' onChange={datashree} />
                                        <input type="text" name='dataShreeType' className="form-control mt-3" placeholder='Enter Village' onChange={datashree} />
                                        <input type="text" name='numberOfsnehMilan' className="form-control mt-3" placeholder='Enter snehmilan number' onChange={datashree} />
                                        <input type="text" name='type' className="form-control mt-3" placeholder='Enter Type' onChange={datashree} />
                                        <input type="text" name='member' className="form-control mt-3" placeholder='Enter Member' onChange={datashree} />
                                        <input type="text" name='year' className="form-control mt-3" placeholder='Enter Year' onChange={datashree} />
                                        <span>Image :- </span>
                                        <input type="file" name='photo' className='mt-3' onChange={(e) => setImage(e.target.files[0])} />
                                        <br />
                                        <button type="submit" className="btn btn-primary btn-md mt-4" style={{ width: "100%" }}>Send</button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}
                </div>
            </div>
        </div>
    )
}

export default DataShree