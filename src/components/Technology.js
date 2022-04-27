import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Technology = () => {
  const [data,setData]=useState([])

  const getAllData=async()=>{
  
    const res= await axios.post('http://localhost:5000/technology')
        console.log(res.data)
        setData(res.data)
    
  }
 useEffect(()=>{
   getAllData()
 },[])
  return (
    <>
          <h1 style={{ marginLeft: '30px', padding: '20px' }}>Technology</h1>
      <div className='tourism'>
        {
          data.map((e) =>
            <>
              <div className='tourism1'>
                <img src={e.img} alt={e.h2} className='tourism-img' />
                <h2 className='tourism-h2'>{e.h2}</h2>
                <p className='article-para' style={{ marginLeft: '380px', padding: '10px' }}>{e.p}</p>
                <h3 className='tourism-h3'>{e.h3}/ <span>{e.span}</span></h3>
              </div>

            </>)
        }
        {/* sidebar */}
        <div className='side-bar'>
          <h1 style={{ padding: '20px' }}>Top Post</h1>
          {
            data.map((e) =>
              <>
                <div className='sidebar1'>
                  <img src={e.img} alt={e.h2} className='sidebar-img' />
                  <h2 className='sidebar-h2'>{e.h2}</h2>
                  <h3 className='sidebar-h3'>{e.h3}/ <span>{e.span}</span></h3>
                </div>
                <hr />
              </>)
          }
        </div>


        {/* Advertitisement */}
        <div className='add'>
          <h2>Advertisement</h2>
        </div>
      </div>
      
    </>
  )
}

export default Technology