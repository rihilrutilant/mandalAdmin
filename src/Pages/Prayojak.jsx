import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'
import { AiFillDelete } from 'react-icons/ai'

const Prayojak = () => {
    const [image, setImage] = useState(null)
    const [prayojakInfo, setPrayojakInfo] = useState({
        name: "",
        mobile_no: "",
        village: "",
        role: "",
    })
    const prayojak = (e) => {
        setPrayojakInfo({ ...prayojakInfo, [e.target.name]: e.target.value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('data', prayojakInfo)
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
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Village</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='tbody-tr'>
                                        <th scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo' /></th>
                                        <td>Rihil Sanghani D.</td>
                                        <td>1234567890</td>
                                        <td>Test</td>
                                        <td>prayojak</td>
                                        <td><button type="button" class="btn btn-primary">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}

                    <div class="modal fade" id="addCommity" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Jenish Vekariya</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="" method="post" encType='nultipart/form-data' onSubmit={formSubmit}>
                                        <input type="text" name='name' class="form-control" placeholder='Enter Name' onChange={prayojak} />
                                        <input type="text" name='mobile_no' class="form-control" placeholder='Enter Mobile' onChange={prayojak} />
                                        <input type="text" name='village' class="form-control" placeholder='Enter Village' onChange={prayojak} />
                                        <input type="text" name='role' class="form-control" placeholder='Enter Role' onChange={prayojak} />
                                        <span>Image :- </span>
                                        <input type="file" name='photo' onChange={(e) => setImage(e.target.files[0])} />
                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}
                </div>
            </div>
        </>
    )
}

export default Prayojak