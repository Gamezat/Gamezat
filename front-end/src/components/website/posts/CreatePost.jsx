import { Textarea } from 'flowbite-react'
import React, { useEffect, useState, useContext } from 'react'
import { BsHeart } from 'react-icons/bs'
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext'
import swal from 'sweetalert';
import { useRef } from 'react';
export default function CreatePost({ setPosts }) {
    const { user, token } = useContext(AuthContext)
    const inputPost = useRef()
    const [data, setData] = useState({
        id: '',
        content: '',
        image: '',

    });
    function handleSubmit(e) {
        e.preventDefault();
        if (data.content === "") {
            swal("Please write something first")
            return
        }
        setData({ ...data, [e.target.name]: e.target.value })
        axios
            .post("/api/posts", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                swal('successful', 'Your post is in review', 'success')
                // setPosts(res.data.data)
                inputPost.current.value = ""

            })

    }

    return (
        <>
            <form className='' onSubmit={handleSubmit} method='post'>
                <div className="mb-5 shadow-lg shadow-lightGray bg-white dark:bg-gray-800 border-amber dark:border-amber p-4 rounded-xl border border-t-8 max-w-lg">
                    <div className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl'>
                        <div class="flex">
                            <img class=" mr-2 h-11 w-11 rounded-full" src={`${user?.image ? user?.image : 'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png'}`} />
                            <Textarea ref={inputPost} onChange={(e) => {
                                setData({ ...data, content: e.target.value });


                            }} className="bg-transparent scrollbar-hide  shadow-lg text-gray-400  focus:ring-amber focus:border-amber   rounded font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?" />

                        </div>
                    </div>
                    <div class="flex justify-around ">
                        <label htmlFor='image-upload' class=" ring-1 h-9 hover:cursor-cell group flex items-center justify-center text-lightGray dark:text-amber   text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-lg hover:shadow-red transition duration-300 hover:duration-300 ease-in-out">
                            <span>
                                <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <input name='image' id='image-upload' hidden type="file" onChange={(e) => {
                                    setData({ ...data, image: e.target.value });
                                }} />
                            </span>
                            <span>
                                Add Image
                            </span>
                        </label>

                        <button type='submit' class="bg-gray-400   hover:shadow-xl transition duration-300 hover:duration-300 ease-in-out hover:bg-amber text-white hover:text-white font-bold py-2 px-8 rounded-full">
                            Post
                        </button>
                    </div>
                </div>
            </form>


        </>
    )
}
