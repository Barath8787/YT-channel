import React from 'react'
import './Videos.css'
import Playvideo from '../../Component/Playvideo/Playvideo'
import Recommended from '../../Component/Recommended/Recommended'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
function Videos() {
  const{videoId,categoryId}=useParams() // useParams() reads values from the URL .it a router hook
  console.log("Video ID:", videoId);
  console.log("Category ID:", categoryId);
//  const navgate =useNavigate()
//  const next=()=>{
//   navgate(`/home`)
//  }
  return (
    <div className='play-container'> 
      <Playvideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/> 
    </div>
  )
}

export default Videos