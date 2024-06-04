import React from "react";
import {OneDayCard} from "./OneDayCard";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/store";

export interface Day {
	date: string,
	weatherCode: number,
	temperatureMax:string,
	temperatureMin:string;
}
export const Days = () => {
	const weather = useSelector((state: RootState) => state.weather);
	const items: Day[] = weather.time.map((date, index) =>(
		{
			date,
			weatherCode: weather.weatherCode[index],
			temperatureMax: `${Math.round(weather.temperatureMax[index])}°C`,
			temperatureMin: `${Math.round(weather.temperatureMin[index])}°C`,
		}
	))

    return(
        <div>
	        <div className="flex justify-between w-full flex-wrap gap-[15px] rounded-bl-[20px] rounded-br-[20px] shadow p-[20px] dark:bg-neutral-600">
		        {items.map((day, index) => (
			        <OneDayCard day={day} key={index} index={index}/>
		        ))}
	        </div>
        </div>
    );
}