import React from 'react'
import Chat from '../../components/website/posts/Chat'
import CreatePost from '../../components/website/posts/CreatePost'
import Post from '../../components/website/posts/Post'

export default function Posts() {
  return (
    <>
      <div className="mt-3 grid lg:grid-cols-4 sm:grid-cols-1">

        <div className='lg:col-start-2 lg:col-span-2 sm:col-start-1 sm:col-span-1'>
          <CreatePost />
          <Post />
        </div>
        <div className='lg:fixed lg:col-start-2 lg:col-span-2 '>

          <Chat />
        </div>
      </div>
    </>

  )
}
