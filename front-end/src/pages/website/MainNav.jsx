import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";
import RegistrationPortal from "../../components/website/registration/RegistrationPortal";
import { AuthContext } from "../../context/AuthContext";
import NavUserDropIcon from "../../components/website/profile/NavUserDropIcon";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";
import logo from '../../components/img/logo.png'
export default function MainNav() {
	const path = useLocation();
	const { showPortal, setShowPortal, user, token } = useContext(AuthContext);
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-gray-100 font-normal"
			>
				<NavLink to={"/"} className={`flex items-center `}>
					Home
				</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-gray-100   font-normal"
			>
				<NavLink to={"/games"} className="flex  items-center">
					Games
				</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-cream font-normal"
			>
				<NavLink to={"/community"} className="flex items-center">
					Gamers Hub
				</NavLink>
			</Typography>

			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-cream font-normal"
			>
				<NavLink to={"/affiliate"} className="flex items-center">
					Affiliate
				</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-cream font-normal"
			>
				<NavLink to={"/xo"} className="flex items-center">
					TicTacToe
				</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-cream font-normal"
			>
				<NavLink to={"/contact"} className="flex items-center">
					Contact
				</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 dark:text-cream font-normal"
			>
				<NavLink to={"/about"} className="flex items-center">
					About
				</NavLink>
			</Typography>
		</ul>
	);

	return (
		<>
			<div className="max-w-screen text-white  ">
				<Navbar className="absolute z-10 position-sticky top-0  lg:max-h-[70px] lg:inset-0 transition duration-300 hover:duration-300 ease-in-out dark:bg-white/40 border-none hover:shadow-lg mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 text-white">
					<div className="container mx-auto flex items-center justify-between text-blue-gray-900 dark:text-gray-100 ">
						<div className="flex gap-5">

							<img src={logo} className=' h-11 ' alt="" />

							<DarkThemeToggle />
						</div>
						<div className="hidden  lg:block ">{navList}</div>
						{token && user ? (
							<NavUserDropIcon />
						) : (
							<Button
								onClick={() => {
									setShowPortal(!showPortal);
									console.log("hi");
								}}
								variant="gradient"
								size="sm"
								className="hidden bg-indigo lg:inline-block"
							>
								<span>Register</span>
							</Button>
						)}

						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
					<MobileNav open={openNav}>{navList}</MobileNav>
				</Navbar>
			</div>
			<RegistrationPortal />
		</>
	);
}
