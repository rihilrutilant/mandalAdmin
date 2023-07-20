import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import { AiFillDelete } from "react-icons/ai"

const Commity = () => {

    const [commityMembers, setCommityMembers] = useState({
        mikhiys_id: "",
        type: ""
    })

    const onChange = (e) => {
        setCommityMembers({ ...commityMembers, [e.target.name]: e.target.value })
    }

    const heandleSubmit = () => {
        console.log(commityMembers);
    }


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
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Photo</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Created Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='tbody-tr'>
                                        <th scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo' /></th>
                                        <td>Rihil Sanghani D.</td>
                                        <td>DataShree</td>
                                        <td>12/12/1212</td>
                                        <td><AiFillDelete /></td>
                                    </tr>
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
                            <h4 className="modal-title" id="exampleModalLabel">Add New Data</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='modal-title-name'>Mukhiya Id</p>
                            <input type="text" onChange={onChange} className='input-tag' name='mikhiys_id' />

                            <p className='modal-title-name'>Type</p>
                            <input type="text" onChange={onChange} className='input-tag' name='type' />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={heandleSubmit} data-bs-dismiss="modal" aria-label="Close" className="ad_slider_btn2">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add commity menmbers */}
        </>
    )
}

export default Commity