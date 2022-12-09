import { Textarea } from 'flowbite-react'
import React, { useEffect, useState, useContext } from 'react'
import { BsHeart } from 'react-icons/bs'
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext'
export default function CreatePost() {
    const { user, token } = useContext(AuthContext)
    const [data, setData] = useState({
        id: '',
        content: '',
        image: '',

    });
    function handleSubmit(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        axios
            .post("/api/posts", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res)
            })

    }

    return (
        <>
            <form onSubmit={handleSubmit} method='post'>
                <input type="hidden" value={user?.id} />
                <div className="shadow- shadow-black bg-white dark:bg-gray-800 border-amber dark:border-amber p-4 rounded-xl border border-t-8 max-w-lg">
                    <div className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl'>
                        <div class="flex">
                            <img class=" mr-2 h-11 w-11 rounded-full" src={`${user?.image ? user?.image : 'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png'}`} />
                            <Textarea className='shadow-sm ring-amber active:ring-amber focus:shadow-md focus:border-amber focus:ring-amber ' name='content' onChange={(e) => {
                                setData({ ...data, content: e.target.value });
                            }} class="bg-transparent mt-5 text-gray-400 border border-lightGray focus:border-red-500 rounded font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?" />
                        </div>
                        <div class="flex">
                            <div class="w-10"></div>
                            <div class="w-64 px-2">
                                <div class="flex items-center">
                                    <div class="flex-1 text-center py-2 m-2" >
                                        <label htmlFor='image-upload' class="mt-1 hover:cursor-cell group flex items-center text-lightGray dark:text-amber px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-lg hover:shadow-red transition duration-300 hover:duration-300 ease-in-out">
                                           Add Image <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            <input name='image' id='image-upload' hidden type="file" onChange={(e) => {
                                                setData({ ...data, image: e.target.value });
                                            }} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <button type='submit' class="bg-gray-400 mt-5 hover:shadow-xl transition duration-300 hover:duration-300 ease-in-out hover:bg-amber text-white hover:text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>



            {/* <hr class="border-blue-800 border-4"></hr> */}

        </>
    )
}
