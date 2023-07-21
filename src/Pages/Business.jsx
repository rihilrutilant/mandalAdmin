import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"
import { FaTrash } from 'react-icons/fa';
import { BASE_URL, apiconst } from '../Globle/keys';
import makeAPIRequest from '../Globle/apiCall';

function Business() {
    const [businessData, setBusinessData] = useState([])

    // Fetch Business Data
    useEffect(() => {
        makeAPIRequest('get', apiconst.getBusinessData, null, null, null)
            .then((response) => {
                setBusinessData(response.data.businessData)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // Delete Business Data
    const deleteBusinessData = (businessId) => {
        makeAPIRequest('delete', apiconst.deleteBusinessData + businessId, null, null, null)
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
                                    businessData.map((items, index) => (
                                        <tr className='tbody-tr' key={index}>
                                            <td scope="row"><img src={`${BASE_URL}/${items.photo}`} alt="photo" className='inner-photo' /></td>
                                            <td className='align-middle'> {items.business_name} </td>
                                            <td className='align-middle'> {items.owner_name} </td>
                                            <td className='align-middle'> {items.city} </td>
                                            <td className='align-middle'> {items.mobile_no} </td>
                                            <td className='align-middle'> {items.email} </td>
                                            <td className='align-middle'> {items.website} </td>
                                            <td className='align-middle'> {items.business_address} </td>
                                            <td className='align-middle eye-icon'><FaTrash className='cursor-pointer1' onClick={() => deleteBusinessData(items.business_id)} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business
