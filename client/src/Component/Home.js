import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Home() {
    const url = 'http://localhost:8001/todos'
    const[data, setData] = useState([])
    const fetchInfo = () =>{
        return axios.get(url).then((response)=> setData(response.data))
    }
    useEffect(()=>{
        fetchInfo();
    },[])
  return (
    <div>
        Test
    </div>
  )
}
