import React, { useCallback, useEffect, useRef, useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import { AiFillDelete } from "react-icons/ai"
import makeAPIRequest from '../Globle/apiCall'
import { apiconst } from '../Globle/keys'

const Commity = () => {

    //----------------------- add members --------------------------
    const refClose = useRef(null)
    const [commityMembers, setCommityMembers] = useState({
        userId: "",
        type: "",
        name: ""
    })

    const onChange = (e) => {
        setCommityMembers({ ...commityMembers, [e.target.name]: e.target.value })
    }

    const heandleSubmit = (e) => {
        e.preventDefault()
        makeAPIRequest('post', apiconst.addCommityMembers, commityMembers, null, null, null)
            .then(() => {
                alert("Member added successfully")
                getAllCommity()
                refClose.current.click()
            }).catch((err) => {
                console.log(err);
            })
    }
    //----------------------- add members --------------------------


    // ------------------------- get all commity memberes ---------------
    const [getData, setGetData] = useState([])
    const getAllCommity = useCallback(() => {
        makeAPIRequest('get', apiconst.getCommityMembers, null, null, null)
            .then((res) => {
                setGetData(res.data.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [],)

    // ------------------------- get all commity memberes ---------------


    // ------------------------- delete momber ---------------------
    const deleteCommityMembers = (id) => {
        makeAPIRequest("delete", apiconst?.deleteCommityMembers + id, null, null, null)
            .then(() => {
                alert("Member deleted successfully")
                getAllCommity()
            }).catch((err) => {
                console.log(err);
            })
    }
    // ------------------------- delete momber ---------------------

    useEffect(() => {
        getAllCommity()
    }, [getAllCommity])


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
                                        <th scope="col">Mukhiya Id</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData?.map((item, index) => (
                                            <tr className='tbody-tr'>
                                                <th scope="row"><img src={apiconst.getAnyImages + item?.mukhiya_profile_photo} alt="photo" className='inner-photo' /></th>
                                                <td>{item?.memberid}</td>
                                                <td>{item?.middle_name + " " + item?.last_name}</td>
                                                <td>{item?.type}</td>
                                                <td><AiFillDelete onClick={() => deleteCommityMembers(item.mukhiyaid)} className='cursor-pointer1' /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {/* Add commity menmbers */}
            <div className="modal fade" id="addCommity" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Commity member</h1>
                            <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={heandleSubmit}>
                            <div className="modal-body">
                                <p className='modal-title-name'>Mukhiya Id</p>
                                <input type="text" onChange={onChange} className='input-tag' name='userId' />

                                <p className='modal-title-name'>Type</p>
                                <input type="text" onChange={onChange} className='input-tag' name='type' />

                                <p className='modal-title-name'>Name</p>
                                <input type="text" onChange={onChange} className='input-tag' name='name' />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" data-bs-dismiss="modal" aria-label="Close" className="ad_slider_btn2">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Add commity menmbers */}
        </>
    )
}

export default Commity