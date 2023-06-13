import React from 'react'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'

const Demo = () => {
  return (
    <>
      <div className="flex-section">
        <SideBar />
        <div className="total-rightsde-section">
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Demo