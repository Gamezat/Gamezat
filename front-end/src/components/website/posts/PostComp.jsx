import React, { useEffect, useState, useContext } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { FiMoreHorizontal, FiTrash2 } from 'react-icons/fi';
import { BsHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Dropdown } from 'flowbite-react';
import { Accordion } from '@material-tailwind/react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { AuthContext } from '../../../context/AuthContext'
import { Textarea } from 'flowbite-react'
import axios from 'axios';


export default function PostComp({ post, setPosts }) {



    //user info
    const { user, token } = useContext(AuthContext)

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    //post request
    const [comments, setComments] = useState({
        post_id: '',
        comment: '',
    })
    function handleCommentSubmit(e) {
        e.preventDefault();
        setComments({ ...comments, [e.target.name]: e.target.value })
        axios
            .post("/api/comments", comments, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })

    }

    return (
        <>
            <div key={post?.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-lg mb-2">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img className="h-11 w-11 rounded-full" src={post?.user.image} />
                        <div className="ml-1.5 text-sm leading-tight">
                            <span className="text-black dark:text-white font-bold block ">{post?.user.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 font-normal block">{post?.user.email}</span>
                        </div>
                    </div>
                    <Dropdown
                        inline={true}
                        className='mt-0'
                        placement='bottom'
                    >
                        <Dropdown.Item className='hover:bg-cream'>
                            <CgDanger className='text-xl dark:text-amber mb-1' /> &nbsp; Report
                        </Dropdown.Item>
                        <Dropdown.Item className='hover:bg-cream'>
                            <FiTrash2 className='text-lg mb-1 dark:text-amber' /> &nbsp; Delete
                        </Dropdown.Item>
                    </Dropdown>

                    {/* <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg> */}
                </div>
                <div className="text-black dark:text-white block text-xl leading-snug mt-3">

                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={<MdExpandMore rounded={true} className='rounded inline hover:shadow-xl  hover:shadow-amber transition duration-300 hover:duration-300 ease-in-out' />}
                        readLessText={<MdExpandLess rounded={true} className='rounded inline hover:shadow-xl hover:shadow-amber transition duration-300 hover:duration-300 ease-in-out' />}
                    >{post?.content}</ReactReadMoreReadLess>
                </div>
                <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src={post?.image} />
                <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">{post?.created_at.split('T')[0]} {post?.created_at.split('T')[1].split('.')[0]}</p>
                <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                    <div className="flex items-center mr-6">
                        <button className="fill-current text-black h-5 w-auto">
                            <BsHeart className='text-lg' />
                        </button>
                        <span className="ml-2">{post?.like ? post?.like.likes : '0'}</span>
                    </div>
                    <div className="flex flex-row items-center mr-6">
                        <button className="flex flex-row">
                            <BiCommentDetail onClick={() => handleOpen(1)} className='text-xl mt-[0.2rem]' />
                            <span className="ml-2">{post?.comments.length}</span>
                        </button>


                    </div>
                </div>
                <Accordion open={open === 1}>
                    <AccordionBody>
                        <form
                            onSubmit={handleCommentSubmit}
                            method='post'>
                            <input name='post_id' type="hidden" value={post?.id} />
                            <div className=" border-t- bg-white dark:bg-gray-800 border-amber dark:border-gray-800 p-1 rounded-xl border max-w-md">
                                <div className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-1 rounded-xl'>
                                    <div class="flex">
                                        <img class=" mr-2 h-11 w-11 rounded-full" src={`${user?.image ? user?.image : 'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png'}`} />
                                        <Textarea name='comment' className='shadow-sm ring-amber active:ring-amber focus:shadow-md focus:border-amber focus:ring-amber '
                                            onChange={(e) => {
                                                setComments({
                                                    post_id: post?.id,
                                                    comment: e.target.value,
                                                });
                                            }}
                                            class="bg-transparent text-gray-400 border border-lightGray focus:border-red-500 rounded font-medium text-md w-full" rows="4" cols="50" placeholder="What's happening?" />
                                    </div>
                                    <div class="flex">
                                        <div class="w-10"></div>
                                        <div class="w-64 px-2">

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
                        {post?.comments.map((comment) => {
                            return (
                                <>
                                    <div
                                        class="flex-col mx-auto bg-white border-b-2  border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                        <div class="flex flex-row">
                                            <img class="object-cover w-10 h-10 border-2 border-gray-300 rounded-full" alt="Noob master's avatar"
                                                src={comment?.user.image} />
                                            <div class="flex-col mt-1">
                                                <div class="flex items-center flex-1 px-4 font-bold leading-tight">{comment?.user.name}
                                                    <span class="ml-2 text-xs font-normal text-gray-500">{comment.created_at.split('T')[0]}</span>
                                                </div>
                                                <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                                    {comment?.comment}
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-2 ml-16 border-gray-200" />
                                        {/* <div class="flex flex-row pt-1 md-10 md:ml-16">
                                            <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Emily's avatar"
                                                src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                            <div class="flex-col mt-1">
                                                <div class="flex items-center flex-1 px-4 font-bold leading-tight">Emily
                                                    <span class="ml-2 text-xs font-normal text-gray-500">5 days ago</span>
                                                </div>
                                                <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">I created it using
                                                    TailwindCSS
                                                </div>
                                                <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                                    <svg class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                                        viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                            fill-rule="nonzero" />
                                                    </svg>
                                                </button>
                                                <button class="inline-flex items-center px-1 -ml-1 flex-column">
                                                    <svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </>
                            )
                        })}
                    </AccordionBody>
                </Accordion>

            </div>
        </>
    )
}
