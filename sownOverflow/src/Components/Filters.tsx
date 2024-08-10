import React from 'react'
import { Fragment } from 'react/jsx-dev-runtime'
import { MdMenuBook } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";

const Filters = () => {
  return (
    <Fragment>
      <div className='flex md:gap-3 gap-1'>
        <button className='flex items-center bg-indigo-200 px-1 h-[36px]  md:px-2 md:py-2 border border-indigo-500
        rounded-lg gap-1 md:gap-2 text-indigo-800 font-normal text-xs md:text-sm hover:text-slate-100
         hover:bg-indigo-500 transition-all ease-in'>
          <div><MdMenuBook /></div>
          FEATURED
        </button>
        
        <button className='flex items-center bg-indigo-200 px-1 h-[36px]  md:px-2 md:py-2 border border-indigo-500
        rounded-lg gap-1 md:gap-2 text-indigo-800 font-normal text-xs md:text-sm hover:text-slate-100
         hover:bg-indigo-500 transition-all ease-in'>
          <div><RiChatNewFill /></div>
          NEW TOPICS
        </button>

        <button className='flex items-center bg-indigo-200 px-1 h-[36px]  md:px-2 md:py-2 border border-indigo-500
        rounded-lg gap-1 md:gap-2 text-indigo-800 font-normal text-xs md:text-sm hover:text-slate-100
         hover:bg-indigo-500 transition-all ease-in'>
          <div><MdFavorite /></div>
          FAVOURITE
        </button>
      </div>
    </Fragment>
  )
}

export default Filters
