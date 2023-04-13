import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import logo from './banner.png'
function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div> 
    );
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={logo} alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Sourabh Kr Gupta</h2>
            <h4>sourabh70022@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
             <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,134</p>
             </div>
             <div className="sidebar__stat">
             <p>Views on post</p>
                <p className='sidebar__statNumber'>1,968</p>
             </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
    
            {recentItem("react.js")}
            {recentItem("programming")}
            {recentItem("software")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar