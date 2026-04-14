"use client";

import callImg from '../../../public/call.png';
import textImg from '../../../public/text.png';
import videoImg from '../../../public/video.png';

import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const FriendsContext = ({ children }) => {

    const [callArray, setCallArray] = useState([]);
    const [textArray, setTextArray] = useState([]);
    const [videoArray, setVideoArray] = useState([]);
    const [allArray, setAllArray] = useState([]);

    const handleCallButton = (expectedFriend) => {
        const newData = {
            type: "call",
            name: `${expectedFriend.name}`,
            picture: callImg,
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })
        }
        setCallArray([...callArray, newData]);
        setAllArray([...allArray, newData]);
    }

    const handleTextButton = (expectedFriend) => {
        const newData = {
            type: "Text",
            name: `${expectedFriend.name}`,
            picture: textImg,
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })
        }
        setTextArray([...textArray, newData]);
        setAllArray([...allArray, newData]);
    }

    const handleVideoButton = (expectedFriend) => {
        const newData = {
            type: "Video",
            name: `${expectedFriend.name}`,
            picture: videoImg,
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })
        }
        setVideoArray([...videoArray, newData]);
        setAllArray([...allArray, newData]);
    }

    const data = {
        callArray,
        textArray,
        videoArray,
        allArray,
        handleCallButton,
        handleTextButton,
        handleVideoButton
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default FriendsContext;