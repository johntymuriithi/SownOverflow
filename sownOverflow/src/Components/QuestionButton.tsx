import React, { Fragment } from 'react'
import { BsFillQuestionOctagonFill } from "react-icons/bs";

const QuestionButton = () => {
  return (
    <Fragment>
        <div>
            <button className='bg-inherit flex justify-center items-center text-sm
                px-2 py-2 rounded-lg text-indigo-800 font-semibold border
              border-indigo-800 hover:bg-indigo-300 gap-1 '>
                <BsFillQuestionOctagonFill />
                Ask Question
            </button>
        </div>
    </Fragment>
  )
}

export default QuestionButton
