import React, { Fragment } from 'react'
import { CategoryTags } from '../../Components/CategoryTags'

const MainCateporyPage = () => {
  return (
   <Fragment>
    <div className='bg-slate-500 md:w-[300px] m-auto h-[130px] rounded-lg p-5'>
                    <h1 className='mb-6 text-lg text-slate-100 font-bold'>Explore Categories</h1>
                    <CategoryTags />
                </div>
   </Fragment>
  )
}

export default MainCateporyPage
