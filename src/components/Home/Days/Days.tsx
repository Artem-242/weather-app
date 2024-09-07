import React, {useState} from "react";
import {getMonthName, OneDayCard} from "./OneDayCard";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {DayPopup} from "../../Popup/DayPopup";

export interface Day {
	date: string,
	weatherCode: number,
	temperatureMax:string,
	temperatureMin:string;
	apparentTemperatureMax: number,
	currentPressure: number,
	precipitation: number,
	windDir: number,
	windSpd: number,
}

export const Days = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedDay, setSelectedDay] = useState<Day | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const openPopup = (day: Day, index:number) => {
		setSelectedDay(day);
		setIsPopupOpen(true);
		setSelectedIndex(index);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		setSelectedDay(null);
		setSelectedIndex(0);
	};

	const weather = useSelector((state: RootState) => state.weather);

	const items: Day[] = weather.time.map((date, index) =>(
		{
			date,
			weatherCode: weather.weatherCode[index],
			temperatureMax: `${Math.round(weather.temperatureMax[index])}°C`,
			temperatureMin: `${Math.round(weather.temperatureMin[index])}°C`,
			apparentTemperatureMax: Math.round(weather.apparentTemperatureMax[index]),
			currentPressure: Math.round(weather.currentPressure[index]),
			precipitation: weather.precipitation[index],
			windDir: weather.windDirection[index],
			windSpd: weather.windSpeed[index],
		}
	))

    return(
        <div>
	        <div className="flex justify-between w-full flex-wrap gap-[15px] rounded-bl-[20px] rounded-br-[20px] shadow p-[20px] dark:bg-neutral-600">
		        {items.map((day, index) => (
			        <OneDayCard day={day} key={index} index={index} openPopup={openPopup} />
		        ))}
	        </div>
	        {isPopupOpen && selectedDay && (
		        <DayPopup day={selectedDay} closePopup={closePopup} isPopupOpen={isPopupOpen} index={selectedIndex} city={weather.cityName} />
	        )}
        </div>
    );
}