import React from 'react'
import { FcComments } from 'react-icons/fc';
export default function ProfileComments() {
    return (
        <div class=" rounded-md border-t-4 border-indigo p-2 shadow-xl">
            <p class="text-sm text-start text-black dark:text-white flex items-center gap-5">
                <FcComments /> <span> You commented on {' [ post owner name ] '} Post {' [ the comment ] '} . </span>
            </p>
        </div>

    )
}
