import React, { Fragment } from 'react'
import { FaUserTie } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import { BiUpvote } from "react-icons/bi";
import { useAppSelector } from '@/Types/hooksTypes';
import { getAllQuestions } from './questionsSlice';
import { Link } from 'react-router-dom';

const SinglePostLayout = () => {
    // const dispatch = useAppDispatch()
    const data = useAppSelector(getAllQuestions)
  return (
    <Fragment>
        {data.map((question) => (
            <div className='border p-3 rounded-lg mt-6 shadow-md shadow-indigo-600' key={question.id}>
            <div className='flex items-center gap-3'>
                <div>
                    <FaUserTie className='text-[30px]' />
                </div>
                <div>
                    <h2 className='font-bold text-sm'>{question.user.username}</h2>
                    <p className='text-sm'>{question.dateAsked}</p>
                </div>
            </div>
            <div className='block md:mt-5 mt-2'>
                <Link to={`question/${question.id}`}>
                    <h2 className='text-indigo-900 font-bold cursor-pointer hover:text-blue-500'>{question.title}</h2>
                    <p className='text-slate-600 md:text-sm text-xs'>{question.content.substring(0, 90)}...</p>
                </Link>
            </div>
            <div className='flex md:mt-5 justify-between mt-2'>
                <div>
                    <button className='bg-indigo-400 px-4 py-2 rounded-lg md:text-sm text-xs'>Programming</button>
                </div>
                <div className='flex items-center gap-5 text-sm'>
                    <div className='flex items-center'><GiConversation /><span>0</span></div>
                    <div className='flex items-center'><BiUpvote /><span>0</span></div>
                </div>
            </div>
        </div>
        ))}
    </Fragment>
  )
}

export default SinglePostLayout
