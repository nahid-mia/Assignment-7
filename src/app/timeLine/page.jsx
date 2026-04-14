"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/dataContext";
import TimeLinePage from "../components/TimeLinePage";


const TimeLine = () => {

    const [timeLineState, setTimeLineState] = useState('');
    const { callArray, textArray, videoArray, allArray } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        );
    }


    const showArray = () => {
        switch (timeLineState) {
            case 'all':
                return allArray.map((array, index) => <TimeLinePage key={index} array={array}></TimeLinePage>)
            case 'call':
                return callArray.map((array, index) => <TimeLinePage key={index} array={array}></TimeLinePage>)
            case 'text':
                return textArray.map((array, index) => <TimeLinePage key={index} array={array}></TimeLinePage>)
            case 'video':
                return videoArray.map((array, index) => <TimeLinePage key={index} array={array}></TimeLinePage>)
            default:
                return allArray.map((array, index) => <TimeLinePage key={index} array={array}></TimeLinePage>)
        }
    }

    return (
        <div className="bg-[#f8fafc]">
            <div className="w-10/12 md:w-9/12 mx-auto mt-5 p-10 space-y-5">
                <h2 className="text-3xl font-bold">TimeLine</h2>
                <details className="dropdown" open={open}>
                    <summary onClick={() => setOpen(true)} className="btn m-1 text-gray-500">Filter TimeLine</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => { setTimeLineState('all'), setOpen(false) }}><a>All-TimeLines</a></li>
                        <li onClick={() => { setTimeLineState('call'), setOpen(false) }}><a>Call-TimeLines</a></li>
                        <li onClick={() => { setTimeLineState('text'), setOpen(false) }}><a>Text-TImeLines</a></li>
                        <li onClick={() => { setTimeLineState('video'), setOpen(false) }}><a>Video-TimeLines</a></li>
                    </ul>
                </details>
                <div>
                    {showArray()}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;