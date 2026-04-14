"use client";
import { useContext } from "react";
import { Pie, PieChart } from "recharts";
import { DataContext } from "../context/dataContext";

const Rechart = () => {

    const { callArray, textArray, videoArray, allArray } = useContext(DataContext);
    const data = [
        { name: "call", value: allArray.length === 0 ? 100 : callArray.length, fill: "#1B5E20" },
        { name: "text", value: allArray.length === 0 ? 100 : textArray.length, fill: "#8e24aa" },
        { name: "video", value: allArray.length === 0 ? 100 : videoArray.length, fill: "#43a047" }
    ]

    return (
        <div className="flex justify-center mt-8 flex-col gap-5 mx-auto max-w-100">
            <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
            </PieChart>
            <div className="flex justify-between max-w-75 mx-auto gap-5">
                <div className="flex gap-2 items-center">
                    <span className="mask mask-circle w-3 bg-purple-600 text-purple-600">t</span>
                    <p>Text</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="mask mask-circle w-3 bg-green-900 text-green-900">c</span>
                    <p>Call</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="mask mask-circle w-3 bg-green-600 text-green-600">v</span>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default Rechart;