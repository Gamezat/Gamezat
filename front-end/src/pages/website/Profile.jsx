import React, { useContext } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { AuthContext } from '../../context/AuthContext';

import { BiMap } from 'react-icons/bi';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ProfileComments from '../../components/website/profile/ProfileComments';
export default function Profile() {

    const navigate = useNavigate()

    const { user, token, setUser, setShowPortal } = useContext(AuthContext)
    const [cookies, setCookie, removeCookie] = useCookies(['Token'])
    useEffect(() => {
        if (token === "") {
            // setShowPortal(true)
            navigate('/')
        }
    }, [token])
    const updateProfileData = (e) => {

        if (cookies.Token) {
            const data = { [e.target.name]: e.target.value }
            // console.log(data);
            // return
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.put("/api/user/update", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((res) => {
                    if (res.data.status === 200) {
                        // console.log("updated");
                        axios
                            .get("/api/user", {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            })
                            .then((res) => {
                                if (res.data.status === 200) {
                                    setUser(res.data.user)
                                } else {
                                    console.log(res)
                                }
                            });
                    } else {
                        console.log(res)
                    }
                })
            })
        } else {
            return
        }


    }



    return (
        <>
            <div>
                <div className="profile-page ">
                    <section className="block h-[500px]">
                        <div
                            className=" top-0 w-full h-full bg-center bg-cover "
                            style={{
                                backgroundImage:
                                    `url("${user?.banner}")`
                            }}
                        >
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                            style={{ transform: "translateZ(0px)" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x={0}
                                y={0}
                            >
                                <polygon
                                    className="text-blueGray-200 fill-current"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="relative py-16 bg-blueGray-200">
                        <div className="container mx-auto px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                <div className='group   '>
                                                    <img className='h-32 w-32 -mt-10 rounded-full group-hover:scale-105 duration-200' src={user?.image ? user?.image : "https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png"} alt="default avatar rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                                <button
                                                    className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    Connect
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        22
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Friends</span>
                                                </div>
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        10
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Photos</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        89
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col justify-center items-center mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                            {user?.name}
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">

                                            {user?.email}
                                        </div>
                                        <div className="mb-2 flex items-center gap-2 text-blueGray-600 mt-4 ">
                                            <BiMap />
                                            <span>{user.country}</span>
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            {user?.about}
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center ">
                                        <Tabs value="html">
                                            <TabsHeader>

                                                <Tab key={"1"} value={"Profile"}>
                                                    Profile
                                                </Tab>
                                                <Tab key={"2"} value={"Activity"}>
                                                    Activity
                                                </Tab>
                                                <Tab key={"3"} value={"Favariot"}>
                                                    Favariot
                                                </Tab>

                                            </TabsHeader>
                                            <TabsBody>

                                                <TabPanel value={"Profile"}  >

                                                    <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1  w-9/12 mt-3 mx-auto">
                                                        <Input onBlur={updateProfileData} defaultValue={user?.name} size="md" name='name' label="Name" />
                                                        <Input onBlur={updateProfileData} defaultValue={user?.age} size="md" label="Age" name='age' />
                                                        <Input defaultValue={user?.email} size="md" label="Email" disabled />
                                                        <Input onBlur={updateProfileData} defaultValue={user?.country} size="md" label="Country" name='country' />
                                                        <Input onBlur={updateProfileData} defaultValue={user?.about} size="md" label="About" name='about' />
                                                        <Input onBlur={updateProfileData} defaultValue={user?.games} size="md" label="Games" name='games' />
                                                    </div>
                                                    {/* <div><button class="bg-indigo shadow-black hover:bg-blue-700 text-white font-bold py-2 px-16 mt-3 ">
                                                        Edit
                                                    </button></div> */}

                                                </TabPanel>
                                                <TabPanel value={"Activity"}>
                                                    <div className='m-9 p-10 flex flex-col gap-3  h-80 rounded-3xl border-t-4 shadow-lg border-amber  dark:bg-slate-800   overflow-y-scroll  scrollbar-hide'>
                                                        <ProfileComments />
                                                        <ProfileComments />
                                                        <ProfileComments />
                                                        <ProfileComments />
                                                        <ProfileComments />
                                                        <ProfileComments />

                                                    </div>
                                                </TabPanel>
                                                <TabPanel value={"Favariot"}>
                                                    Favariot
                                                </TabPanel>

                                            </TabsBody>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>

    );
}