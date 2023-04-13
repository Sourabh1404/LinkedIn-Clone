import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from './firebase';
function Feed() {
    
    const [input, setInput] =useState('');
    const [posts, setPosts] =useState([]);
    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=>
           setPosts(
            snapshot.docs.map((doc)=>(
            {id:doc.id,
                data:doc.data(),
            }
           ))) 
        );
    },[])
    const sendPost=e=>{
         e.preventDefault();
         db.collection('posts').add({
            name:'Sourabh',
            description:'this is a test',
            message:input,
            photoUrl: "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         })
    }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text"/>
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33A" />
                <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOptions Icon={ViewDayIcon} title="Write Article" color="#7FC15E" />
            </div>
        </div>
        {/*Posts*/}
        {posts.map((post)=>(
            <Post/>
        ))}
        <Post name="Sourabh Kr Gupta" description="This is a test"  message='Wow this worked'/>
    </div>
  )
}

export default Feed