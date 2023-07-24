import React, { useState, useEffect, useCallback, useRef } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import { AiFillDelete } from 'react-icons/ai'
import makeAPIRequest from '../Globle/apiCall'
import { apiconst } from '../Globle/keys'

const Prayojak = () => {

    // --------------- add prayojk--------------

    const ref = useRef()
    const [image, setImage] = useState(null)
    const [prayojakInfo, setPrayojakInfo] = useState({
        name: "",
        mobile_no: "",
        village: "",
        role: "",
    })
    const prayojak = (e) => {
        setPrayojakInfo({ ...prayojakInfo, [e.target.name]: e.target.value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('name', prayojakInfo.name)
        formData.append('mobile_no', prayojakInfo.mobile_no)
        formData.append('village', prayojakInfo.village)
        formData.append('role', prayojakInfo.role)
        makeAPIRequest("post", apiconst.addprayojak, formData, null, null)
            .then((res) => {
                if (res.data.prayojakData) {
                    getData()
                    ref.current.click()
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }
    // --------------- add prayojk--------------

    // ---------------get all prayojk -------------

    const [prayojakData, setPrayojakData] = useState([])

    const getData = useCallback(() => {
        makeAPIRequest("get", apiconst.getPrayojak, null, null, null)
            .then((res) => {
                setPrayojakData(res.data.prayojakData)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    // ---------------get all prayojk -------------


    // -------------- Delete prayojk ----------
    const deletePrayojk = (id) => {
        makeAPIRequest("delete", apiconst.deletePrayojk + id, null, null, null)
            .then((res) => {
                alert('Deleted successfully')
                getData()
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // -------------- Delete prayojk ----------

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    <div className="add-data">
                        <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#addCommity">
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
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Village</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        prayojakData?.map((item, index) => (
                                            <tr className='tbody-tr'>
                                                <th scope="row"><img src={apiconst.getAnyImages + item?.photo} alt="photo" className='inner-photo' /></th>
                                                <td>{item?.name}</td>
                                                <td>{item?.mobile_no}</td>
                                                <td>{item?.village}</td>
                                                <td>{item?.role}</td>
                                                <td><AiFillDelete onClick={() => deletePrayojk(item?.prayojak_id)} /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}

                    <div className="modal fade" id="addCommity" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Prayojk</h5>
                                    <button type="button" ref={ref} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="" method="post" encType='nultipart/form-data' onSubmit={formSubmit}>
                                        <input className='model_input form-control' type="text" name='name' placeholder='Enter Name' onChange={prayojak} />
                                        <input className='model_input form-control' type="text" name='mobile_no' placeholder='Enter Mobile' onChange={prayojak} />
                                        <input className='model_input form-control' type="text" name='village' placeholder='Enter Village' onChange={prayojak} />
                                        <input className='model_input form-control' type="text" name='role' placeholder='Enter Role' onChange={prayojak} />
                                        <span>Image :- </span>
                                        <input className='model_input' type="file" name='photo' onChange={(e) => setImage(e.target.files[0])} />
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}
                </div>
            </div>
        </>
    )
}

export default Prayojak