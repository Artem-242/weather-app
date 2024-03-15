import React from "react";
import Select from 'react-select'


const customSelectStyles = {
    control: (styles : any) => ({
        ...styles,
        paddingLeft : "10px",
        paddingRight: "10px",
        height: '37px',
        borderRadius: "10px",
        background: "rgba(71, 147, 255, 0.20)",
        border: "none",
        //width: "194px"
}),
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const HeaderSelect:React.FC = () => {
    return(
        <div>
            <Select styles={customSelectStyles} options={options} />
        </div>
    );
}

