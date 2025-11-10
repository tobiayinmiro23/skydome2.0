import React from 'react'
import { Link } from 'react-router-dom'
import { advertisement } from '../database/advertisement'

const Advertisement = ({setdisplayAdvert}) => {
  return (
    <div>
        <div className=' bg-[#f5f7f7] mt-[2rem] pb-[1rem]'>
            <div className='mt-[2rem]'>
                <div className='flex space-around pt-[1rem] max-[1388px]:mr-[1rem]'>
                    <h2 className='pl-[0.7rem] font-bold max-[432px]:text-[0.92rem]'>ADS</h2>
                    <div onClick={()=>setdisplayAdvert(false)} className="ml-[auto] mr-[1rem] h-[1rem] w-[1rem] cursor-pointer">
                        <img src="/E-commerce pictures/close (2).png" alt="img" />
                    </div>

                </div>
                <div className='pt-[0rem] flex item-center max-[394px]:block'>
                    <h1 className='text-[2.2rem] font-bold ml-[1rem] max-[999px]:text-[1.8rem] max-[999px]:leading-[1.9rem] max-[394px]:text-[1.4rem]'>Get more with sky dome up to 50% off sign up to get exclusive access</h1>
                    <div className="sub-btn-container text-center max-[394px]:text-start max-[394px]:pt-[0.4rem]">
                        <Link to='signup'><button className="ml-[1rem] w-[5.3rem] mt-[0.6rem] py-[0.35rem] transition-[0.65s] rounded-[0.2rem] bg-[#d7f1e1] cursor-pointer outline-none border-[2px] border-[#38ef7d] hover:bg-[#38ef7d] hover:duration-[0.85s] max-[1297px]:mr-[1rem]">sign up</button></Link>
                    </div>
                </div>

            </div>
            <div className='flex item-center justify-center flex-wrap mb-[2rem]'>
               {
                advertisement.map(item=>{
                    return  <div className='block m-[1rem] max-[334px]:m-[0.6rem] max-[309px]:m-[0.3rem]' key={item.id}>
                    <div className="w-[8.35rem] mr-[0.1rem] cursor-pointer h-[10rem] hover:scale-[0.9] hover:duration-[0.6s]">
                        <img src={item.img} loading="lazy" alt="img" />
                    </div>
                    <h3 className='font-semibold text-[1rem] productinfo'>&#8358;{item.newPrice}</h3>
                    <del className='text-[0.87rem] productinfo'><p>&#8358;{item.oldPrice}</p> </del>
                </div>
                })
               }
            </div>

        </div>
    </div>
  )
}

export default Advertisement
