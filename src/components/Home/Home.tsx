import React from "react";
import {ThisDay} from "./ThisDay/ThisDay";
import {Info} from "./Info/Info";
import {Days} from "./Days/Days";
import {Header} from "../Header/Header";

export const Home = () => {
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
			</div>
		</div>
	);
}