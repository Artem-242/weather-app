import React from "react";
import {SvgSelector} from "../../../icons/SvgSelector";

export const ThisDay:React.FC = () => {
    return(
        <div className=" shadow flex flex-col p-[20px] gap-[30px] rounded-none xl:rounded-[20px] w-full xl:w-[400px] dark:bg-neutral-600  ">
            <div className="flex items-center s:justify-center xl:justify-between">
                <div className="flex flex-col">
                    <div className="text-blue-500 text-8xl font-medium ">20°</div>
                    <div className="text-black text-[40px] dark:text-white">Today</div>
                </div>
                <div className=""><SvgSelector id="Sun" iconStyles="w-[119px] h-[119px]"/></div>
            </div>
            <div className="flex flex-col gap-[14px] text-slate-400 text-[25px]">
                <p className="">Time: <span>9:54PM</span></p>
                <p className="">City: <span>Wroclaw</span></p>
            </div>
        </div>
    );
}