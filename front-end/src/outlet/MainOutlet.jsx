import React from 'react'
import { Outlet } from "react-router-dom";
import RegistrationPortal from '../components/website/registration/RegistrationPortal';
import MainNav from '../pages/website/MainNav';

export default function UserEnd() {
    return (
        <>

            <MainNav />

            {/* An <Outlet> renders whatever child route is currently active in App.js */}
            <Outlet />


        </>
    )
}
