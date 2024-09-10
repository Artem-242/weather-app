import React, { useState, useEffect } from "react";
import { SvgSelector } from "../../icons/SvgSelector";
import { useDispatch } from "react-redux";
import {AppDispatch} from "../../store/store";
import {getWeatherFromApi, setCityName, setDefaultCity} from "../../store/slices";

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/authContexts/AuthProvider";
import { doSignOut } from '../../firebase/auth'


export const Header = () => {

   const navigate = useNavigate()
   const { userLoggedIn, currentUser } = useAuth()

	const dispatch = useDispatch<AppDispatch>();
	const [inputValue, setInputValue] = useState("");
	const [darkMode, setDarkMode] = useState("light");

	useEffect(() => {
		dispatch(setDefaultCity("Opole"));
		handleDefaultWeather("Opole");
	}, [dispatch]);

	const handleFetchWeather = () => {
		dispatch(getWeatherFromApi(inputValue));
		dispatch(setCityName(inputValue));
	};

	const handleDefaultWeather = (cityName: string) => {
		dispatch(getWeatherFromApi(cityName));
		dispatch(setCityName(cityName));
	};

    const darkModeHandle = (darkMode: string) => {
      if (darkMode === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }

	useEffect(() => {
		darkModeHandle(darkMode);
	}, [darkMode]);
	const darkModeSwitch = () => {
		setDarkMode(darkMode === "dark" ? "light" : "dark");
	};

	return (
		<div>
			<div className="min-h-[115px] md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<div className="flex items-center md:gap-[15px]">
						<div className="">
							<SvgSelector id="HeaderLogo" />
						</div>
						<h1 className="text-blue-500 text-[25px] font-bold uppercase hidden md:block">
							React Weather
						</h1>
					</div>
					<button onClick={darkModeSwitch} className="md:hidden">
						<SvgSelector id="Header-scheme-icon" />
					</button>
				</div>
				<div className="gap-[20px] mt-[10px] md:flex md:items-center md:mt-0">
					<button onClick={darkModeSwitch} className="hidden md:block">
						<SvgSelector id="Header-scheme-icon" />
					</button>
					<div className="">
						<input
							type="text"
							name="city"
							placeholder="Enter city"
							className="w-[194px] h-[37px] bg-blue-200 rounded-[10px] p-[10px] placeholder:text-black"
							value={inputValue}
							onChange={(event) => {
								setInputValue(event.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
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
            {
               userLoggedIn
                  ?
                  <div className="flex flex-col text-center text-sm">
                     <span className="text-sm">{currentUser?.email}</span>
                     <button onClick={() => { doSignOut().then(() => { navigate('/home') }) }} className='text-sm hover:underline'>Logout</button>
                  </div>
                  :
                  <div className="flex flex-col text-center text-sm">
                     <Link className=' hover:underline' to={'/login'}>Login</Link>
                     <Link className=' hover:underline' to={'/register'}>Register New Account</Link>
                  </div>
            }
			</div>
		</div>
	);
};
