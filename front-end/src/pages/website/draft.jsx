import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../reducers/gameSlice";
import { BsFillPhoneFill } from "react-icons/bs";
import { FcIphone } from "react-icons/fc";
import { BiDesktop, BiMobile, BiPhone } from "react-icons/bi";
import Sort from "../../components/website/games/Sort";

export default function Games() {
	const dispatch = useDispatch();
	const games = useSelector((state) => state.games.games);
	const loading = useSelector((state) => state.games.loading);
	const [searchInput, setSearchInput] = useState("");
	const [currentRecords, setCurrentRecords] = useState([]);
	// const [searchInput, setSearchInput] = useState()
	console.log(searchInput);
	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [recordsPerPage] = useState(20);
	const indexOfLastRecord = page * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	useEffect(() => {
		fetchData(page);
	}, [page, currentRecords, searchInput]);

	useEffect(() => {
		if (searchInput != "") {
			const searchItems = games?.filter(
				(game) => {
					return Object.values(game).some(
						(val) => typeof val === "string" && val.includes(searchInput)
					);
				}
				// game.title.toLowerCase().includes(searchInput.toLowerCase()) ||
				// game.description.toLowerCase().includes(searchInput.toLowerCase()) ||
				// game.category.toLowerCase().includes(searchInput.toLowerCase()) ||
				// game.tags.toLowerCase().includes(searchInput.toLowerCase())
			);

			const currentSearchRecords = searchItems?.slice(
				indexOfFirstRecord,
				indexOfLastRecord
			);
			setItems([]);
			setCurrentRecords(currentSearchRecords);
			setHasMore(false);
		} else {
			const currentData = games?.slice(indexOfFirstRecord, indexOfLastRecord);
			setCurrentRecords(currentData);
		}
	}, [games, searchInput, indexOfFirstRecord, indexOfLastRecord]);

	const fetchData = (page) => {
		const nPages = Math.ceil(games?.length / recordsPerPage);

		setItems([...items, ...currentRecords]);

		if (page === nPages) {
			setHasMore(false);
		}
	};
	console.log("items");
	console.log(items);

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

	return (
		<div className="bg-white flex">
			<Sort games={games} setSearchInput={setSearchInput} />
			<div className="max-w-2xl w-full px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{items?.map((game, i) => {
						return (
							<a key={i} className="group">
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
							</a>
						);
					})}
					{hasMore && <div>Loading...</div>}
				</div>
			</div>
		</div>
	);
}






import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../reducers/gameSlice";
import { BsFillPhoneFill } from "react-icons/bs";
import { FcIphone } from "react-icons/fc";
import { BiDesktop, BiMobile, BiPhone } from "react-icons/bi";
import Sort from "../../components/website/games/Sort";

export default function Games() {
	const dispatch = useDispatch();
	const games = useSelector((state) => state.games.games);
	const loading = useSelector((state) => state.games.loading);

	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	//
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [recordsPerPage] = useState(20);
	const [searchInput, setSearchInput] = useState("");
	const [searchedItems, setSearchedItems] = useState([]);

	useEffect(() => {
		console.log(items);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [items]);

	const onScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight) {
			setPage(page + 1);
		}
	};

	useEffect(() => {
		fetchData(page);
	}, [page, games]);

	const fetchData = (page) => {
		if (searchInput === "") {
			const indexOfLastRecord = page * recordsPerPage;
			const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
			const currentRecords = games?.slice(
				indexOfFirstRecord,
				indexOfLastRecord
			);
			const nPages = Math.ceil(games?.length / recordsPerPage);

			if (page === nPages) {
				setHasMore(false);
			}

			setItems([...items, ...currentRecords]);
			// console.log(items);
		} else {
			// if (items) {
			// 	// setPage(1);
			// }
			setItems([]);
			const indexOfLastRecord = page * recordsPerPage;
			const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
			const currentRecords = searchedItems?.slice(
				indexOfFirstRecord,
				indexOfLastRecord
			);
			const nPages = Math.ceil(searchedItems?.length / recordsPerPage);

			if (page === nPages) {
				setHasMore(false);
			}

			// setItems([...items, ...currentRecords]);
			// console.log(items);
		}
	};
	useEffect(() => {
		const filterSearchedItems = games?.filter((game) => {
			return Object.values(game).some(
				(val) => typeof val === "string" && val.includes(searchInput)
			);
		});
		setSearchedItems(filterSearchedItems);
		setItems(filterSearchedItems);
	}, [searchInput]);

	return (
		<div className="bg-white flex">
			<Sort setSearchInput={setSearchInput} games={games} />
			<div className="max-w-2xl w-full px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{items?.map((game, i) => {
						return (
							<a key={i} className="group">
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
							</a>
						);
					})}
					{hasMore && <div>Loading...</div>}
				</div>
			</div>
		</div>
	);
}
