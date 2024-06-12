import React, {useState} from "react";
import {DaysSvgSelector} from "../../../icons/DaysSvgSelector";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/store";
import {Day} from "./Days";
import {DayPopup} from "../../Popup/DayPopup";

interface Props {
	day: Day;
	index: number;
	openPopup: (day: Day, index: number) => void;
}


export const getMonthName = (month: number): string => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[month - 1];
}
export const OneDayCard = ({day, index, openPopup}: Props) => {

	const {date, weatherCode, temperatureMax, temperatureMin} = day;

	const getDate = () => {
		const splitDate = date.split('-');
		const day = splitDate[2];
		const month = parseInt(splitDate[1], 10);
		const monthName = getMonthName(month);
		return `${day} ${monthName}`
	}
	const conditionWeather = (weatherCode: number) => {
		if (weatherCode === 0) {
			return 'Sunny';
		} else if ([57, 65, 67, 80, 81, 82].includes(weatherCode)) {
			return 'Heavy rain';
		} else if ([51, 53, 55, 56, 57, 61, 63, 66].includes(weatherCode)) {
			return 'Rain';
		} else if ([1, 2].includes(weatherCode)) {
			return 'Cloud with sun';
		} else if (weatherCode === 3) {
			return 'Cloudy';
		} else if ([95, 96, 99].includes(weatherCode)) {
			return 'Thunderstorm';
		} else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
			return 'Snowy';
		} else if ([45, 48].includes(weatherCode)) {
			return 'Fog';
		}
	};
	const getDayName = (index: number): string => {
		if (index === 0) {
			return 'Today';
		} else if (index === 1) {
			return 'Tomorrow';
		} else {
			const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			const currentDay = new Date().getDay();
			return daysOfWeek[(currentDay + index) % 7];
		}
	}

	return (
		<div className="bg-blue-500 bg-opacity-20 rounded-[10px] min-w-[150px] text-slate-400 p-[10px] dark:bg-zinc-800">
			<h5 className="text-black text-lg font-medium mb-[7px] dark:text-white">{getDayName(index)}</h5>
			<p className=" text-sm mb-[12px]">{getDate()}</p>
			<div>
				<DaysSvgSelector weatherCode={weatherCode} iconStyles={''}/>
				{weatherCode}
			</div>
			<p className="mt-[13px] text-black text-lg font-medium dark:text-white">{temperatureMax}</p>
			<p className="text-[13px] mb-[6px]">{temperatureMin}</p>
			<p className="text-[13px] mb-[6px]">{conditionWeather(weatherCode)}</p>
			<button onClick={() => openPopup(day, index)} className="text-[11px] hover:underline">More info</button>
		</div>
	);
}