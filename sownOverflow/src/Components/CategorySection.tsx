import React, { Fragment } from 'react'
import { CategoryTags } from './CategoryTags'

const CategorySection = () => {
  return (
    <Fragment>
        <div className='bg-slate-300 p-5 rounded-lg'>
            <label className='font-medium font-sans'>Tag / Category</label>
            <div className='mt-3'>
                <CategoryTags />
            </div>
        </div>
    </Fragment>
  )
}

export default CategorySection
