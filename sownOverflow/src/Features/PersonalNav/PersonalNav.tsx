import { Separator } from '@/components/ui/separator'
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes';
import React, { Fragment, useState } from 'react'
import { VscSignOut } from "react-icons/vsc";
import { getUserInfo, logOut } from '../Users/usersSlice';
import { fetchUserComments, fetchUserQuestions } from '../Questions/questionsSlice';
import { useNavigate } from 'react-router-dom';

const PersonalNav = () => {
  const [valueComment, setValueComment] = useState<boolean>(false)
  const [valueQuestion, setValueQuestion] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userInfo = useAppSelector(getUserInfo)

  const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(logOut())
  }

  const fetchQuestions = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()

    try {
      await dispatch(fetchUserQuestions(userInfo.user!.token)).unwrap()
      setValueQuestion(false)
    } catch(err) {
      setValueQuestion(true)
    }
  }

  const fetchComments = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    
    try {
      await dispatch(fetchUserComments(userInfo.user!.token)).unwrap()
      setValueComment(false);
    } catch(err) {
      console.log('there')
      setValueComment(true);
    }
  }

  setTimeout(() => {
    setValueComment(false);
    setValueQuestion(false)
  }, 2000)

  return (
    <Fragment>
        <div className='block bg-slate-400 min-h-[200px] rounded-lg p-3'>
            <div className='text-center'>
                <h1>Your Activity</h1>
            </div>
            <Separator className='mt-1'/>
            <div className='mt-3'>
                <ol>
                    <li className='mt-5 cursor-pointer' onClick={fetchQuestions}>Questions {valueQuestion ? <i className='font-bold text-red-600 text-sm'>No Questions</i> : ""}</li>
                    <li className='mt-5 cursor-pointer' onClick={fetchComments}>Answers {valueComment ? <i className='font-bold text-red-600 text-xs'>You've made no Comments so far</i> : ""}</li>  
                </ol>
            </div>
            <Separator  className='bg-slate-200 mt-2'/>
            <div>
          <button className='bg-indigo-800 flex justify-center gap-1 items-center mt-3 py-2 rounded-lg text-slate-100 
            font-semibold hover:bg-indigo-700 w-full'
            onClick={handleLogOut}
            >
               <VscSignOut />
                Sign Out</button>
        </div>
        </div>
    </Fragment>
  )
}

export default PersonalNav
