import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
export default function SingleGame() {
	const { id } = useParams();
	const games = useSelector((state) => state.games.games);
	const game = games?.find((game) => game.guid === id);
	const [ratingValue, setRatingValue] = useState(0);
	const [review, setReview] = useState("");
	const ratingChanged = (newRating) => {
		setRatingValue(newRating);
	};

	const handleReview = () => {
		const data = {
			rate: ratingValue,
			user_id: user.id,
			game_id: game.guid,
			review: review,
		};
		axios
			.get("/api/reviews", data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => console.log(res));
	};

	return (
		<div className="flex p-5">
			<iframe src={game.link} className={" w-1/2 h-screen"}></iframe>
			<div className="w-1/2 m-9 p-10 rounded-3xl border-t-4 shadow-lg border-amber  dark:bg-slate-800">
				<label
					for="message"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Did you like the game?
				</label>
				<div>
					<ReactStars
						count={5}
						onChange={ratingChanged}
						size={24}
						activeColor="#ffd700"
					/>
				</div>
				<textarea
					onChange={(e) => setReview(e.target.value)}
					id="message"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lemon focus:border-lemon dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lemon dark:focus:border-lemon"
					placeholder="Leave a review..."
				></textarea>
				<button
					onClick={handleReview}
					type="button"
					class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					Submit
				</button>
			</div>
		</div>
	);
}
