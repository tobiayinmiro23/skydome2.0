import React from 'react'

const Loader = () => {
  return (
    <div>
        <div  className="loading w-[98.5vw] h-[100vh] pt-[0rem]">
          <div className="loader ml-[45%]">
            <div className="loader1  w-[1.9rem] h-[1.9rem] rounded-[50%] m-[0.25rem] bg-[#38ef7d]"></div>
            <div className="loader2  w-[1.9rem] h-[1.9rem] rounded-[50%] m-[0.25rem] bg-[#38ef7d]"></div>
            <div className="loader3  w-[1.9rem] h-[1.9rem] rounded-[50%] m-[0.25rem] bg-[#38ef7d]"></div>
          </div>
      </div>
    </div>
  )
}

export default Loader