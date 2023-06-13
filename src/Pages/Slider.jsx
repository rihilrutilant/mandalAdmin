import React, { useCallback, useEffect, useState } from 'react'
import SideBar from "../component/SideBar"
import Navbar from '../component/Navbar'
import axios from 'axios'
import { apiconst, BASE_URL } from '../keys'

const Slider = () => {
    const [setsliderimg, setsetsliderimg] = useState()
    const fetchSlider = useCallback(() => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: apiconst.fetch_all_slider_imgs,
            headers: {
                'auth-token': localStorage.getItem('Admin_Token')
            }
        };

        axios.request(config)
            .then((response) => {
                const data = response.data;
                setsetsliderimg(data);
            })
            .catch((error) => {
                console.log(error);
            });
    })

    useEffect(() => {
        fetchSlider()
    }, [fetchSlider])


    return (
        <>
            <div className="flex-section">
                <SideBar />
                <div className="total-rightsde-section">
                    <Navbar />
                    {
                        setsliderimg && setsliderimg.map((item, key) => (
                            <img src={`${BASE_URL}/slider_image/${item.slider_photo}`} alt="slider" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Slider