import React, { useCallback, useEffect, useRef } from 'react';
import '../style/MukhyaMember.css'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import { useState } from 'react';
import makeAPIRequest from '../Globle/apiCall';
import { apiconst } from '../Globle/keys';
import { AiFillDelete } from 'react-icons/ai';


const Motivation = () => {


    //---------------------- get all motivation ----------------------------
    const [motivation, setMotivation] = useState([])
    const getAllMotivations = useCallback(() => {
        makeAPIRequest("get", apiconst.getAllMotivation, null, null, null)
            .then((response) => {
                setMotivation(response.data.motivationData)
            }).catch(() => {
                alert("There is something wrong entry")
            });
    }, [])

    //---------------------- get all motivation ----------------------------


    // -------------------------- Add motivation ------------------------

    const refClose = useRef(null)
    const [addMotivations, setAddMotivations] = useState({
        motivation_By: "",
        notes: ""
    })
    const [motivatorImg, setMotivatorImg] = useState()

    const onChanges = (e) => {
        setAddMotivations({ ...addMotivations, [e.target.name]: e.target.value })
    }

    const addMotivationsByMotivators = () => {
        const formData = new FormData();
        formData.append("photo", motivatorImg)
        formData.append("notes", addMotivations.notes)
        formData.append("motivation_By", addMotivations.motivation_By)

        makeAPIRequest("post", apiconst.createMotivation, formData, null, null)
            .then((res) => {
                console.log(res.data);
                refClose.current.click()
                getAllMotivations()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // -------------------------- Add motivation ------------------------
    

    //-----------------------remove motivation---------------------

    const deleteMotivation = (id) => {
        makeAPIRequest("delete", apiconst.remove_Motivation + id, null, null)
            .then((res) => {
                getAllMotivations()
            })
            .catch((err) => {
                console.log(err);
            })
    }

   // -------------------------------remove motivation----------------------


    useEffect(() => {
        getAllMotivations();
    }, [getAllMotivations])

    return (
        <>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    <div className="add-data">
                        <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#addMotivation">
                            + Add Data
                        </button>
                    </div>
                    <div className="data_table">
                        <table className="table table-striped oneeight">
                            <thead>
                                <tr>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Note</th>
                                    <th scope="col">MOtivation By</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    motivation?.map((item, index) => (
                                        <tr className='tbody-tr' key={index} data-toggle="modal" data-target="#exampleModal">
                                            <th scope="row"><img src={apiconst.getAnyImages + item.photo} alt="photo" className='inner-photo' /></th>
                                            <td>{item.notes}</td>
                                            <td>{item.motivation_By}</td>
                                            <td>{item.created_date.slice(0, 10)}</td>
                                            <td><AiFillDelete onClick={() => deleteMotivation(item?.motivation_id)} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="modal fade" id="addMotivation" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Add New Data</h4>
                                <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={addMotivationsByMotivators}>
                                <div className="modal-body">
                                    <p className='modal-title-name'>Image</p>
                                    <input required type="file" className='input-tag' onChange={(e) => setMotivatorImg(e.target.files[0])} />
                                    <p className='modal-title-name'>Notes</p>
                                    <input required type="text" className='input-tag' name='notes' onChange={onChanges} />
                                    <p className='modal-title-name'>Motivation_by</p>
                                    <input required type="text" className='input-tag' name='motivation_By' onChange={onChanges} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" onClick={addMotivationsByMotivators} className="ad_slider_btn2">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Motivation;