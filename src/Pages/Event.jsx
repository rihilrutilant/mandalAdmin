import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"

function Event() {
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
                                    <th scope="col">Notes</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Add Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tbody-tr' data-toggle="modal">
                                    <td scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo'/></td>
                                    <td className='align-middle'>Test</td>
                                    <td className='align-middle'>1</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal-event">Add Image</button>
                                    </td>
                                </tr>
                                <tr className='tbody-tr' data-toggle="modal">
                                    <td scope="row"><img src={require("../assets/photo2.webp")} alt="photo" className='inner-photo' /></td>
                                    <td className='align-middle'>Hello</td>
                                    <td className='align-middle'>2</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal-event">Add Image</button>
                                    </td>
                                </tr>
                                <tr className='tbody-tr' data-toggle="modal">
                                    <td scope="row"><img src={require("../assets/photo3.jpeg")} alt="photo" className='inner-photo' /></td>
                                    <td className='align-middle'>World</td>
                                    <td className='align-middle'>3</td>
                                    <td className='align-middle'>
                                        <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#exampleModal-event">Add Image</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ------------------- Modal --------------------------------- */}

                <div class="modal fade" id="exampleModal-event" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Event Id: 123456</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <span>Member Profile Photo:</span><br />
                                <input type="file" />
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
    )
}

export default Event
