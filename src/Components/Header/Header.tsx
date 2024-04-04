	import React, {useState, useEffect} from "react";
	import {SvgSelector} from "../../icons/SvgSelector";
	import {HeaderSelect} from "./HeaderSelect";

	export const Header = () => {

		const [darkMode, setDarkMode] = useState("light")

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
						<div className="w-full md:w-[194px]">
							<HeaderSelect
								darkMode={darkMode}
								onSelectChange={(selectedOption: string) => {
									console.log(selectedOption)
								}}
								onInputChange={(inputValue: string) => {
									console.log(inputValue)
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}