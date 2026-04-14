"use client";
import Image from 'next/image';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoIosArchive } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import callImg from '../../../public/call.png';
import textImg from '../../../public/text.png';
import videoImg from '../../../public/video.png';
import { useContext } from 'react';
import { DataContext } from '../context/dataContext';


const FriendActions = ({ expectedFriend }) => {
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;
    let statusColor = '';

    if (status === "overdue") statusColor = "bg-red-500";
    else if (status === "on-track") statusColor = "bg-green-900";
    else if (status === "due-soon") statusColor = "bg-orange-500";

    const { handleCallButton, handleTextButton, handleVideoButton } = useContext(DataContext);

    return (
        <div>
            <div className='w-full md:w-8/12 mx-auto py-10 flex gap-5 items-stretch'>
                <div className='w-2/4 flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-4 flex-1'>
                        <div className="bg-white py-5 rounded-md shadow-md px-5 flex-1">
                            <div className="flex flex-col gap-2 items-center">
                                <Image className="mask mask-circle" src={picture} width={60} height={60} alt={`${picture} of ${name}`}></Image>
                                <p className="font-bold text-xl">{name}</p>
                                <p className={`p-1 px-2 rounded-2xl text-white text-[13px] ${statusColor}`}>{status}</p>
                                <div className="flex gap-1">
                                    {tags.map(tag => <div className="bg-green-200 p-1 px-2 rounded-2xl text-[13px]" key={tag}>{tag}</div>)}
                                </div>
                                <p className='text-gray-500 text-center'><i>{`"${bio}"`}</i></p>
                                <p className='text-gray-500 text-[12px]'>Email: {email}</p>

                            </div>

                        </div>
                        <button className='btn'><span><HiOutlineBellSnooze /></span> Snooze 2 weeks</button>
                        <button className='btn'><span><IoIosArchive /></span> Archive</button>
                        <button className='btn text-red-500'><span><MdDelete /></span> Delete</button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-3 gap-3 w-full'>
                        <div className='bg-white py-10 flex flex-col items-center text-center shadow-sm rounded-sm'>
                            <p className='font-semibold text-2xl'>{days_since_contact}</p>
                            <p className='text-gray-500'>Days Before Contact</p>
                        </div>
                        <div className='bg-white py-10 flex flex-col items-center text-center shadow-sm rounded-sm'>
                            <p className='font-semibold text-2xl'>{goal}</p>
                            <p className='text-gray-500'>Goal (Days)</p>
                        </div>
                        <div className='bg-white py-10 flex flex-col items-center text-center shadow-sm rounded-sm'>
                            <p className='font-semibold text-2xl'>{next_due_date}</p>
                            <p className='text-gray-500'>Next Due</p>
                        </div>
                    </div>
                    <div className='flex justify-between p-8 bg-white mt-5 shadow-sm rounded-md'>
                        <div className='flex flex-col gap-5'>
                            <p className='font-semibold text-xl'>Relationship Goals</p>
                            <p>Connect Every <span className='font-bold'>{goal} days</span></p>
                        </div>
                        <div>
                            <button className='btn mask text-[12px]'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-6 mt-5 bg-white shadow-sm rounded-sm'>
                        <p>Quick Check In</p>
                        <div className='w-full flex gap-2'>
                            <button onClick={() => handleCallButton(expectedFriend)} className='btn w-1/3 flex flex-col h-14'>
                                <Image src={callImg} width={20} height="auto" alt='Call-Icon' className='mt-1'></Image>
                                <p>Call</p>
                            </button>
                            <button onClick={() => handleTextButton(expectedFriend)} className='btn w-1/3 flex flex-col h-14'>
                                <Image src={textImg} width={20} height="auto" alt='Text-Icon' className='mt-1'></Image>
                                <p>Text</p>
                            </button>
                            <button onClick={() => handleVideoButton(expectedFriend)} className='btn w-1/3 flex flex-col h-14'>
                                <Image src={videoImg} width={20} height="auto" alt='Call-Icon' className='mt-1'></Image>
                                <p>Video</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendActions;