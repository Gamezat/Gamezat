import React, { useEffect, useState } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { Dropdown } from 'flowbite-react';
import axios from 'axios';



export default function Post() {
  const [posts, setPosts] = useState([]);
  const APIURL =
    "http://127.0.0.1:8000/api/posts";
  useEffect(() => {
    axios.get(APIURL).then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  return (
    <>
      {posts.map((post) => {
        console.log(post.likes)
        return (
          <>
            <div key={post.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-lg mb-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg" />
                  <div className="ml-1.5 text-sm leading-tight">
                    <span className="text-black dark:text-white font-bold block ">Visualize Value</span>
                    <span className="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                  </div>
                </div>
                <Dropdown
                  inline={true}
                  className='mt-0'
                  placement='bottom'
                >
                  <Dropdown.Item>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Earnings
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>

                {/* <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg> */}
              </div>
              <details className="text-black dark:text-white block text-xl leading-snug mt-3">
              <summary>{post.content.substring(0, 155)}...</summary>
                {post.content.substring(155)}
                </details>
              <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src={post.image} />
              <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">{post.created_at}</p>
              <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
              <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                <div className="flex items-center mr-6">
                  <button className="fill-current text-black h-5 w-auto">
                    <BsHeart className='text-lg' />
                  </button>
                  <span className="ml-2">{post.likes.count()}</span>
                </div>
                <div className="flex flex-row items-center mr-6">
                  <button className="flex flex-row">
                    <BiCommentDetail className='text-xl mt-[0.2rem]' />
                    <span className="ml-2">93</span>
                  </button>
                </div>
              </div>
            </div>
          </>

        )
      })}
    </>
  )
}
