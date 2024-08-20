import { Fragment } from 'react'
import { BiUpvote } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'
import { GiConversation } from 'react-icons/gi'
import SingleAnswer from '../Answers/SingleAnswer'
import AnswerModal from '../Answers/AnswerModal'
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import EditAnswerModal from './EditAnswerModal'
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes'
import { fetchByCategory, getQuestionById,} from './questionsSlice'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../Users/usersSlice'
import { getCategories } from '../Categories/categoriesSlice'

const SinglePostMain = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => getQuestionById(state, Number(id)!))
    const userInfo = useAppSelector(getUserInfo)
    const answers = data?.answers // not sure of its effects
    const count = answers ? answers.length : 0
    const categories = useAppSelector(getCategories).categories

    const handleCategory = (id: number): string => {
        const category = categories.find(category => category.category_id === id)
        return category?.category_name || "";
    }

    const handlePost = (value: string) => {
        dispatch(fetchByCategory(value))
    }
       
    if (!data) {
        return (
          <>
          <h1>Question not Found</h1>
          </>
        )
      }

    if (!answers) {
        return (
            <Fragment>
            {
                <div className='min-h-[600px] bg-slate-200 rounded-lg p-3'>
                <div className='mb-4'>
                    <h1 className='font-bold md:text-xl'>{data.title}</h1>
                </div>
                <div className='md:flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <FaUserTie className='text-[30px]' />
                        </div>
                        <div>
                            <h2 className='font-bold text-sm'>{data.user.username}</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                     <div className='flex items-center gap-5 text-sm'>
                            <div className='flex items-center'><GiConversation /><span>0</span></div>
                            <div className='flex items-center'><BiUpvote /><span>2</span></div>
                     </div>
                    <div>
                        <button className='bg-indigo-400 md:px-3 md:py-2 px-2 py-1 rounded-lg text-sm'
                        onClick={() => {handlePost(handleCategory(data.category_id))}}>{handleCategory(data.category_id)}</button>
                    </div>
                    </div>
                </div>
    
                <div className='mt-3'>
                    <button className='bg-slate-400 w-full text-justify p-2 rounded-lg text-xs'><span className='pr-2 text-xs'>Asked:</span>{data.dateAsked}</button>
                </div>
    
                <hr className='border border-green-300 mt-7'/>
                <div className='mt-3 text-[14px] md:text-[17px]'>
                   {data.content}
                </div>
                <hr className='border border-green-300 mt-7'/>
                <div className='flex items-center justify-between'>
                <div className='md:mt-3 mt-1 flex gap-2'>
                    <AnswerModal />
                    <button className='border border-indigo-600 rounded md:p-2 px-1 bg-indigo-300'>
                        <BiSolidUpvote />
                    </button>
                    <button className='border border-indigo-600 rounded md:p-2 px-1 bg-indigo-300'>
                        <BiSolidDownvote />
                    </button>
                    <EditAnswerModal />
                </div>
                </div>
                <hr className='border border-green-300 mt-3'/>
    
                <div className='mt-3'>
                    <h1 className='text-3xl italic font-extralight text-indigo-400'>{count === 1 ? `${count} ANSWER` : `${count} ANSWERS`}</h1>
                </div>
                <hr className='border border-green-300 mt-3'/>
                <div className='md:p-4 mt-3'>
                    {/* Answers Here */}
                </div>
            </div>
            }
      </Fragment>
        )
      }

  return (
    <Fragment>
          {
              <div className='min-h-[654px] bg-slate-200 rounded-lg p-3 md:p-20 md:w-[60%] md:m-auto border border-slate-100'>
              <div className='mb-4'>
                  <h1 className='font-bold md:text-xl'>{data.title}</h1>
              </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
              <div className='md:flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                      <div>
                          <FaUserTie className='text-[30px]' />
                      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                      <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                          <h2 className='font-bold text-sm'>{data.user.username}</h2>
                      </div>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                  <div className='flex items-center gap-2'>
                   <div className='flex items-center gap-5 text-sm'>
                          <div className='flex items-center'><GiConversation /><span>{data.answers.length}</span></div>
                   </div>
                  <div>
                      <button className='bg-indigo-400 md:px-3 md:py-2 px-2 py-1 rounded-lg text-sm'
                      onClick={() => {handlePost(handleCategory(data.category_id))}}>{handleCategory(data.category_id)}</button>
                  </div>
                  </div>
              </div>
  
              <div className='mt-3'>
                  <button className='bg-slate-400 w-full text-justify p-2 rounded-lg text-xs'><span className='pr-2 text-xs'>Asked:</span>{data.dateAsked}</button>
              </div>
  
              <hr className='border border-green-300 mt-7'/>
              <div className='mt-3 text-[14px] md:text-[17px]'>
                 {data.content}
              </div>
              <hr className='border border-green-300 mt-7'/>
              {userInfo.user ? 
                <div className='flex items-center justify-between'>
                <div className='md:mt-3 mt-1 flex gap-2'>
                    <AnswerModal questionInfo={{id: data.id, content: data.content}}/>
                    {data.user.id === userInfo.user?.id ? <EditAnswerModal questionInfo={{id: data.id, content: data.content}}/> : ""}
                </div>
                </div> : ""}
              <hr className='border border-green-300 mt-3'/>
  
              <div className='mt-3'>
                  <h1 className='text-3xl italic font-extralight text-indigo-400'>{count === 1 ? `${count} ANSWER` : `${count} ANSWERS`}</h1>
              </div>
              <hr className='border border-green-300 mt-3'/>
              <div className='md:p-4 mt-3'>
                  {/* Answers Here */}
                   <SingleAnswer answers={answers}/>
              </div>
          </div>
          }
    </Fragment>
  )
}

export default SinglePostMain