import { getQuestionStatus, modalController } from '@/Features/Questions/questionsSlice';
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes';
import React, { Fragment } from 'react'
import { BsFillQuestionOctagonFill } from "react-icons/bs";


const QuestionButton = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(getQuestionStatus)

  const handleStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(modalController())
  }

  return (
    <Fragment>
        <div>
            <button className='bg-inherit flex justify-center items-center text-sm
                px-2 py-2 rounded-lg text-indigo-800 font-semibold border
              border-indigo-800 hover:bg-indigo-300 gap-1' disabled={status ? true : false}
              onClick={handleStatus}>
                <BsFillQuestionOctagonFill />
                Ask Question
            </button>
        </div>
    </Fragment>
  )
}

export default QuestionButton
