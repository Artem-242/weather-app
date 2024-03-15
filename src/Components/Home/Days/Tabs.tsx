import React from "react";

interface TabsItems {
	value : string,
}

export const Tabs = () => {

	const tabsItems : TabsItems[] = [
		{
			value : "Today",
		},
		{
			value : "Tomorrow",
		},
		{
			value : "Today",
		},
	]

	return(
		<div className="flex justify-between items-center mb-[15px] pl-[5px] pr-[5px]">
			<div className="flex gap-[15px] flex-wrap pl-[5px] pr-[5px]">

				{tabsItems.map((tab: TabsItems) => (
					<div className="text-black text-lg pl-[20px] pr-[20px] pt-[9px] pb-[9px] flex justify-center items-center bg-white rounded-[5px] shadow cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 smm:w-2/4 ">{tab.value}</div>
				))}
			</div>
			<div className="text-black text-lg pl-[20px] pr-[20px] pt-[9px] pb-[9px] flex justify-center items-center bg-white rounded-[5px] shadow cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">Cancel</div>
		</div>
	);
}