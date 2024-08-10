import React, { Fragment } from 'react'
import SigninButton from './SigninButton'
import SignupButton from './SignupButton'
import sownPng  from '../Assets/Images/sown.png'
import { Separator } from "@/components/ui/separator"
import { BsMenuAppFill } from "react-icons/bs";
import QuestionButton from './QuestionButton'
import { ResponsiveNav } from './ResponsiveNav'



const NavBar = () => {
  return (
   <Fragment>
    <header className='w-full fixed p-5 top-0 md:sticky bg-indigo-200 shadow-lg shadow-indigo-400 z-30'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img 
          src={sownPng} 
          alt='sownoverflow icon'
          className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full'
          />
          <div>
          <Separator />
            <h1 className='text-sm text-indigo-800 md:text-lg'>
              sown<span className='text-indigo-900 font-bold'>overflow</span></h1>
              <Separator />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {/* <QuestionButton /> */}
          <div className='text-2xl text-indigo-950 md:hidden'><ResponsiveNav/></div>
          <div className='hidden md:block'><SigninButton /></div>
         <div className='hidden md:block'><SignupButton /></div>
        </div>
      </nav>
    </header>
   </Fragment>
  )
}

export default NavBar
