import React from 'react'
import Latest from './Latest'
import Article from './Article'
import Sidebar from './Sidebar'
const demo = {
  textAlign: 'center',
  // marginTop:'400px',
  paddingTop: '300px',
  color: 'white',
}
const Home = () => {
  return (
    <>
      
      <div className='image1' >
        <div style={demo}>
          <h1 style={{ textDecoration: 'none', padding: '10px' }}>Kerala:God's Own Country</h1>
          <h3>Tourism / January 24, 2022</h3>
        </div>
      </div>
      <div className='side-img1'></div>
      <div className='side-img2'></div>
            
<Latest/>
<Article/>
<Sidebar/>


        {/* Advertitisement */}
        <div className='add'>
          <h2>Advertisement</h2>
        </div>

      
    </>




  )
}

export default Home