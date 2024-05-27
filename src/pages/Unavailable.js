import React from 'react'
import { Link } from 'react-router-dom'

const Unavailable = () => {
  return (
    <div>
      <div className='w-[50%] m-[auto] mt-[2rem] max-[1150px]:w-[65%] max-[912px]:w-[75%] max-[657px]:w-[100%] max-[537px]:mt-[5rem]'>
                <div>
                    <img src="/E-commerce pictures/undraw_server_down_s4lk.png" loading='eager' alt="" />
                </div>
                <div className='text-center' >
                <h1 className='text-center productinfo  font-bold text-[1.3rem] '>This page is currently unavailable</h1>
                    <div className="btnContainer mt-[0.7rem]">
                    <Link to="/"><button className=' rounded-[2.2rem] px-[1.4rem] py-[0.5rem] bg-[#38ef7d]  cursor-pointer text-[white]  text-[1.2rem] outline-none hover:bg-[#17cf5e] max-[509px]:px-[1rem]'>Back to home page</button></Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Unavailable