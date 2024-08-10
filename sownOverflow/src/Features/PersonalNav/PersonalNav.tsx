import { Separator } from '@/components/ui/separator'
import React, { Fragment } from 'react'
import { VscSignOut } from "react-icons/vsc";

const PersonalNav = () => {
  return (
    <Fragment>
        <div className='block bg-slate-400 min-h-[200px] rounded-lg p-3'>
            <div className='text-center'>
                <h1>Activity</h1>
            </div>
            <Separator className='mt-1'/>
            <div className='mt-3'>
                <ol>
                    <li className='mt-5'>Questions</li>
                    <li className='mt-5'>Answers</li>
                    <li className='mt-5'>Votes</li>
                </ol>
            </div>
            <Separator  className='bg-slate-200 mt-2'/>
            <div>
          <button className='bg-indigo-800 flex justify-center gap-1 items-center mt-3 py-2 rounded-lg text-slate-100 
            font-semibold hover:bg-indigo-700 w-full'>
               <VscSignOut />
                Sign Out</button>
        </div>
        </div>
    </Fragment>
  )
}

export default PersonalNav
