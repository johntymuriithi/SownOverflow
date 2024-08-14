import React, { Fragment } from 'react'
import { BiUpvote } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'
import { GiConversation } from 'react-icons/gi'
import { LiaEye } from 'react-icons/lia'
import SingleAnswer from '../EditAnswers/SingleAnswer'
import { Separator } from '@/components/ui/separator'
import AnswerModal from '../Answers/AnswerModal'
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import EditAnswerModal from './EditAnswerModal'
import { useAppSelector } from '@/Types/hooksTypes'
import { getUserInfo } from '../Users/usersSlice'

const SinglePost = () => {
    console.log(useAppSelector(getUserInfo))
  return (
    <Fragment>
        <div className='min-h-[600px] bg-slate-200 rounded-lg p-3'>
            <div className='mb-4'>
                <h1 className='font-bold md:text-xl'>Exploring the Potential of Blockchain Technology</h1>
            </div>
            <div className='md:flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>
                        <FaUserTie className='text-[30px]' />
                    </div>
                    <div>
                        <h2 className='font-bold text-sm'>John Doe</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                 <div className='flex items-center gap-5 text-sm'>
                        <div className='flex items-center'><LiaEye /><span>20</span></div>
                        <div className='flex items-center'><GiConversation /><span>0</span></div>
                        <div className='flex items-center'><BiUpvote /><span>2</span></div>
                 </div>
                <div>
                    <button className='bg-indigo-400 md:px-3 md:py-2 px-2 py-1 rounded-lg text-sm'>Programming</button>
                </div>
                </div>
            </div>

            <div className='mt-3'>
                <button className='bg-slate-400 w-full text-justify p-2 rounded-lg text-xs'><span className='pr-2 text-xs'>Asked:</span>2 months Ago</button>
            </div>

            <hr className='border border-green-300 mt-7'/>
            <div className='mt-3 text-[14px] md:text-[17px]'>
                <p>
                Blockchain technology, known for powering cryptocurrencies like Bitcoin, has potential applications beyond finance. It offers a decentralized, secure, and transparent way
                to record transactions, making it useful for various industries.
                </p>

                <p>
                Blockchain technology, known for powering cryptocurrencies like Bitcoin, 
                has potential applications beyond finance. It offers a decentralized, secure, and transparent way 
                to record transactions, making it useful for various industries.
                </p>
            </div>
            <hr className='border border-green-300 mt-7'/>
            <div className='flex items-center justify-between'>
            <div className='md:mt-3 mt-1 flex gap-2'>
                <AnswerModal />
                <button className='border border-indigo-600 rounded md:p-2 px-1 bg-indigo-300'>
                    <BiSolidUpvote />
                </button>
                <button className='border border-indigo-600 rounded md:p-2 px-1 bg-indigo-300'>
                    <BiSolidDownvote />
                </button>
                <EditAnswerModal />
            </div>
            <div className='md:p-2 px-1 md:mt-3 mt-1'>
                <p className='border border-t-indigo-700 border-b-indigo-700 transition ease-in'>2</p>
            </div>
            </div>
            <hr className='border border-green-300 mt-3'/>

            <div className='mt-3'>
                <h1 className='text-3xl italic font-extralight text-indigo-400'>0 ANSWERS</h1>
            </div>
            <hr className='border border-green-300 mt-3'/>
            <div className='md:p-4 mt-3'>
                {/* Answers Here */}
                <SingleAnswer />
                <SingleAnswer />
                <SingleAnswer />
                <SingleAnswer />
            </div>
        </div>
    </Fragment>
  )
}

export default SinglePost
