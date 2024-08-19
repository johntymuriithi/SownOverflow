import React, { Fragment, useState } from 'react'
import HintModal  from '../../Components/HintModal'
import QuestionArea from './QuestionArea'
import { PiPersonSimpleThrowBold } from "react-icons/pi";
import { postQuestion } from './questionsSlice'
import { useAppDispatch, useAppSelector } from '@/Types/hooksTypes'
import { getUserInfo } from '../Users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { QuestionsCategory } from './QuestionsCategory'
import { getCategories } from '../Categories/categoriesSlice';

const QuestionPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userInfo = useAppSelector(getUserInfo)
    const frameworks = useAppSelector(getCategories).categories
    const token = userInfo?.user?.token

    const [value, setValue] = useState<string>("")
    const [value1, setValue1] = useState<string>("")
    const [text, setText] = useState<string>("")

    const [title, setTitle] = useState<string>("")

   const controlProps = {
    value: { value: value, setValue: setValue},
    text: {text: text, setText: setText},
  }

  const controlProps1 = {
    value: { value1: value1, setValue1: setValue1},
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
   }

   const findCategory = (id : string): number => {
    const category = frameworks.find(framework => framework.category_name === id)
    return category!.category_id
   }

   const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data = {token: token!, q_title: title, q_description: text,
        category_id: findCategory(value1), q_date: "1 months ago"}

    try {
      await dispatch(postQuestion(data)).unwrap()
      alert("Question Submitted, Go Home and Refresh, then comeback")
      navigate('/')
    } catch(err) {
      console.log(err)
    }
   }
  return (
    <Fragment>
        <div className='border rounded-lg p-3'>
            <div className='mb-3 font-bold'>
                <h1 className='text-xs md:text-xl'>Ask a Public Question Here. Wondering where to Begin?
                    <HintModal />
                </h1>
            </div>
            {/* title here */}
            <div className='mt-3'>
                <div className="bg-slate-300 p-5 rounded-lg">
                    <div>
                        <h1 className='font-sans font-medium'>Title</h1>
                         <p className='font-serif text-sm'>Be specific and imagine you’re asking a question to another person.</p>
                    </div>
                <div className='mt-3'>
                 <input 
                    className='w-full p-1 rounded'
                    value={title}
                    onChange={handleTitle}
                    type='text'
                    placeholder='e.g Have you ever heard of copouts disease found in Cows' 
                ></input >
                </div>
                 </div>
            </div>
            {/* category */}
            <div  className='mt-4'>
                <div className='bg-slate-300 p-5 rounded-lg'>
                    <label className='font-medium font-sans'>Tag / Category</label>
                    <div className='mt-3'>
                     <QuestionsCategory controlProps1={controlProps1}/>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <QuestionArea controlProps={controlProps}/>
            </div>
            <div>
                <button className='bg-indigo-800 flex justify-center items-center 
                        px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700 w-full mt-3 gap-1'
                        onClick={handlePost}>
                    <PiPersonSimpleThrowBold />
                    Post Question
                </button>
            </div>
        </div>
    </Fragment>
  )
}

export default QuestionPage
