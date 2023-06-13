import React, { useCallback, useEffect, useState, useRef } from 'react'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import {apiconst} from '../keys'
import axios from 'axios'
import '../style/Headline.css'
import { BiEditAlt } from 'react-icons/bi'


const HeadLine = () => {
    const [headLine, setheadLine] = useState()
    const [headId, setheadId] = useState()

    const getHeadLine = useCallback(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: apiconst.fetch_head_line,
            headers: {
                'auth-token': localStorage.getItem('Admin_Token')
            }
        };

        axios.request(config)
            .then((response) => {
                const data = response.data.data[0]
                setheadLine(data.headline)
                setheadId(data.admin_headline_id)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])



    // ----------------edit head line------------------

    const [editHeadline, seteditHeadline] = useState({
        headline: ""
    })

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateLine = (currentRest) => {
        ref.current.click();
        seteditHeadline({
            headline: currentRest
        })

    }

    const updateHeadLine = (e) => {
        e.preventDefault();


        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: apiconst.edit_headline + headId,
            headers: {
                'auth-token': localStorage.getItem('Admin_Token'),
                'Content-Type': 'application/json'
            },
            data: editHeadline
        };

        axios.request(config)
            .then((response) => {
                refClose.current.click()
                getHeadLine()
            })
            .catch((error) => {
                alert("There is something wrong entry")
            });

    }

    const editChange = (e) => {
        seteditHeadline({ ...editHeadline, [e.target.name]: e.target.value })
    }

    // ----------------edit head line------------------
    useEffect(() => {
        getHeadLine()
    }, [getHeadLine]);

    return (
        <>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar data={true}/>
                    <div className="headline">
                        <div className="card edit_box">
                            <div className="card-body">
                                {headLine}
                            </div>
                            <BiEditAlt className='edit_icon' onClick={() => updateLine(headLine)} />
                        </div>
                    </div>
                </div>
            </div>


            {/* my model */}
            <button type="button" style={{ display: 'none' }} ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#headlineModel">
                Launch demo modal
            </button>
            <div className="modal fade" id="headlineModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Headline</h1>
                            <button type="button" className="btn-close" ref={refClose} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={updateHeadLine}>
                            <div className="modal-body edit_txt">
                                <textarea className='txt_edit' value={editHeadline.headline} onChange={editChange} name="headline" rows={7} cols={50} />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* my model */}
        </>
    )
}

export default HeadLine     