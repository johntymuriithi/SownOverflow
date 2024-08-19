import React, { Fragment } from 'react'
import { FaUserTie } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import { useAppSelector } from '@/Types/hooksTypes';
import { getAllQuestions } from './questionsSlice';
import { Link } from 'react-router-dom';
import { CategoryGetter } from '@/Utils/CategoryName';
import { getCategories } from '../Categories/categoriesSlice';

const SinglePostLayout = () => {
    // const dispatch = useAppDispatch()
    const data = useAppSelector(getAllQuestions)
    const categories = useAppSelector(getCategories).categories

    const handleCategory = (id: number): string => {
        const category = categories.find(category => category.category_id === id)
        return category?.category_name || "";
    }

  return (
    <Fragment>
        {data.map((question) => (
            <div className='border p-3 rounded-lg mt-6 shadow-md shadow-indigo-600' key={question.id}>
            <div className='flex items-center gap-3'>
                <div>
                    <FaUserTie className='text-[30px]' />
                </div>
                <div>
                    <h2 className='font-bold text-sm'>{question.user.username}</h2>
                    <p className='text-sm'>{question.dateAsked}</p>
                </div>
            </div>
            <div className='block md:mt-5 mt-2'>
                <Link to={`question/${question.id}`}>
                    <h2 className='text-indigo-900 font-bold cursor-pointer hover:text-blue-500'>{question.title}</h2>
                    <p className='text-slate-600 md:text-sm text-xs'>{question.content.substring(0, 90)}...</p>
                </Link>
            </div>
            <div className='flex md:mt-5 justify-between mt-2'>
                <div>
                    <button className='bg-indigo-400 px-4 py-2 rounded-lg md:text-sm text-xs'>{handleCategory(question.category_id)}</button>
                </div>
                <div className='flex items-center gap-5 text-sm'>
                    <div className='flex items-center'><GiConversation /><span>{question.answers.length}</span></div>
                </div>
            </div>
        </div>
        ))}
    </Fragment>
  )
}

export default SinglePostLayout
