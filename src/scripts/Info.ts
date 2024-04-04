export interface Item {
		icon: string;
		title: string;
		text: string;
}

export const items : Item[] = [
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
		text: "3 м/с юго-запад - легкий ветер",
		},
	]