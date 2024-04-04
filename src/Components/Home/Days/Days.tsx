import React from "react";
import {Tabs} from "./Tabs";
import {OneDayCard} from "./OneDayCard";


export interface Item {
	day: string,
	date: string,
	icon : string,
	temperature_day: string,
	temperature_night: string,
	clouds: string,
}

export const Days = () => {
	const items : Item[] = [
		{
			day: 'Today',
			date: "28 feb",
			icon : "RainWithSun",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Tomorrow',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Today',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Today',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Today',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Today',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
		{
			day: 'Today',
			date: "28 feb",
			icon : "Rain",
			temperature_day: "+18",
			temperature_night: "+15",
			clouds: 'Cloudy'
		},
	]
    return(
        <div>
	        <div className="">
		        <Tabs />
	        </div>
	        <div className="flex justify-between w-full flex-wrap gap-[15px] rounded-bl-[20px] rounded-br-[20px] shadow p-[20px] dark:bg-neutral-600">
		        {items.map((item : Item , index:number) => <OneDayCard key={index} item={item}/>)}
	        </div>
        </div>
    );
}