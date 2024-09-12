import React from 'react'
import Header from '../Common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/Blog';

export default function Blogdetails() {
  let uselocation = useLocation();
  let currentId = uselocation.pathname.split('/')[2];
  // console.log(currentId)
  let currentData = blogs.filter((v)=>v.id==currentId)[0]
  // console.log(currentData)

  return (
    <div>
      <Header/>
      <h1>{currentData.id}.{currentData.title}</h1>
      <p>{currentData.body}</p>
    </div>
  )
}
