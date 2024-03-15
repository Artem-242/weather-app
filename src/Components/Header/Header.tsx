import React from "react";
import {SvgSelector} from "../../icons/SvgSelector";
import {HeaderSelect} from "./HeaderSelect";

export const Header = () => {
    return(
		<div>
            <div className=' min-h-[115px] md:flex md:items-center md:justify-between'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center md:gap-[15px]">
                        <div className=""><SvgSelector id="HeaderLogo"/></div>
                        <h1 className="text-blue-500 text-[25px] font-bold uppercase hidden md:block ">React Weather</h1>
                    </div>
                    <button className="md:hidden"><SvgSelector id="Header-scheme-icon"/></button>
                </div>
                <div className="gap-[20px] mt-[10px] md:flex md:items-center md:mt-0 ">
                    <button className="hidden md:block"><SvgSelector id="Header-scheme-icon"/></button>
                    <div className="w-full md:w-[194px]">
                        <HeaderSelect />
                    </div>
                </div>
            </div>
        </div>
    );
}