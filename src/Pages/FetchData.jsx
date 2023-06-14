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
                <div className="inner-form-data">
                    <label className='title'>Member Id</label>&nbsp;&nbsp;
                    <label className='discription'>Jenish</label>
                    <br />
                    <label className='title'>First Name:</label>&nbsp;&nbsp;
                    <label className='discription'>Jenish</label>
                    <br />
                    <label className='title'>First Name:</label>&nbsp;&nbsp;
                    <label className='discription'>Jenish</label>
                    <br />
                    <label className='title'>First Name:</label>&nbsp;&nbsp;
                    <label className='discription'>Jenish</label>
                    <br />
                    <label className='title'>First Name:</label>&nbsp;&nbsp;
                    <label className='discription'>Jenish</label>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default FetchData