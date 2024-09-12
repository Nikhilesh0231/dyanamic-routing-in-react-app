import React from 'react'
import './Blogs.css'
import Header from '../Common/Header'
import { blogs } from '../Data/Blog'
import { Link } from 'react-router-dom'

export default function Blogs() {
  let allblogs = blogs.map((v,i)=>{
    return(
      <div className="blog" key={i}>
      <h3>{v.title} </h3>
      <p>{v.body}</p>
      <button><Link className='btn' to={`/blogs/${v.id}`}>Read More</Link></button>
    </div>
    )
  })
  return (<>
      <Header/>
    <div  className="blog-container">
{allblogs}
    </div>
  </>
  )
}
