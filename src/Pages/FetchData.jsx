import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"

const FetchData = () => {
    return (
        <div className="flex-section">
            <SideBar />
            <div className="total-rightsde-section">
                <Navbar />
                <table className="table table-striped oneeight">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Mukhiya Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Image</td>
                            <td>Jenish Vekariya</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FetchData