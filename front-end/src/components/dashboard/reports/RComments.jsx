import React from 'react';
import { useContext } from 'react';
import { Card } from 'flowbite-react'
import { AdminContext } from '../../../context/AdminContext';
import { FcComments } from 'react-icons/fc';
import { HiSpeakerphone } from 'react-icons/hi';
import { FaCommentAlt } from 'react-icons/fa';
export default function RComments() {
    const { reports, delReport, delComment } = useContext(AdminContext);
    return (
        <>
            <div className="max-w-full">
                <Card>
                    <div className="mb-4 flex items-center justify-between">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Comments
                        </h5>
                        <p

                            className="text-sm font-medium  "
                        >
                            Manage
                        </p>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">

                            {
                                reports?.comments ? reports?.comments.map(rc => {

                                    return <li className="py-3 sm:py-4  ">
                                        <div className="flex items-center justify-between space-x-4">
                                            <div className="shrink-0">
                                                <FcComments size={20} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="inline-flex items-center text-base font-semibold text-gray-900dark:text-white">
                                                    Feedback: {rc?.feedback}
                                                </p>
                                                <p className="truncate text-sm text-black">
                                                    Comment:  {rc?.comment}
                                                </p>
                                            </div>
                                            <span className='flex gap-3 items-center'>

                                                <HiSpeakerphone onClick={() => delReport(rc?.id)} size={25} className='hover:text-amber cursor-pointer' />
                                                <FaCommentAlt onClick={() => delComment(rc?.comment_id)} size={18} className='hover:text-amber cursor-pointer' />
                                            </span>
                                        </div>
                                    </li>
                                })
                                    : <p>No Reports</p>
                            }

                        </ul>
                    </div>
                </Card>
            </div>
        </>
    );
}
