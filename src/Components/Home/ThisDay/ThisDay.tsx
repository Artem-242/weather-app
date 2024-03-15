import React from "react";
import {SvgSelector} from "../../../icons/SvgSelector";

export const ThisDay:React.FC = () => {
    return(
        <div className=" w-[400px] rounded-[20px] shadow flex flex-col items-center py-[20px] s:mx-[-10px] s:gap-[10px] s:rounded-none ">
            <div className=" s:flex s:flex-col-reverse s:items-center s:justify-centeru">
                <div className="flex flex-col items-center">
                    <div className="text-blue-500 s:text-[70px] font-medium">20°</div>
                    <div className="text-black text-[40px]">Today</div>
                </div>
                <div className=""><SvgSelector id="Sun" iconStyles="s:w-[80px] s:h-[80px]"/></div>
            </div>
            <div className="flex flex-col gap-[14px] text-slate-400 text-[25px]">
                <p className="">Time: <span>9:54PM</span></p>
                <p className="">City: <span>Wroclaw</span></p>
            </div>
        </div>
    );
}