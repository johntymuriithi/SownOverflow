import React from 'react'
import { Fragment } from 'react/jsx-dev-runtime'
import { MdMenuBook } from "react-icons/md";
import { getQuestionStatus, modalController } from '../Questions/questionsSlice';
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes';
import { TbCloudCancel } from "react-icons/tb";

const Filters = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(getQuestionStatus)

  const handleNot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    dispatch(modalController())
  }
  return (
    <Fragment>
      <div className='flex md:gap-3 gap-1'>
        <button className='flex items-center bg-indigo-200 px-1 h-[36px]  md:px-2 md:py-2 border border-indigo-500
        rounded-lg gap-1 md:gap-2 text-indigo-800 font-normal text-xs md:text-sm
         hover:bg-indigo-300 transition-all ease-in' disabled>
          <div><MdMenuBook /></div>
          FEATURED
        </button>
        
        {status ? <button className='flex items-center bg-indigo-200 px-1 h-[36px]  md:px-2 md:py-2 border border-indigo-500
        rounded-lg gap-1 md:gap-2 text-indigo-800 font-normal text-xs md:text-sm hover:text-slate-100
         hover:bg-indigo-500 transition-all ease-in'
         onClick={handleNot}>
          <div><TbCloudCancel /></div>
          Not Now
        </button> : ""}
        
      </div>
    </Fragment>
  )
}

export default Filters
