import React from "react";
import {Header} from "../Header/Header";
import {ThisDay} from "./ThisDay/ThisDay";
import {Info} from "./Info/Info";
import {Days} from "./Days/Days";
import {DayPopup} from "../Popup/DayPopup"

const city: any = "Opole"//prompt("Enter city:")
const apiKeyWeather: string = "40c38c5129144238a1e8fd28cd56b8e8";

interface WeatherData {
	datetime: string,
	max_temp: number,
	min_temp: number,
	precip: number,
	pres: number,
	temp: number,
	wind_spd: number,
	weather: any,
	wind_cdir: string,
	// Define other properties if needed
}


const getWeatherFromApi = async () => {
	const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKeyWeather}`)
		.then(response => response.json())
	console.log(response)
	const values = response.data.slice(0, 7).map((day: WeatherData) => (
		{
			day: day.datetime,
			maxTemp: day.max_temp,
			minTemp: day.min_temp,
			precipitation: day.precip,
			pressure: day.pres,
			currentTemp: day.temp,
			windSpeed: day.wind_spd,
			icon: day.weather.description,
			windDirection: day.wind_cdir,
		}
	))
	console.log(values)
}


export const Home = () => {

	getWeatherFromApi();

	return (
		<div className="font-['Montserrat'] relative dark:bg-neutral-900 h-screen">
			<div className="max-w-[1200px] mx-auto container px-[10px]  z-0 ">
				<Header/>
				<div
					className="flex gap-y-[10px] gap-x-[50px] items-center justify-between mt-[10px] sm:mt-[30px] flex-wrap xl:flex-nowrap ">
					<ThisDay/>
					<Info/>
				</div>
				<div className="mt-[30px]">
					<Days/>
				</div>
				<DayPopup/>
			</div>
		</div>
	);
}