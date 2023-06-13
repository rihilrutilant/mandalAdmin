import React, { useCallback, useEffect, useState } from 'react'
import './component_css/Navbar.css'
import {apiconst} from '../keys.js'
import axios from 'axios'

const Navbar = (props) => {

  const [headLine, setheadLine] = useState()

  const getHeadLine =  useCallback(() => {
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
        const data = response.data.data[0].headline
        setheadLine(data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[])


  if(props.data === true){
    getHeadLine()
  }

  useEffect(() => {
    getHeadLine()
  }, [getHeadLine]);


  return (
    <div className="news-headline">
      <marquee behavior="scroll" direction="left">
        {headLine}
      </marquee>
    </div>
  )
}

export default Navbar