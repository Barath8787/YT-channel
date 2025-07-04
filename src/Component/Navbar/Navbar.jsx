import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/youtube_logo.svg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

function Navbar({ setSidebar }) {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img
          className='menu_icon'
          src={menu_icon}
          alt="menu"
          onClick={() => setSidebar(prev => !prev)}
        />
       <Link to='/'><img className='logo_icon' src={logo} alt="logo" /></Link> 
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='search' />
          <img className="search_icon" src={search_icon} alt="search-icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className='user_icon' />
      </div>
    </nav>
  )
}

export default Navbar
