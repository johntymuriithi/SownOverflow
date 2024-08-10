import React, { Fragment } from 'react'
import { FaUserTie } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { GiConversation } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";

const SinglePostLayout = () => {
  return (
    <Fragment>
        <div className='border p-3 rounded-lg mt-6 shadow-md shadow-indigo-600'>
            <div className='flex items-center gap-3'>
                <div>
                    <FaUserTie className='text-[30px]' />
                </div>
                <div>
                    <h2 className='font-bold text-sm'>John Doe</h2>
                    <p className='text-sm'>30, May 2024 18:59</p>
                </div>
            </div>
            <div className='block md:mt-5 mt-2'>
                <h2 className='text-indigo-900 font-bold cursor-pointer hover:text-blue-500'>Crop dieseses outbreak</h2>
                <p className='text-slate-600 md:text-sm text-xs'>My Crops with trouble helppppp...</p>
            </div>
            <div className='flex md:mt-5 justify-between mt-2'>
                <div>
                    <button className='bg-indigo-400 px-4 py-2 rounded-lg md:text-sm text-xs'>Programming</button>
                </div>
                <div className='flex items-center gap-5 text-sm'>
                    <div className='flex items-center'><LiaEye /><span>20</span></div>
                    <div className='flex items-center'><GiConversation /><span>0</span></div>
                    <div className='flex items-center'><BiUpvote /><span>2</span></div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SinglePostLayout
