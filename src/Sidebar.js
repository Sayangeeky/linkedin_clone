import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
    )
 
  }
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://th.bing.com/th/id/OIP.jhe9vv5t3pTH1M-Uq7Y2FQHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
        <Avatar className='sidebar_avatar'/>
        <h2>Sayan Dasgupta</h2>
        <h4>sayan@gmail.com</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,554</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>1450</p>
        </div>
      
      </div>
      <div className='sidebar_button'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('nodejs')}
            {recentItem('express')}
            {recentItem('mongodb')}
            {recentItem('programming')}
        </div>
    </div>
  )
}

export default Sidebar
