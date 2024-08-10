import React, { Fragment } from 'react'

const TitleSection = () => {
  return (
    <Fragment>
        <div className="bg-slate-300 p-5 rounded-lg">
            <div>
                <h1 className='font-sans font-medium'>Title</h1>
                <p className='font-serif text-sm'>Be specific and imagine you’re asking a question to another person.</p>
            </div>
            <div className='mt-3'>
                <input 
                className='w-full p-1 rounded'
                type='text'
                placeholder='e.g Have you ever heard of copouts disease found in Cows' 
                ></input >
                <div className='mt-3'>
                    <button className='bg-inherit flex justify-center items-center 
                    px-3 py-1 rounded-lg text-indigo-800 font-semibold border
                     border-indigo-800 hover:bg-indigo-300'>Done</button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default TitleSection
