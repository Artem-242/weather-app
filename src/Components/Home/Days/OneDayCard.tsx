import React from "react";
import {Item} from "./Days";
import { SvgSelector } from "../../../icons/SvgSelector";

interface Props {
	item: Item;
}

export const OneDayCard = ({item}: Props) => {

	const {day, date, icon, temperature_day, temperature_night, clouds} = item;

    return(
        <div className="bg-blue-500 bg-opacity-20 rounded-[10px] min-w-[150px] text-slate-400 p-[10px] dark:bg-zinc-800">
	        <h5 className="text-black text-lg font-medium mb-[7px] dark:text-white">{day}</h5>
	        <div className=" text-sm mb-[12px]">{date}</div>
	        <div>
		        <SvgSelector id={icon}/>
	        </div>
	        <div className="mt-[13px] text-black text-lg font-medium dark:text-white">{temperature_day}</div>
	        <div className="text-[13px] mb-[6px]">{temperature_night}</div>
	        <div className="text-[13px]">{clouds}</div>
        </div>
    );
}