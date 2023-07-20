import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"
import { FaEye } from 'react-icons/fa';

function Business() {
    return (
        <div className="flex-section">
            <SideBar />
            <div className="total-rightsde-section">
                <Navbar />
                <div className="inner-form-data">
                    <div className="sub-member-data">
                        <table class="table table-striped">
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
                                    <td className='align-middle eye-icon'><FaEye /></td>
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
                                    <td className='align-middle eye-icon'><FaEye /></td>
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
                                    <td className='align-middle eye-icon'><FaEye /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business
