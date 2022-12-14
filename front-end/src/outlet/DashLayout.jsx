import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBarDash from "../components/dashboard/SideBarDash";
import { AuthContext } from "../context/AuthContext";

export default function UserEnd() {
	const { cookies, user } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			<div className="flex h-full">
				<SideBarDash />
				<div className="flex-1  justify-center">
					{/* An <Outlet> renders whatever child route is currently active in App.js */}
					<Outlet />
				</div>
			</div>
		</>
	);
}
