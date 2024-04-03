import React from "react";
import clouds from "../../../images/clouds.png";
import {InfoItem} from "./InfoItem";
import { Item, items } from "../../../scripts/Info";


export const Info = () => {
    return(
        <div className='relative w-[750px] shadow p-[20px] s:rounded-none sm:rounded-[20px] dark:bg-neutral-600'>
            <div className='flex flex-col gap-[20px] relative z-20'>
                {items.map((item: Item) => <InfoItem item={item} />)}
            </div>
                <img className='absolute top-0 right-0 s:hidden md:block' src={clouds} alt="clouds"/>
        </div>
    );
}