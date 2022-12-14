import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

import { IoIosHome } from 'react-icons/io';
import { AuthContext } from '../../context/AuthContext';
import logo from '../img/logo.png'
export default function SideBarDash() {


    const [collapsed, setCollapsed] = useState(false);
    const { prevData } = useContext(AdminContext)
    const { user } = useContext(AuthContext)
    const path = useLocation()
    return (
        <>

            <aside class="w-64 sticky shadow-lg font-bold text-lg text-lemon" aria-label="Sidebar">
                <div class="overflow-y-auto flex flex-col h-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <img src={logo} alt="" />
                    <p className='text-center my-12'>Hello {user?.name}</p>
                    <ul class="space-y-5 ">
                        <li>
                            <Link to={'/dashboard'} class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${path.pathname == "/dashboard" ? "bg-gray-700" : ""} dark:hover:bg-gray-700 `}>
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/posts'} class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${path.pathname == "/dashboard/posts" ? "bg-gray-700" : ""} dark:hover:bg-gray-700 `}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Manage Posts</span>

                            </Link>
                        </li>


                        <li>
                            <Link to={'/dashboard/reports'} class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${path.pathname == "/dashboard/reports" ? "bg-gray-700" : ""} dark:hover:bg-gray-700 `}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Reports</span>
                                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-white bg-amber rounded-full dark:bg-blue-900 dark:text-blue-200">{prevData.reportsCount}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/users'} class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${path.pathname == "/dashboard/users" ? "bg-gray-700" : ""} dark:hover:bg-gray-700 `}>
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/dashboard/products"}
                                class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${path.pathname == "/dashboard/products" ? "bg-gray-700" : ""} dark:hover:bg-gray-700 `}
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} class={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700 `}>
                                <IoIosHome className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span class="flex-1 ml-3 whitespace-nowrap">Website</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

        </>
    );
}
