import React, {useState, useEffect} from "react";
import {SvgSelector} from "../../icons/SvgSelector";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/store";
import {getWeatherFromApi, setCityName, setDefaultCity} from "../../Store/slices";


export const Header = () => {
	const dispatch = useDispatch<AppDispatch>();
	const weather = useSelector((state: RootState) => state.weather);
	const [inputValue, setInputValue] = useState('');
	const defaultCity = "";
	const [darkMode, setDarkMode] = useState("light");

	const handleFetchWeather = () => {
		dispatch(getWeatherFromApi(inputValue));
		dispatch(setCityName(inputValue));
	};

	const handleDefaultWeather = (cityName: string) => {
		dispatch(getWeatherFromApi(cityName));
		dispatch(setCityName(cityName));
	}

	useEffect(() => {
		handleDefaultWeather(defaultCity)
	}, [dispatch, defaultCity]);


	useEffect(() => {
		if (darkMode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [darkMode]);
	const darkModeSwitch = () => {
		setDarkMode(darkMode === "dark" ? "light" : "dark");
	};

	return (
		<div>
			<div className=' min-h-[115px] md:flex md:items-center md:justify-between'>
				<div className='flex items-center justify-between'>
					<div className="flex items-center md:gap-[15px]">
						<div className=""><SvgSelector id="HeaderLogo"/></div>
						<h1 className="text-blue-500 text-[25px] font-bold uppercase hidden md:block ">React Weather</h1>
					</div>
					<button onClick={darkModeSwitch} className="md:hidden"><SvgSelector id="Header-scheme-icon"/></button>
				</div>
				<div className="gap-[20px] mt-[10px] md:flex md:items-center md:mt-0 ">
					<button onClick={darkModeSwitch} className="hidden md:block"><SvgSelector id="Header-scheme-icon"/></button>
					<div className="">
						<input
							type="text"
							name="city"
							id=""
							placeholder="Enter city"
							className="w-[194px] h-[37px] bg-blue-200 rounded-[10px] p-[10px] placeholder:text-black"
							value={inputValue}
							onChange={(event) => {
								setInputValue(event.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									setInputValue('');
									event.currentTarget.blur();
									handleFetchWeather();
								}
							}}
							onFocus={(event) => {
								event.target.placeholder = "";
							}}
							onBlur={(event) => {
								event.target.placeholder = "Enter city";
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

