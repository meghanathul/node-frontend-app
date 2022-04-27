import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Article = () => {
    const [article,setArticle]=useState([])

  const getAllData=async()=>{
  
    const res= await axios.post('http://localhost:5000/article')
        console.log(res.data)
        setArticle(res.data)
    
  }
 useEffect(()=>{
   getAllData()
 },[])
  return (
    <div>
        <h1 style={{ marginLeft: '30px', padding: '20px' }}>Article</h1>
      <div className='article'>
        {
          article.map((e) =>
            <>
              <div className='article1'>
                <img src={e.img} alt={e.h2} className='article-img' />
                <h2 className='article-h2'>{e.h2}</h2>
                <p className='article-para'>{e.p}</p>
                <h3 className='article-h3'>{e.h3}/ <span>{e.span}</span></h3>
              </div>
            </>)
        }

      </div>
    </div>
  )
}

export default Article
