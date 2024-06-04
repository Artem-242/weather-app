import React, {useState} from "react";
import {DaysSvgSelector} from "../../../icons/DaysSvgSelector";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/store";
import {Day} from "./Days";
import {DayPopup} from "../../Popup/DayPopup";

interface Props {
	day: Day;
	index: number;
}

interface PopupData {
}


export const getMonthName = (month: number): string => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[month - 1];
}
export const OneDayCard = ({day, index}: Props) => {

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = () => {
		setIsPopupOpen(true);
	}
	const closePopup = () => {
		setIsPopupOpen(false);
	}
	const getDate = () => {
		const splitDate = date.split('-');
		const day = splitDate[2];
		const month = parseInt(splitDate[1], 10);
		const monthName = getMonthName(month);
		return `${day} ${monthName}`
	}

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
	const conditionWeather = () => {
		if (weatherCode === 0) {
			return 'Sunny';
		} else if (weatherCode === 57 || weatherCode === 65 || weatherCode === 67 || weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
			return 'Heavy rain';
		} else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55 || weatherCode === 56 || weatherCode === 57 || weatherCode === 61 || weatherCode === 63 || weatherCode === 66) {
			return 'Rain';
		} else if (weatherCode === 1 || weatherCode === 2) {
			return 'Cloud with sun';
		} else if (weatherCode === 3) {
			return 'Cloudy';
		} else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
			return 'Thunderstorm';
		} else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75 || weatherCode === 77 || weatherCode === 85 || weatherCode === 86) {
			return 'Snowy';
		} else if (weatherCode === 45 || weatherCode === 48) {
			return 'Fog';
		}
	}

	const weather = useSelector((state: RootState) => state.weather)
	const {date, weatherCode, temperatureMax, temperatureMin} = day;

	const items: PopupData[] = weather.time.map((date, index) => (
		{
			temperature: weather.temperatureMax[index],
			apparentTemperature: weather.apparentTemperatureMax[index],
			pressure: Math.round(weather.currentPressure[index]),
			precipitation: weather.precipitation[index],
			wind: weather.precipitation[index],
		}
	));

	return (
		<div className="bg-blue-500 bg-opacity-20 rounded-[10px] min-w-[150px] text-slate-400 p-[10px] dark:bg-zinc-800">
			<h5 className="text-black text-lg font-medium mb-[7px] dark:text-white">{getDayName(index)}</h5>
			<div className=" text-sm mb-[12px]">{getDate()}</div>
			<div>
				<DaysSvgSelector weatherCode={weatherCode} iconStyles={''}/>
				{weatherCode}
			</div>
			<div className="mt-[13px] text-black text-lg font-medium dark:text-white">{temperatureMax}</div>
			<div className="text-[13px] mb-[6px]">{temperatureMin}</div>
			<div className="text-[13px] mb-[6px]">{conditionWeather()}</div>
			<button onClick={openPopup} className="text-[11px] hover:underline">More info</button>
			<DayPopup closePopup={closePopup} isPopupOpen={isPopupOpen}/>
		</div>
	);
}