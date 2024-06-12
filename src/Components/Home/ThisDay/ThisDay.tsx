import React from "react";
import {RootState} from "../../../Store/store";
import {useSelector} from "react-redux";
import {DaysSvgSelector} from "../../../icons/DaysSvgSelector";
import {getMonthName} from "../Days/OneDayCard";

export const ThisDay = () => {
		const weather = useSelector((state: RootState) => state.weather);


	const getDate = () => {
		if (!weather.time || !weather.time[0]) {
			return "Unknown Date";
		}
		const splitDate = weather.time[0].split('-');
		const day = splitDate[2];
		const month = parseInt(splitDate[1], 10);
		const monthName = getMonthName(month);
		return `${day} ${monthName}`;
	}



	return (
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
	);
}