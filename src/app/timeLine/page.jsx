"use client";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";


const TimeLine = () => {

    const data = useContext(DataContext);

    return (
        <div>
            <h2>Hello it is the Time Line</h2>
        </div>
    );
};

export default TimeLine;