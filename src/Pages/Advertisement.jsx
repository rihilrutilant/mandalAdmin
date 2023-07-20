import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import "../style/FetchData.css"
import axios from 'axios'

function Advertisement() {
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
    const postAdvertisementInfo = (event) => {
        setPostAdvertisement({ ...postAdvertisement, [event.target.name]: event.target.value })
    }

    const formSubmitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('data', postAdvertisement)

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
                                <tr className='tbody-tr'>
                                    <td scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo' /></td>
                                    <td className='align-middle'>textile</td>
                                    <td className='align-middle'>XYZ</td>
                                    <td className='align-middle'>Surat</td>
                                    <td className='align-middle'>1234567890</td>
                                    <td className='align-middle'>xyz@gmail.com</td>
                                    <td className='align-middle'>www.google.com</td>
                                    <td className='align-middle'>96, dimond city</td>
                                    <td className='align-middle'>
                                        <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal">Delete</button>
                                    </td>
                                </tr>
                                <tr className='tbody-tr'>
                                    <td scope="row"><img src={require("../assets/photo2.webp")} alt="photo" className='inner-photo' /></td>
                                    <td className='align-middle'>textile</td>
                                    <td className='align-middle'>ABC</td>
                                    <td className='align-middle'>Surat</td>
                                    <td className='align-middle'>9876543210</td>
                                    <td className='align-middle'>abc@gmail.com</td>
                                    <td className='align-middle'>www.google.com</td>
                                    <td className='align-middle'>100, silver city</td>
                                    <td className='align-middle'>
                                        <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal">Delete</button>
                                    </td>
                                </tr>
                                <tr className='tbody-tr'>
                                    <td scope="row"><img src={require("../assets/photo3.jpeg")} alt="photo" className='inner-photo' /></td>
                                    <td className='align-middle'>textile</td>
                                    <td className='align-middle'>DEF</td>
                                    <td className='align-middle'>Surat</td>
                                    <td className='align-middle'>9876512340</td>
                                    <td className='align-middle'>def@gmail.com</td>
                                    <td className='align-middle'>www.google.com</td>
                                    <td className='align-middle'>102, gold city</td>
                                    <td className='align-middle'>
                                        <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal">Delete</button>
                                    </td>
                                </tr>
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
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" data-dismiss="modal">Send</button>
                                    </div>
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
    )
}

export default Advertisement
