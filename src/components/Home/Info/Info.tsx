import React from "react";
import clouds from "../../../images/clouds.png";
import {InfoItem} from "./InfoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export interface ItemTypes {
	icon: string;
	title: string;
	text: string;
}
export const Info = () => {
	const weather = useSelector((state: RootState) => state.weather);

	const apparentTemperature = Math.round(weather.currentApparentTemperature[0]);
	const currentTemperature = Math.round(weather.currentTemperature[0]);
	const currentPressure = Math.round(weather.currentPressure[0]);

	const getCurrentPrecipitation = () => {
		const currentPrecipitation = weather.currentPrecipitation[0];
		return currentPrecipitation === 0 ? 'No precipitation' : `${currentPrecipitation} mm`;
	}
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
    const items: ItemTypes[] = [
		{
			icon: "Temperature",
			title: "Temperature",
			text: `${currentTemperature}° - feels like ${apparentTemperature}°`,
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
			text: getWindInfo(weather.currentWindSpeed[0], weather.currentWindDirection[0]),
		},
	]

	return (
		<div className='relative w-[750px] shadow p-[20px] s:rounded-none sm:rounded-[20px] dark:bg-neutral-600'>
			<div className='flex flex-col gap-[20px] relative z-20'>
				{items.map((item: ItemTypes, index: number) => <InfoItem key={index} item={item}/>)}
			</div>
			<img className='absolute top-0 right-0 s:hidden md:block' src={clouds} alt="clouds"/>
		</div>
	);
}