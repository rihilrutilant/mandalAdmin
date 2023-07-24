import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import "../style/FetchData.css"
import { BASE_URL, apiconst } from '../Globle/keys';
import makeAPIRequest from '../Globle/apiCall';
import { FaTrash } from 'react-icons/fa';

function Event() {
    const [eventData, setEventData] = useState([])
    const [eventImage, setEventImage] = useState(null)
    const [eventPostData, setEventPostData] = useState({
        notes: "", year: "",
    })
    const [eventId, setEventId] = useState('')

    // Fetch Event Data
    useEffect(() => {
        makeAPIRequest('get', apiconst.getEventData, null, null, null)
            .then((response) => {
                setEventData(response.data.event)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // Delete Event Data
    const deleteEventData = (eventId) => {
        makeAPIRequest('delete', apiconst.deleteEventData + eventId, null, null, null)
            .then((response) => {
                alert(response.data.message)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Get Event Data
    const postEventInfo = (event) => {
        setEventPostData({ ...eventPostData, [event.target.name]: event.target.value })
    }

    // Post Event Data
    const postEventData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('notes', eventPostData.notes)
        formData.append('year', eventPostData.year)
        formData.append('event_profile', eventImage)

        makeAPIRequest('post', apiconst.createEventData, formData, null, null)
            .then((response) => {
                alert("Event Record are created successfully")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Get Event Id
    const getEventId = (eventId) => {
        setEventId(eventId)
    }

    // Update Event Profile Photo
    const updateFormData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('event', eventImage)
        formData.append('eventId', eventId)

        makeAPIRequest('post', apiconst.updateEventImage, formData, null, null)
            .then((response) => {
                alert("Event Record are created successfully")
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
                <div className="add-data">
                    <button className='ad_slider_btn' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-event-addData">
                        + Add Data
                    </button>
                </div>
                <div className="inner-form-data">
                    <div className="sub-member-data">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Add Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    eventData.map((items, index) => (
                                        <tr className='tbody-tr' data-toggle="modal" key={index}>
                                            <td scope="row"><img src={`${BASE_URL}/${items.profile_photo}`} alt="photo" className='inner-photo' /></td>
                                            <td className='align-middle'> {items.notes} </td>
                                            <td className='align-middle'> {items.year} </td>
                                            <td className='align-middle'>
                                                <button type="button" className="btn btn-primary btn-md" data-bs-toggle="modal" data-bs-target="#exampleModal-event-updateImage" onClick={() => getEventId(items.event_id)}>Add Image</button>
                                            </td>
                                            <td className='align-middle'><FaTrash className='cursor-pointer1' onClick={() => deleteEventData(items.event_id)} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ------------------- Modal Add Data --------------------------------- */}

                <div className="modal fade" id="exampleModal-event-addData" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Event</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form method="post" encType='multipart/form-data' onSubmit={postEventData}>
                                    <input type="text" className="form-control mt-3" placeholder='Event Notes' name='notes' onChange={postEventInfo} />
                                    <input type="text" className="form-control mt-3 mb-3" placeholder='Event Years' name='year' onChange={postEventInfo} />
                                    <span style={{ fontSize: "18px" }}>Event Profile Image :- </span>
                                    <input type="file" className="form-control-file mt-2" id="exampleFormControlFile1" name='event_profile' onChange={(info) => setEventImage(info.target.files[0])} />
                                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" data-bd-dismiss="modal">Send</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------- Modal Add Data --------------------------------- */}


                {/* ------------------- Modal Update Image --------------------------------- */}

                <div className="modal fade" id="exampleModal-event-updateImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Event Photos</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form method="post" onSubmit={updateFormData}>
                                    <span>Update Profile Photo :- </span><br />
                                    <input type="file" className="form-control-file mt-2" id="exampleFormControlFile1" name='event' onChange={(info) => setEventImage(info.target.files[0])} />
                                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-3" data-bd-dismiss="modal">Send</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------- Modal Update Image --------------------------------- */}
            </div>
        </div>
    )
}

export default Event
