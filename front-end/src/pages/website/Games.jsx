import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentGame, fetchGames } from "../../reducers/gameSlice";
import { BsFillPhoneFill } from "react-icons/bs";
import { FcIphone } from "react-icons/fc";
import { BiDesktop, BiMobile, BiPhone } from "react-icons/bi";
import Sort from "../../components/website/games/Sort";
import { Link } from "react-router-dom";
import games from "../../games.json";

export default function Games() {
	const dispatch = useDispatch();
	// console.log(games);
	// const games = useSelector((state) => state.games.games);
	const loading = useSelector((state) => state.games.loading);

	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	//
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState(2);
	const [recordsPerPage] = useState(20);

	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight) {
			setPage(page + 1);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [items]);

	useEffect(() => {
		fetchData(page);
	}, [page, games]);

	const fetchData = (page) => {
		const indexOfLastRecord = page * recordsPerPage;
		const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
		const currentRecords = games?.slice(indexOfFirstRecord, indexOfLastRecord);
		const nPages = Math.ceil(games?.length / recordsPerPage);

		if (page === nPages) {
			setHasMore(false);
		}

		setItems([...items, ...currentRecords]);
		console.log(items);
	};

	return (
		<div className="bg-white flex">
			<Sort games={games} />
			<div className="max-w-2xl w-full px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{items?.map((game, i) => {
						return (
							<Link
								to={`/games/${game.guid}`}
								key={i}
								className="group"
								onClick={() =>
									dispatch(
										addCurrentGame({
											name: game.title,
											url: game.link,
											id: game.guid,
										})
									)
								}
							>
								<div className="relative  aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
									<img
										src={game.thumb}
										alt=""
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
									<div className="absolute top-2 right-2 shadow-md bg-indigo rounded-lg p-1">
										{/* <BsFillPhoneFill size={25} className={"text-lemon"} /> */}
										{game.width <= 400 ? (
											<BiMobile size={25} className={"text-lemon"} />
										) : (
											<BiDesktop size={25} className={"text-lemon"} />
										)}
									</div>
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{game.title}</h3>
								{/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
							</Link>
						);
					})}
					{hasMore && <div>Loading...</div>}
				</div>
			</div>
		</div>
	);
}
