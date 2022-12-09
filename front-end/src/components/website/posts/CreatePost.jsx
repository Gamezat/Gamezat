import { Textarea } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import axios from 'axios';

export default function CreatePost() {

    
    return (
        <>
    
        <form action="">
            <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border border-b-4 max-w-lg">
                {/* <div className="flex justify-between"> */}
                <div className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl'>
                    <div class="flex">
                        
                            <img class=" mt-4 mr-2 h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg" alt="" />
                        
                        <Textarea class="bg-transparent mt-5 text-gray-400 border border-lightGray focus:border-red-500 rounded font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?" />
                    </div>
                    <div class="flex">
                        <div class="w-10"></div>

                        <div class="w-64 px-2">

                            <div class="flex items-center">
                                <div class="flex-1 text-center px-1 py-1 m-2">
                                    <a href="#" class="mt-1 group flex items-center text-lightGray dark:text-amber px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-xl">
                                        <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </a>
                                </div>

                                <div class="flex-1 text-center py-2 m-2">
                                    <a href="#" class="mt-1 group flex items-center text-lightGray dark:text-amber px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-xl">
                                        <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </a>
                                </div>

                                <div class="flex-1 text-center py-2 m-2">
                                    <a href="#" class="mt-1 group flex items-center text-lightGray dark:text-amber dak:text-amber px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-xl transition duration-300 hover:duration-300 ease-in-out">
                                        <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </a>
                                </div>

                                <div class="flex-1 text-center py-2 m-2">
                                    <a href="#" class="mt-1 group flex items-center text-lightGray dark:text-amber px-2 py-2 text-base leading-6 font-medium rounded-full hover:text-amber hover:shadow-lg hover:shadow-red transition duration-300 hover:duration-300 ease-in-out">
                                        <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="flex-1">
                            <button class="bg-gray-400 mt-5 hover:shadow-xl transition duration-300 hover:duration-300 ease-in-out hover:bg-amber text-white hover:text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                                Post
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            </form>
            
            
           
            {/* <hr class="border-blue-800 border-4"></hr> */ }

        </>
    )
}
