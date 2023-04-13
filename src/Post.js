import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ReportIcon from '@mui/icons-material/Report';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions';
import './Post.css'
function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOptions Icon={ThumbUpAltIcon} title='Like' color='gray'/>
            <InputOptions Icon={ChatIcon} title='Comment' color='gray'/>
            <InputOptions Icon={ReportIcon} title='Report' color='gray'/>
            <InputOptions Icon={SendIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Post