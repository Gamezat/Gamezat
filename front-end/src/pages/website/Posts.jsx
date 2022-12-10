import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chat from '../../components/website/posts/Chat'
import CreatePost from '../../components/website/posts/CreatePost'
import Post from '../../components/website/posts/Post'

export default function Posts() {
  const [posts, setPosts] = useState([]);


  //fetch all posts from database
  useEffect(() => {
    axios.get("/api/posts").then((response) => {
      setPosts(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="mt-3 grid lg:grid-cols-4 max-w sm:grid-cols-1 md:grid-cols-1">

        <div className='lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-1 md:col-start-1 md:col-span-1 md:mx-auto sm:mx-auto'>
          <CreatePost setPosts={setPosts} />
          <Post posts={posts.reverse()} setPosts={setPosts} />
        </div>
        <div className='lg:fixed lg:col-start-2 lg:col-span-2 '>

          <Chat />
        </div>
      </div>
    </>

  )
}
