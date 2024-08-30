import React from 'react'
import { Link } from 'react-router-dom'

const LiveNow = () => {
    return (
        <div className='h-[80vh] dark:text-black  flex justify-center items-center w-full'>

            <div className='flex flex-col justify-between items-center text-center p-6 py-8 w-[19rem] sm:w-[28rem] h-[14rem] sm:h-[16rem]  rounded-2xl bg-gradient-to-br from-pink-300  via-purple-300 to-purple-400 '>
                <div>
                    <h1 className='text-3xl md:text-[2.7rem] font-bold'>We are Live Now!</h1>
                    <p className='text-sm sm:text-base'>Our new feature is now <span className='font-bold'>Live and ready </span>for you to explore. Go ahead and give it a try</p>
                </div>
                <Link to='/home-page'>
                    <button className='bg-black text-white p-1 px-4 text-sm sm:text-lg rounded-md cursor-pointer'>
                        Get started
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LiveNow