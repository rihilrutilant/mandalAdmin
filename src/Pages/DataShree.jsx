import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import Navbar from '../component/Navbar'

function DataShree() {
    const [image, setImage] = useState(null)
    const [datashreeInfo, setDatashreeInfo] = useState({
        name: "",
        village: "",
        dataShreeType: "",
        numberOfsnehMilan: "",
        type: "",
        member: "",
        year: "",
    })
    const datashree = (e) => {
        setDatashreeInfo({ ...datashreeInfo, [e.target.name]: e.target.value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', image)
        formData.append('data', datashreeInfo)
    }
    return (
        <div>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    <div className="add-data">
                        <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#dataShree">
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
                                        <th scope="col">Village</th>
                                        <th scope="col">DataShree Type</th>
                                        <th scope="col">SnehMilan Number</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Member</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='tbody-tr'>
                                        <th scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo' /></th>
                                        <td>goyani avi dilipBhai</td>
                                        <td>visnagar</td>
                                        <td>comunity center</td>
                                        <td>6th snehmilan</td>
                                        <td>kayami</td>
                                        <td>shree dilipBhai, test, test2</td>
                                        <td>2023</td>
                                        <td><button type="button" class="btn btn-primary">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ------------------- Modal --------------------------------- */}

                    <div class="modal fade" id="dataShree" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <input type="text" name='name' class="form-control mt-3" placeholder='Enter Name' onChange={datashree} />
                                        <input type="text" name='village' class="form-control mt-3" placeholder='Enter Mobile' onChange={datashree} />
                                        <input type="text" name='dataShreeType' class="form-control mt-3" placeholder='Enter Village' onChange={datashree} />
                                        <input type="text" name='numberOfsnehMilan' class="form-control mt-3" placeholder='Enter Role' onChange={datashree} />
                                        <input type="text" name='type' class="form-control mt-3" placeholder='Enter Type' onChange={datashree} />
                                        <input type="text" name='member' class="form-control mt-3" placeholder='Enter Member' onChange={datashree} />
                                        <input type="text" name='year' class="form-control mt-3" placeholder='Enter Year' onChange={datashree} />
                                        <span>Image :- </span>
                                        <input type="file" name='photo' className='mt-3' onChange={(e) => setImage(e.target.files[0])} />
                                        <br />
                                        <button type="submit" class="btn btn-primary btn-md mt-4" style={{width:"100%"}}>Send</button>
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
        </div>
    )
}

export default DataShree