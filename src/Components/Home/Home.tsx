import React from "react";
import {Header} from "../Header/Header";
import {ThisDay} from "./ThisDay/ThisDay";
import {Info} from "./Info/Info";
import {Days} from "./Days/Days";
import {DayPopup} from "../Popup/DayPopup"

export const Home = () => {
    return(
	    <div className= "font-['Montserrat']">
		    <div className="max-w-[1200px] mx-auto container p-[10px]">
			    <Header />
			    <div className="flex flex-wrap gap-[20px] items-center justify-between mt-[30px]">
				    <ThisDay />
				    <Info />
			    </div>
			    <div className="mt-[30px]">
				    <Days />
			        <DayPopup />
			    </div>
		    </div>
	    </div>
    );
}