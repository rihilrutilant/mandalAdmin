import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Demo = () => {
  useEffect(() => {
  }, []);

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://67.205.176.136:5000/home',
    headers: {}
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });


  return (
    <div>Demo</div>
  )
}

export default Demo