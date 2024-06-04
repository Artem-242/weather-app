import React from "react";
import {DaysSvgSelector} from "../../icons/DaysSvgSelector";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/store";
import {getMonthName} from "../Home/Days/OneDayCard";

interface Props {
	closePopup: () => void,
	isPopupOpen: boolean,
}

export const DayPopup = ({closePopup, isPopupOpen}: Props) => {
	if (!isPopupOpen) return null;

	const weather = useSelector((state: RootState) => state.weather);


	const getDate = () => {
		const splitDate = date.split('-');
		const day = splitDate[2];
		const month = parseInt(splitDate[1], 10);
		const monthName = getMonthName(month);
		return `${day} ${monthName}`
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg relative">
				<button
					onClick={closePopup}
					className="absolute top-0 right-0 mt-2 mr-2 text-gray-700"
				>
					&times;
				</button>
				<div>
					<div className=" shadow flex flex-col p-[20px] gap-[30px] rounded-none xl:rounded-[20px] w-full xl:w-[400px] dark:bg-neutral-600  ">
						<div className="flex items-center s:justify-center xl:justify-between">
							<div className="flex flex-col">
								<div className="text-blue-500 text-8xl font-medium ">{Math.round(weather.currentTemperature[0])}°</div>
								<div className="text-black text-[40px] dark:text-white">Today</div>
							</div>
							<div className=""><DaysSvgSelector weatherCode={weather.currentWeatherCode[0]} iconStyles="w-[119px] h-[119px]"/></div>
						</div>
						<div className="flex flex-col gap-[14px] text-slate-400 text-[25px]">
							<p className="">Date: <span>{getDate()}</span></p>
							<p className="">City: <span>{weather.cityName}</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}