import React, { useCallback, useEffect, useRef, useState } from 'react'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import axios from 'axios'
import { apiconst } from '../Globle/keys'
import '../style/Slider.css'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import makeAPIRequest from '../Globle/apiCall'

const Slider = () => {

    const refclose = useRef()

    // ------------ fetch all slider---------------------------------
    const [setsliderimg, setsetsliderimg] = useState()

    const fetchSlider = useCallback(() => {
        makeAPIRequest('get', apiconst.fetch_all_slider_imgs, null, null, null)
            .then((response) => {
                const data = response.data.data;
                setsetsliderimg(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    // ------------ fetch all slider---------------------------------


    // ------------------ Add Slider ------------------------
    const [slider_image, setslider_image] = useState()

    const add_banner = (e) => {
        e.preventDefault()
        const FormData = require('form-data');
        let data = new FormData();
        if (!slider_image) {
            alert("please add the banner")
        } else {
            data.append('image', slider_image);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: apiconst.add_slider,
                headers: {
                    'auth-token': sessionStorage.getItem('Admin_Token')
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    fetchSlider()
                    refclose.current.click()
                })
                .catch((error) => {
                    console.log(error);
                    alert("please add the banner")
                });
        }
    }

    const slider_imgs = (e) => {
        const file = e.target.files[0];
        setslider_image(file)
    }
    // ------------------ Add Slider ------------------------


    // ----------------- Delete Slider --------------------
    const deleteSlider = (id) => {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: apiconst.delete_slider + id,
            headers: {
                'auth-token': sessionStorage.getItem('Admin_Token')
            }
        };

        axios.request(config)
            .then((response) => {
                fetchSlider()
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // ----------------- Delete Slider --------------------

    useEffect(() => {
        fetchSlider()
    }, [fetchSlider])


    return (
        <>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    <div className="ad_slider">
                        <button type="button" className="ad_slider_btn" data-bs-toggle="modal" data-bs-target="#Add_model">
                            Add Banner
                        </button>
                    </div>
                    <div className="img_container">
                        {
                            setsliderimg && setsliderimg.map((item, key) => (
                                <div key={key} className="imgs_container">
                                    <img src={apiconst.getAnyImages + item.slider_photo} alt="slider" className='sub_imgs' />
                                    <div className="overlay"></div>
                                    <div className="button">
                                        <Link to="#" onClick={() => deleteSlider(item.slider_id)}>
                                            <MdDelete />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="Add_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Banner</h1>
                            <button type="button" className="btn-close" ref={refclose} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <input type="file" name="image" id="sliders" required onChange={slider_imgs} accept="image/*" />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" onClick={add_banner} className="ad_slider_btn2">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider