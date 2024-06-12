import React from "react";
import {DaysSvgSelector} from "../../icons/DaysSvgSelector";
import {Day} from "../Home/Days/Days";
import {ItemTypes} from "../Home/Info/Info";
import {InfoItem} from "../Home/Info/InfoItem";
import {getMonthName} from "../Home/Days/OneDayCard";
import {SvgSelector} from "../../icons/SvgSelector";

interface Props {
	closePopup: () => void,
	isPopupOpen: boolean,
	index: number,
	day: Day,
	city: string,
}

export const DayPopup = ({closePopup, isPopupOpen, day, index, city}: Props) => {
	if (!isPopupOpen) return null;

	const {date, weatherCode, temperatureMax, temperatureMin, apparentTemperatureMax, currentPressure, precipitation, windDir, windSpd} = day;

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


	const getCurrentPrecipitation = () => precipitation === 0 ? 'No precipitation' : `${precipitation} mm`;
	const getWindInfo = (speed: number, direction: number): string => {
		let windStrength;
		if (speed >= 1 && speed <= 5) {
			windStrength = 'Light wind';
		} else if (speed >= 6 && speed <= 10) {
			windStrength = 'Moderate wind';
		} else if (speed >= 11 && speed <= 16) {
			windStrength = 'Strong wind';
		} else {
			windStrength = 'Storm wind';
		}

		const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
		const index = Math.round(direction / 45) % 8;
		return `${speed} m/s ${directions[index]} - ${windStrength}`;
	};

	const getDate = () => {
		const splitDate = date.split('-');
		const day = splitDate[2];
		const month = parseInt(splitDate[1], 10);
		const monthName = getMonthName(month);
		return `${day} ${monthName}`
	}

	const items: ItemTypes[] = [
		{
			icon: "Temperature",
			title: "Temperature",
			text: `${Math.round(parseInt(temperatureMax))}° - feels like ${Math.round(apparentTemperatureMax)}°`,
		},
		{
			icon: "Pressure",
			title: "Pressure",
			text: `${currentPressure} mercury normal`,
		},
		{
			icon: "Precipitation",
			title: "Precipitation",
			text: getCurrentPrecipitation(),
		},
		{
			icon: "Wind",
			title: "Wind",
			text: getWindInfo(windDir, windSpd),
		},
	]

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
			<div className="bg-white dark:bg-neutral-600 rounded-[20px] shadow relative w-[500px]">
				<button
					onClick={closePopup} className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 p-[10px]">
					<SvgSelector id="ClosePopup"/>
				</button>
				<div className="flex py-[40px] px-[30px] justify-between">
					<div>
						<div className=" flex flex-col gap-[12px] dark:bg-neutral  ">
							<div className="flex-col items-center s:justify-center xl:justify-between">
								<div className="flex flex-col">
									<div className="text-blue-500 text-6xl font-medium">{Math.round(parseInt(temperatureMax))}°</div>
									<div className="text-blue-500 text-4xl font-medium">{Math.round(parseInt(temperatureMin))}°</div>

									<div className="text-black text-[25px] dark:text-white">{getDayName(index)}</div>
								</div>
								<div className=""><DaysSvgSelector weatherCode={weatherCode} iconStyles="w-[53px] h-[53px]"/></div>
							</div>
							<div className="flex flex-col text-slate-400 text-[15px]">
								<p className="">Date: <span>{getDate()}</span></p>
								<p className="">City: <span>{city}</span></p>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-[20px] relative z-20'>
						{items.map((item: ItemTypes, index: number) =>
							<InfoItem item={item} key={index}/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}