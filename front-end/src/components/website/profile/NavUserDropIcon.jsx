import React, { useContext } from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
export default function NavUserDropIcon() {
	const { logout, user } = useContext(AuthContext);


	return (
		<>
			<Dropdown
				className=""
				label={
					<Avatar
						img={`${user?.image
							? user?.image
							: "https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png"
							}`}
						rounded={true}
					/>
				}
				arrowIcon={false}
				inline={true}
				referrerPolicy="no-referrer"
			>
				<Dropdown.Header>
					<span className="block text-sm">{user?.name}</span>
					<span className="block truncate text-sm font-medium">
						{user?.email}
					</span>
				</Dropdown.Header>
				<Dropdown.Item>
					<Link to={"/profile"}>Profile</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link to={"/asd"}>Fav Games</Link>
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
			</Dropdown>
		</>
	);
}
