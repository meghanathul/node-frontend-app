import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Latest = () => {
    const [latest,setLatest]=useState([])

  const getAllData=async()=>{
  
    const res= await axios.post('http://localhost:5000/latest')
        console.log(res.data)
        setLatest(res.data)
    
  }
 useEffect(()=>{
   getAllData()
 },[])
  return (
    <div>
        {/* The latest blog */}

        <h1 style={{ marginLeft: '30px', padding: '20px' }}>The Latest</h1>
      <div className='top-post'>
        {
          latest.map((e) =>
            <>
              <div className='top'>
                <img src={e.img} className='top1' alt={e.h2} />
                <hr />
                <h2 >{e.h2}</h2>
                <p className='top-para'>{e.p}</p>
                <h3>{e.h3} / <span>{e.span}</span></h3>

              </div>
            </>)
        }
      </div>
    </div>
  )
}

export default Latest