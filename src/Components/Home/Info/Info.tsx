import React from "react";
import clouds from "../../../images/clouds.png";
import {InfoItem} from "./InfoItem";


export interface Item {
    icon: string;
    title: string;
    text: string;
}

export const Info = () => {

    const items : Item[] = [
        {
            icon : "Temperature",
            title: "Temperature",
            text: "20° - feels like 17°",
        },
        {
            icon : "Pressure",
            title: "Pressure",
            text: "765 mercury normal",
        },
        {
            icon : "Precipitation",
            title: "Precipitation",
            text: "No precipitation",
        },
        {
            icon : "Wind",
            title: "Wind",
            text: "20° - feels like 17°",
        },
    ]
    return(
        <div className='relative max-w-[750px] w-full rounded-[20px] shadow p-[20px]'>
            <div className='flex flex-col gap-[20px] relative z-20'>
                {items.map((item: Item) => <InfoItem item={item} />)}
            </div>
                <img className='absolute top-0 right-0' src={clouds} alt="clouds"/>
        </div>
    );
}