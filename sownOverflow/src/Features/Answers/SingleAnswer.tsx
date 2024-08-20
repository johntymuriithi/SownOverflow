import React, { Fragment } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { EditModal } from './EditModal';
import { AnswerProps } from '@/Types/questionsTypes';
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes';
import { getUserInfo } from '../Users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { deleteAnswer } from '../Questions/questionsSlice';
import { TimeAgo } from '@/Components/TimeAgo';

const SingleAnswer: React.FC<AnswerProps> = ({answers}) => {
    const userInfo = useAppSelector(getUserInfo)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const token = userInfo.user?.token

    // come back here
    const handlePost = async (id: number) => {
        const data = {token: token!, id: id}
    
        try {
          await dispatch(deleteAnswer(data)).unwrap()
          alert("Answer Deleted, Go Home, then comeback")
          navigate('/')
        } catch(err) {
          console.log(err)
        }
       }

  return (
    <Fragment>
        {answers.map((answer) => (
            <div className='border border-indigo-500 p-3 rounded-lg mt-5' key={answer.id}>
            <div className='flex justify-between items-center gap-1'>
                <div className='flex items-center gap-2'>
                    <FaUserTie className='md:text-[30px] text-[20px]' />
                    <h1 className="text-xs md:text-sm font-semibold">{answer.user.username}</h1>
                    <button className='flex bg-indigo-300 rounded-lg px-1 md:text-sm text-xs' 
                    disabled><span><TimeAgo timestamp={answer.dateAnswered} /></span></button>
                </div>
                {
                    answer.user.level === 'expert' ?
                        <div>
                             <button className='flex bg-indigo-500 rounded-lg px-1 md:text-sm text-xs' disabled>Expert Say</button>
                        </div> : ""
                }
            </div>
            <div className='mt-3 text-sm'>
                <h1>
                    {answer.content}
                </h1>
            </div>
            <div className='flex items-center mt-2 gap-6'>
                {answer.user.id === userInfo.user?.id ? <EditModal answerInfo={{id: answer.id, content: answer.content}}/> : ""}
                {answer.user.id === userInfo.user?.id ? <button className='border border-red-300 rounded'
                onClick={() => {
                    handlePost(answer.id)
                }}>Delete</button> : ""}
            </div>
        </div>
        ))}
    </Fragment>
  )
}

export default SingleAnswer
