import { Arapey } from "next/font/google";
import Image from "next/image";

const TimeLinePage = ({array}) => {
    return (
        <div className="p-5 flex gap-5 items-center bg-white my-3 shadow-md rounded-sm">
            <div><Image src={array.picture} width={30} height={30} alt="Icon"></Image></div>
            <div className="flex flex-col gap-3">
               <p className="text-gray-500"><span className="font-bold text-black">{array.type} with</span> {array.name}</p>
               <p className="text-gray-600">{array.date}</p>
            </div>
        </div>
    );
};

export default TimeLinePage;