import React, { Fragment } from 'react'
// import CategorySelector from './CategorySelector'
import Filters from '../Features/Filters/Filters'
// import SinglePostLayout from './SinglePostLayout'
// import SinglePost from './SinglePost'
import PersonalNav from '../Features/PersonalNav/PersonalNav'
import QuestionPage from '../Features/Questions/QuestionPage'
import StatsPage from '../Features/Stats/StatsPage'
import MainCateporyPage from '../Features/Categories/MainCateporyPage'
import SinglePost from '../Features/Questions/SinglePost'
import SinglePostLayout from '../Features/Questions/SinglePostLayout'
import { useAppSelector } from '@/Types/hooksTypes'
import { getUserInfo } from '@/Features/Users/usersSlice'
import NavBar from './NavBar'

const HomePage = () => {
    const isActive = useAppSelector(getUserInfo).isActive
  return (
    <Fragment>
        <NavBar />
        <div className='mt-[70px] md:mt-[50px] w-full mx-auto lg:flex p-5 md:flex gap-8 md:min-h-[80vh] min-h-[90vh]'>
            <div className='flex-[30%] hidden md:block'>
                <MainCateporyPage />
                {/* <Separator  className='bg-indigo-800 h-8' orientation='vertical'/> */}
                {/* <Separator  className='bg-indigo-800 h-8 float-right relative' orientation='vertical'/> */}
                {isActive ? "" :
                <div className='md:mt-12'>
                 <PersonalNav />
                </div>}
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
