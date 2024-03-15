import React from "react";
import {Item} from "./Info";
import {SvgSelector} from "../../../icons/SvgSelector";


interface Props{
	item: Item;
}
export const InfoItem = ({item} : Props) => {

	const {icon, title, text} = item;

    return(
	    <div className='flex items-center gap-[20px]'>
		    <div className='flex justify-center items-center w-[38px] h-[38px] bg-white rounded-full shadow'>
			    <SvgSelector id={icon} />
		    </div>
		    <p className='text-slate-400 text-sm'>{title}</p>
		    <p className='text-black text-sm right'>{text}</p>
	    </div>

    );
}