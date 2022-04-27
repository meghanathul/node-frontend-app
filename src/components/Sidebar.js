import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    const [side,setSide]=useState([])

  const getAllData=async()=>{
  
    const res= await axios.post('http://localhost:5000/side')
        console.log(res.data)
        setSide(res.data)
    
  }
 useEffect(()=>{
   getAllData()
 },[])
  return (
    <div>
        
        {/* sidebar */}

        <div className='homeside-bar'>
          <h1 style={{ padding: '20px' }}>Top Post</h1>
          {
            side.map((e) =>
              <>
                <div className='homesidebar1'>
                  <img src={e.img} className='homesidebar-img' alt={e.h2} />
                  <h2 className='homesidebar-h2'>{e.h2}</h2>
                  <h3 className='homesidebar-h3'>{e.h3}/ <span>{e.span}</span></h3>
                </div>
                <hr />
              </>)
          }
        </div>
    </div>
  )
}

export default Sidebar