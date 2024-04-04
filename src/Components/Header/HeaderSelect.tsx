    import React from "react";
    import Select from 'react-select'

    interface Props {
        darkMode: string; // Assuming darkMode is a string with values 'light' or 'dark'
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
        }),
        option: (styles: any) => ({
            ...styles,
            ':hover': {
                backgroundColor: darkMode === 'dark' ? "#666" : "#f0f0f0", // Customize background color on hover
                color: darkMode === 'dark' ? '#fff' : '#000', // Customize text color on hover
            },
        }),

        menu: (styles: any) => ({
            ...styles,
            backgroundColor: darkMode === 'dark' ? "#4F4F4F" : "rgba(71, 147, 255, 0.20)",
            ':hover': {
                backgroundColor: darkMode === 'dark' ? "#666" : "#f0f0f0", // Customize background color on hover
                color: darkMode === 'dark' ? '#fff' : '#000', // Customize text color on hover
            },
        })
    });

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    export const HeaderSelect = ({darkMode} : Props) => {


        return (
            <div>
                <Select styles={customSelectStyles(darkMode)} options={options} />
            </div>
        );
    };