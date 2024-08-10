import React, { Fragment } from 'react'
import TitleSection from '../../Components/TitleSection'
import CategorySection from '../../Components/CategorySection'
import HintModal  from '../../Components/HintModal'
import QuestionArea from './QuestionArea'
import { PiPersonSimpleThrowBold } from "react-icons/pi";
import { SuccessToast } from '../../Components/SuccessToast'

const QuestionPage = () => {
  return (
    <Fragment>
        <div className='border rounded-lg p-3'>
            <div className='mb-3 font-bold'>
                <h1 className='text-xs md:text-xl'>Ask a Public Question Here. Wondering where to Begin?
                    <HintModal />
                </h1>
            </div>
            {/* <HintModal /> */}
            <div className='mt-3'><TitleSection /></div>
            <div  className='mt-4'><CategorySection/></div>
            <div className='mt-4'>
                <QuestionArea />
            </div>
            <div>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'>
                    <PiPersonSimpleThrowBold />
                    Post Question
                </button>
            </div>
        </div>
    </Fragment>
  )
}

export default QuestionPage
