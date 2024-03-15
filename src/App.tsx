import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/Home";

export const App:React.FC = () => {
    return (
        <>
            <Routes>
                <Route path= "/" element = {<Home />} />
            </Routes>
        </>
    );
}