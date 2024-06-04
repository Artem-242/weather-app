import React from "react";
import {SvgSelector} from "../../../icons/SvgSelector";
import {ItemTypes} from "./Info";

interface Props{
	item: ItemTypes;
};

 export const InfoItem = ({item} : Props) => {
	const {icon, title, text} = item;

    return(
	    <div className='flex items-center gap-[20px]'>
		    <div className='flex justify-center items-center w-[38px] h-[38px] rounded-full shadow dark:bg-white'>
			    <SvgSelector id={icon} />
		    </div>
		    <p className='text-slate-400 text-sm flex s:flex-auto flex md:flex-none'>{title}</p>
		    <p className='text-black text-sm right dark:text-white'>{text}</p>
	    </div>

    );
}