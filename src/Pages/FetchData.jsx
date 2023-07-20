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
                    <div className='first-line'>
                        <h3>Mukhya Name: Jenish Vekariya</h3>
                        <h3>Id:	MPGM0001</h3>
                    </div>
                    <div className="sub-member-data">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Birth Date</th>
                                    <th scope="col">Village</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tbody-tr' data-toggle="modal" data-target="#exampleModal">
                                    <th scope="row"><img src={require("../assets/photo1.jpeg")} alt="photo" className='inner-photo' /></th>
                                    <td>Rihil Sanghani D.</td>
                                    <td>+1234567890</td>
                                    <td>12/12/1212</td>
                                    <td>Amreli</td>
                                </tr>
                                <tr className='tbody-tr' data-toggle="modal" data-target="#exampleModal">
                                    <th scope="row"><img src={require("../assets/photo2.webp")} alt="photo" className='inner-photo' /></th>
                                    <td>Abc Def D.</td>
                                    <td>+1234567890</td>
                                    <td>12/12/1212</td>
                                    <td>Amreli 2.0</td>
                                </tr>
                                <tr className='tbody-tr' data-toggle="modal" data-target="#exampleModal">
                                    <th scope="row"><img src={require("../assets/photo3.jpeg")} alt="photo" className='inner-photo' /></th>
                                    <td>Mnq Xyz D.</td>
                                    <td>+1234567890</td>
                                    <td>12/12/1212</td>
                                    <td>Amreli 2.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ------------------- Modal --------------------------------- */}

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Jenish Vekariya</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <span>Member Id: 123456</span><br />
                                <span>Mukhiya Member Id: MGL0123</span><br />
                                <span>Member Mobile No: 1234567890</span><br />
                                <span>Member Profile Photo: <img src={require("../assets/photo1.jpeg")} className="inner-photo-modal" alt="" /></span><br />
                                <span>Member Name: Jenish</span><br />
                                <span>Middle Name: Alkeshkumar</span><br />
                                <span>Last Name: Vekariya</span><br />
                                <span>Birth Date: 28/09/2001</span><br />
                                <span>Country Name: India</span><br />
                                <span>Village Name: San Fransico</span><br />
                                <span>City Name: California</span><br />
                                <span>Maternal Village Name: America</span><br />
                                <span>Blood Group: C-</span><br />
                                <span>Cast: General</span><br />
                                <span>Marriage Status: Single</span><br />
                                <span>Education: Master in AI and ML</span><br />
                                <span>Bussiness: Textile Busines</span><br />
                                <span>Social Media Link: none</span><br />
                                <span>Email: bac@gmail.com</span><br />
                                <span>Adress: Xyz, Sarthana</span><br />
                                <span>Business Adress: Abc, Sudama</span><br />
                                <span>is_deleted: flase</span><br />
                                <span>Created Date: 28/01/2023</span><br />
                                <span>Updated Date: 28/03/2023</span><br />
                                <span>Gender: Male</span><br />
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

export default FetchData