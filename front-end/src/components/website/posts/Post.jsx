import React, { useEffect, useState, useContext } from 'react'
import PostComp from './PostComp';



export default function Post({ posts, setPosts }) {
  return (
    <>
      {posts?.map((post) => {
        return (
          <PostComp post={post} setPosts={setPosts} />

        )
      })}
    </>
  )
}
