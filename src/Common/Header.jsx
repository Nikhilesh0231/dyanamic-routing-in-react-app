import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div  className="header">
      <nav>
      <ul>
        <li> <Link className='link' to = {'/'}>Home </Link> </li>
        <li> <Link className='link' to = {'/about'}>About </Link> </li>
        <li> <Link className='link' to = {'/contactus'}>Contact Us </Link> </li>
        <li> <Link className='link' to = {'/blogs'}>Blogs </Link> </li>
      </ul>
      </nav>
      <div className='br'></div>
    </div>
  )
}
