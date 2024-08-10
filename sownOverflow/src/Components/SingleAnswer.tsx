import React, { Fragment } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { AiFillLike } from "react-icons/ai";
import EditModal from '../Features/EditAnswers/EditModal';

const SingleAnswer = () => {
  return (
    <Fragment>
        <div className='border border-indigo-500 p-3 rounded-lg mt-5'>
            <div className='flex justify-between items-center gap-1'>
                <div className='flex items-center gap-2'>
                    <FaUserTie className='md:text-[30px] text-[20px]' />
                    <h1 className="text-xs md:text-sm font-semibold">John Doe</h1>
                    <button className='flex bg-indigo-300 rounded-lg px-1 md:text-sm text-xs' disabled>2 months</button>
                </div>
                <div>
                    <button className='flex bg-indigo-500 rounded-lg px-1 md:text-sm text-xs' disabled>Expert Say</button>
                </div>
            </div>
            <div className='mt-3 text-sm'>
                <h1>Interesting. Are there other things you'll like to explore? 
                    I forgot to add the name of the foundation.
                </h1>
            </div>
            <div className='flex items-center mt-2 gap-6'>
                <button><AiFillLike /></button>
                <EditModal />
                <button className='border border-red-300 rounded'>Delete</button>
            </div>
        </div>
    </Fragment>
  )
}

export default SingleAnswer
