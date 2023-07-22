import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"
import makeAPIRequest from '../Globle/apiCall'
import { apiconst } from '../Globle/keys'

const FetchData = () => {
    const mukhiyaId = sessionStorage.getItem("mukiyaId")
    const Id = sessionStorage.getItem("Id")

    // ----------------------- get members ----------------------------
    const [getDataOFMembers, setGetDataOFMembers] = useState([])
    const getAllMembers = useCallback(() => {
        makeAPIRequest('get', apiconst.getMembersOfMukiya + 1, null, null, null)
            .then((res) => {
                setGetDataOFMembers(res?.data?.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [mukhiyaId],)

    // ----------------------- get members ----------------------------
    const [modelData, setModelData] = useState()
    const dataOfModel = (addData) => {
        setModelData(addData)
    }
    useEffect(() => {
        getAllMembers()
    }, [getAllMembers])



    return (
        <div className="flex-section">
            <SideBar />
            <div className="total-rightsde-section">
                <Navbar />
                <div className="inner-form-data">
                    <div className='first-line'>
                        {/* <h3>Mukhya Name: Jenish Vekariya</h3> */}
                        <h3>Id:	{mukhiyaId}</h3>
                    </div>
                    <div className="sub-member-data">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Birth Date</th>
                                    <th scope="col">Village</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getDataOFMembers?.map((item, index) => (
                                        <tr key={index} className='tbody-tr' onClick={() => dataOfModel(item)} data-toggle="modal" data-target="#myDataModel">
                                            <th scope="row"><img src={apiconst.getAnyImages + item?.member_profile_photo} alt="photo" className='inner-photo' /></th>
                                            <td>{item?.member_name}</td>
                                            <td>{item?.member_mobile_no}</td>
                                            <td>{new Date(item?.birth_date).toISOString().split('T')[0]}</td>
                                            <td>{item?.village_name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ------------------- Modal --------------------------------- */}

                <div className="modal fade" id="myDataModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Jenish Vekariya</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Member Profile Photo</th>
                                            <td><img src={apiconst?.getAnyImages + modelData?.member_profile_photo} className="inner-photo-modal" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Member Id</th>
                                            <td>{modelData?.member_id}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mukhiya Member Id</th>
                                            <td>{modelData?.mukhiya_member_id}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Member Mobile No</th>
                                            <td>{modelData?.member_mobile_no}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Member Name</th>
                                            <td>{modelData?.member_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Middle Name</th>
                                            <td>{modelData?.middle_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Last Name</th>
                                            <td>{modelData?.last_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Birth Date</th>
                                            <td>{modelData?.birth_date}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Country Name</th>
                                            <td>{modelData?.country_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">City Name</th>
                                            <td>{modelData?.city_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Village Name</th>
                                            <td>{modelData?.village_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Maternal Village Name</th>
                                            <td>{modelData?.maternal_village_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Blood Group</th>
                                            <td>{modelData?.blood_group}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Cast</th>
                                            <td>{modelData?.cast}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Marriage Status</th>
                                            <td>{modelData?.marriage_status}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Education</th>
                                            <td>{modelData?.education}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bussiness</th>
                                            <td>{modelData?.bussiness}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Social Media Link</th>
                                            <td>{modelData?.social_media_link}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>{modelData?.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Adress</th>
                                            <td>{modelData?.adress}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Business Adress</th>
                                            <td>{modelData?.business_adress}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">is_deleted</th>
                                            <td>{modelData?.is_deleted}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td>{modelData?.gender}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
    )
}

export default FetchData