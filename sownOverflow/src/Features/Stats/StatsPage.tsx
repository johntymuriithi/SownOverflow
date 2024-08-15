
import { Separator } from '@/components/ui/separator';
import React, { Fragment } from 'react'
import { FaSimplybuilt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LiaUserSecretSolid } from "react-icons/lia";
import { getUserInfo } from '../Users/usersSlice';
import { useAppSelector } from '@/Types/hooksTypes';

const StatsPage = () => {
    const userInfo  = useAppSelector(getUserInfo)
    const isActive = userInfo.isActive;
    
  return (
    <Fragment>
        <div className='bg-slate-300 rounded-lg p-4'>
            <div className='bg-slate-400 rounded-lg p-4'>
                <h1>Good Afternoon</h1>
                {isActive ? "" : <p>@{userInfo.user?.username}</p>}
            </div>
            {isActive ? "" : 
            <div className='mt-2 bg-slate-400 rounded-lg p-3 hidden md:block'>
                <h1>Your Details:</h1>
                <Separator className='border border-slate-50'/>
                <div className='mt-4'>
                    <h2 className='flex items-center gap-2'><MdOutlineMarkEmailRead className='text-3xl md:text-xl'/>: <span className='font-semibold font-serif'>{userInfo.user?.email}</span></h2>
                    <h3 className='flex items-center gap-2 break-all'><LiaUserSecretSolid className='text-4xl md:text-2xl'/>: <span className='font-semibold font-serif'>{userInfo.user?.username}</span></h3>
            </div>
            </div>
            }
            <div className='bg-slate-400 rounded-xl p-3 text-sm font-serif lg:mt-8 mt-2'>
                <h1>Site Info: <span className='font-semibold font-serif'>46</span> Posts and <span className='font-semibold font-serif'>7 </span>active Users</h1>
            </div>
            <Separator className="text-slate-50 border mt-8"/>
            <div className='md:mt-10 font-sans italic'>
                <button className='flex items-center gap-1'>
                <FaSimplybuilt />
                <h1>Built By <span className='font-semibold font-serif md:text-xl text-sm'>Engineer John</span>...yea</h1>
                </button>
            </div>
            <Separator className="text-slate-50"/>
        </div>
    </Fragment>
  )
}

export default StatsPage
