"use client"
import friends from '../../public/friends.json'
import { FaPlus } from "react-icons/fa";
import Friend from './components/Friend';
import { useEffect, useState } from 'react';


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const onTrack = friends.filter(friend => friend.status === "on-track");
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <div className='bg-[#f8fafc]'>
      <div className='w-9/12 mx-auto py-30 space-y-7'>
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-5xl font-bold text-center'>Friends to keep close in your life</h3>
          <p className='text-gray-500 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
          <button className='btn bg-green-900 text-white rounded-sm flex gap-2 p-3 items-center'>
            <span><FaPlus /></span>
            Add a Friend</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <div className='bg-white rounded-md shadow-sm flex flex-col items-center py-5'>
            <p className='font-semibold text-xl'>{friends.length}</p>
            <p className='text-gray-500'>Total-friends</p>
          </div>
          <div className='bg-white rounded-md shadow-sm flex flex-col items-center py-5'>
            <p className='font-semibold text-xl'>{onTrack.length}</p>
            <p className='text-gray-500'>On - Track</p>
          </div>
          <div className='bg-white rounded-md shadow-sm flex flex-col items-center py-5'>
            <p className='font-semibold text-xl'>{friends.length - onTrack.length}</p>
            <p className='text-gray-500'>Need Attention</p>
          </div>
          <div className='bg-white rounded-md shadow-sm flex flex-col items-center py-5'>
            <p className='font-semibold text-xl'>12</p>
            <p className='text-gray-500'>Interactions This Month</p>
          </div>
        </div>
        <hr className='text-gray-300' />
        <div className='flex flex-col gap-7'>
          <p className='text-xl font-bold'>Your Friends</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {friends.map(friend => {
              return <Friend key={friend.id} friend={friend}></Friend>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
