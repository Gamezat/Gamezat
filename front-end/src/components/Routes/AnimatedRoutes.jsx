import React from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import Posts from '../../pages/website/Posts'
import MainNav from '../../pages/website/MainNav'
import MainOutlet from '../../outlet/MainOutlet'
import DashLayout from '../../outlet/DashLayout'
import Home from '../../pages/website/Home'
import Profile from "../../pages/website/Profile";
import Games from "../../pages/website/Games";
import SingleGame from "../../pages/website/SingleGame";
import { useEffect } from "react";
import Affiliate from "../../pages/website/Affiliate";
import TicTacToe from "../../pages/website/TicTacToe";
import OfflineXo from "../../components/website/tictactoe/OfflineXo";
import AiXo from "../../components/website/tictactoe/AiXo";
import Dashboard from "../../pages/dashboard/Dashboard";
import About from "../../pages/website/About";
import SingleProfile from "../../pages/website/SingleProfile";
import DPosts from "../../pages/dashboard/DPosts";
import { AnimatePresence } from 'framer-motion';


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainOutlet />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/:id" element={<SingleProfile />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/:id" element={<SingleGame />} />
                    <Route path="/affiliate" element={<Affiliate />} />
                    <Route path="/community" element={<Posts />} />
                    <Route path="/xo" element={<TicTacToe />} />
                    <Route path="/about" element={<About />} />
                    <Route path={"/multiplayer-offline"} element={<OfflineXo />} />
                    <Route path={"/vs-ai"} element={<AiXo />} /></Route>
                <Route path="/dashboard" element={<DashLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/posts" element={<DPosts />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
