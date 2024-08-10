import React, { Fragment } from 'react'
import { BiUpvote } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'
import { GiConversation } from 'react-icons/gi'
import { LiaEye } from 'react-icons/lia'
import SingleAnswer from './SingleAnswer'
import { Separator } from '@/components/ui/separator'

const SinglePost = () => {
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
