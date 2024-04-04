import React, {useState} from "react";
import Select from 'react-select'

interface Props {
	darkMode: string;
	onSelectChange: (selectedOption: any) => void;
	onInputChange: (inputValue: any) => void;
}

const customSelectStyles = (darkMode: string) => ({
	control: (styles: any) => ({
		...styles,
		paddingLeft: "10px",
		paddingRight: "10px",
		height: '37px',
		borderRadius: "10px",
		backgroundColor: darkMode === 'dark' ? "#4F4F4F" : "rgba(71, 147, 255, 0.20)",
		border: "none",
		color: darkMode === 'dark' ? '#fff' : '#000',
	})
});

const options: { value: string; label: string; }[] = [
	{value: 'chocolate', label: 'Chocolate'},
	{value: 'strawberry', label: 'Strawberry'},
	{value: 'vanilla', label: 'Vanilla'}
];


export const HeaderSelect = ({darkMode, onSelectChange, onInputChange}: Props) => {


	const [inputValue, setInputValue] = useState('');
	const [selectedOption, setSelectedOption] = useState(null);

	const handleChange = (selectedOption: any) => {
		setSelectedOption(selectedOption);
		onSelectChange(selectedOption)
	}
	const changeInputValue = (inputValue: string) => {
		setInputValue(inputValue);
		onInputChange(inputValue);
		return inputValue;
	}
	const getCities = async () => {

		const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?minPopulation=1000&namePrefix=${inputValue}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'e4319ab4bdmsh26b41717a4123e6p1b8d7cjsnd3e87f07c55e',
				'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
			}
		}

		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
		getCities()
	}


	return (
		<div>
			<Select
				styles={customSelectStyles(darkMode)}
				options={options}
				value={selectedOption}
				inputValue={inputValue}
				onInputChange={changeInputValue}
				onChange={handleChange}
			/>
		</div>
	);
};