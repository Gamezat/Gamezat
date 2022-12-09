import axios from "axios";
import React from "react";
import { useContext } from "react";

import { useState } from "react";
import { BiTime } from "react-icons/bi";
import { TbEditCircle, TbMessageReport } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../context/AuthContext";
import EditReviewModal from "./EditReviewModal";
import ReportModal from "./ReportModal";

export default function ReviewCard({ review }) {
	const { user, token } = useContext(AuthContext);
	const [show, setShow] = useState(false);
	const [showEdit, setShowEdit] = useState(false);

	const closeModal = () => {
		setShow(false);
	};

	const closeEditModal = () => {
		setShowEdit(false);
	};

	return (
		<>
			<EditReviewModal
				show={showEdit}
				closeModal={closeEditModal}
				reviewItem={review}
			/>

			<ReportModal review={review} show={show} closeModal={closeModal} />
			<article className="rounded-xl border-2 border-gray-100 bg-white relative">
				<div className="flex items-start p-6">
					<div className="flex flex-col gap-2 shrink-0 items-center">
						<img
							alt=""
							src={review?.user.image}
							className="h-14 w-14 rounded-lg object-cover"
							referrerPolicy="no-referrer"
						/>
					</div>

					<div className="ml-4 space-y-2">
						<h3 className="font-medium sm:text-lg">
							<div>
								<ReactStars
									count={5}
									value={review?.stars}
									size={24}
									emptyIcon={<i className="far fa-star"></i>}
									fullIcon={<i className="fa fa-star"></i>}
									edit={false}
								/>
							</div>
						</h3>

						<p className="text-sm text-gray-700 pl-2">{review?.review}</p>

						<div className="mt-2 flex items-center sm:gap-2">
							<div className="flex items-center text-gray-500">
								<BiTime />
								<p className="ml-1 text-xs">
									{review?.created_at.split("T")[0]}
								</p>
							</div>

							<span className="block " aria-hidden="true">
								&middot;
							</span>

							<p className="block text-xs text-gray-500">
								Reviewed by{" "}
								<span className="font-medium  hover:text-gray-700">
									{review?.user.name}
								</span>
							</p>
						</div>

						{token ? (
							user.id === review.user.id ? (
								<TbEditCircle
									onClick={() => setShowEdit(true)}
									className="absolute right-2 bottom-2 text-darkGray hover:cursor-pointer"
									size={20}
								/>
							) : (
								<TbMessageReport
									onClick={() => setShow(true)}
									className="absolute right-2 bottom-2 text-amber hover:cursor-pointer"
									size={20}
								/>
							)
						) : (
							""
						)}
					</div>
				</div>
			</article>
		</>
	);
}
