import React, { Fragment } from 'react'
// import CategorySelector from './CategorySelector'
import Filters from './Filters'
// import SinglePostLayout from './SinglePostLayout'
// import SinglePost from './SinglePost'
import PersonalNav from './PersonalNav'
import QuestionPage from './QuestionPage'
import StatsPage from './StatsPage'
import MainCateporyPage from './MainCateporyPage'
import SinglePost from './SinglePost'
import SinglePostLayout from './SinglePostLayout'

const HomePage = () => {
  return (
    <Fragment>
        <div className='mt-[70px] md:mt-[50px] w-full mx-auto lg:flex p-5 md:flex gap-8 '>
            <div className='flex-[30%] hidden md:block'>
                <MainCateporyPage />
                {/* <Separator  className='bg-indigo-800 h-8' orientation='vertical'/> */}
                {/* <Separator  className='bg-indigo-800 h-8 float-right relative' orientation='vertical'/> */}
                <div className='md:mt-12'>
                    {/* <PersonalNav /> */}
                </div>
            </div>
            <div className='flex-[70%]'>
                <main>
                    <section className='flex'>
                        {/* render the small nav here */}
                        <Filters /> 
                    </section>
                    <section className='mt-4'>
                        {/* <QuestionPage /> */}
                        {/* <SinglePost /> */}
                        <SinglePostLayout />
                        <SinglePostLayout />
                        <SinglePostLayout />
                        <SinglePostLayout />
                        {/* each post as a section here */}
                    </section>
                </main>
            </div>
            <div className='flex-[30%] hidden lg:block '>
                <aside>
                    <StatsPage />
                </aside>
            </div>
        </div>
    </Fragment>
  )
}

export default HomePage
