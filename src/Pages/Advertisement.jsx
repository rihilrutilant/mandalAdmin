import React, { useEffect, useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import "../style/FetchData.css"
import axios from 'axios'
import { FaTrash } from "react-icons/fa"
import makeAPIRequest from '../Globle/apiCall'
import { BASE_URL, apiconst } from '../Globle/keys'

function Advertisement() {
    const [advertisementData, setAdvertisementData] = useState([])
    const [postAdvertisement, setPostAdvertisement] = useState({
        business_name: "",
        owner_name: "",
        city: "",
        mobile_no: "",
        email: "",
        website: "",
        business_address: "",
    })
    const [image, setImage] = useState(null)

    // Fetch Advertisement Data
    useEffect(() => {
        makeAPIRequest('get', apiconst.getAdvertisementData, null, null, null)
            .then((response) => {
                setAdvertisementData(response.data.advertisementData)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // Delete Advertisement Data
    const deleteAddData = (advertisementId) => {
        makeAPIRequest('delete', apiconst.deleteAdvertisementData + advertisementId, null, null, null)
            .then((response) => {
                alert(response.data.message)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Get Advertisement Data
    const postAdvertisementInfo = (event) => {
        setPostAdvertisement({ ...postAdvertisement, [event.target.name]: event.target.value })
    }

    // Post Advertisement Data
    const formSubmitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('business_name', postAdvertisement.business_name)
        formData.append('owner_name', postAdvertisement.owner_name)
        formData.append('city', postAdvertisement.city)
        formData.append('mobile_no', postAdvertisement.mobile_no)
        formData.append('email', postAdvertisement.email)
        formData.append('website', postAdvertisement.website)
        formData.append('business_address', postAdvertisement.business_address)

        makeAPIRequest('post', apiconst.createAdvertisementData, formData, null, null)
            .then((response) => {
                alert(response.data.message)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="flex-section">
            <SideBar />
            <div className="total-rightsde-section">
                <Navbar />
                <div className="add-data">
                    <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-advertisement">
                        + Add Data
                    </button>
                </div>
                <div className="inner-form-data">
                    <div className="sub-member-data">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Business Name</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Business Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    advertisementData.map((items, index) => (
                                        <tr className='tbody-tr' key={index}>
                                            <td scope="row"><img src={`${BASE_URL}/${items.photo}`} alt="photo" className='inner-photo' /></td>
                                            <td className='align-middle'> {items.business_name} </td>
                                            <td className='align-middle'> {items.owner_name} </td>
                                            <td className='align-middle'> {items.city} </td>
                                            <td className='align-middle'> {items.mobile_no} </td>
                                            <td className='align-middle'> {items.email} </td>
                                            <td className='align-middle'> {items.website} </td>
                                            <td className='align-middle'> {items.business_address} </td>
                                            <td className='align-middle'><FaTrash className='cursor-pointer1' onClick={() => deleteAddData(items.advertisement_id)} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ------------------- Modal --------------------------------- */}

                <div className="modal fade" id="exampleModal-advertisement" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Event Id: 123456</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="" method="post" encType='multipart/form-data' onSubmit={formSubmitHandle}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Example file input</label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" name='photo' onChange={(info) => setImage(info.target.files[0])} />
                                        <input type="text" className="form-control mt-3" placeholder='Business Name' name='business_name' onChange={postAdvertisementInfo} />
                                        <input type="text" className="form-control mt-3" placeholder='Owner Name' name='owner_name' onChange={postAdvertisementInfo} />
                                        <input type="text" className="form-control mt-3" placeholder='City' name='city' onChange={postAdvertisementInfo} />
                                        <input type="number" className="form-control mt-3" placeholder='Mobile' name='mobile_no' onChange={postAdvertisementInfo} />
                                        <input type="email" className="form-control mt-3" placeholder='Email' name='email' onChange={postAdvertisementInfo} />
                                        <input type="text" className="form-control mt-3" placeholder='Website' name='website' onChange={postAdvertisementInfo} />
                                        <input type="text" className="form-control mt-3" placeholder='Business Address' name='business_address' onChange={postAdvertisementInfo} />
                                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" data-bd-dismiss="modal">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------- Modal --------------------------------- */}

            </div>
        </div>
    )
}

export default Advertisement
