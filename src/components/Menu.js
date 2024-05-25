import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import {menu} from '../database/menu'
import { handleMenu} from '../features/home/Menu'

const Menu = () => {
    const {mode} =useSelector(state=>state.menu)
    const dispatch=useDispatch()
  return (
   <div>
    {
        mode.navMenu &&
        <div className='Menu w-[14rem] z-20 fixed top-[3.5rem]  '>
            {
                menu.map(item=>{
                    return <Link to={item.to}>
                    <div key={item.id} onClick={()=>dispatch(handleMenu())} className='flex p-[0.4rem] border-b-[1px] border-[#b5b2b2] pr-[2rem] bg-[khaki] cursor-pointer hover:bg-[#38ef7d]'>
                        <div className="phone-img container-img w-[1.4rem] h-[1.4rem]">
                            <img src={item.src} alt="" />
                        </div>
                        <p>{item.name}</p>
                    </div>
                </Link>
                })
            }
        <Link to='/signup'>
            <div  onClick={()=>dispatch(handleMenu())} className='p-[0.4rem] text-center border-b-[1px] border-[#f1f1f1] pr-[2rem] bg-[black] cursor-pointer '>
                <button className='px-[2rem] py-[0.3rem]  rounded-[0.2rem] bg-[#44bd32] hover:bg-[#44bd32b3]'>sign up</button>
            </div>
        </Link>
        <Link to='/login'>
            <div onClick={()=>dispatch(handleMenu())} className='p-[0.4rem] text-center border-b-[1px] border-[#f1f1f1] pr-[2rem] bg-[black] cursor-pointer '>
                <button className='px-[2rem] py-[0.3rem]  rounded-[0.2rem] bg-[#44bd32] hover:bg-[#44bd32b3]'>log in</button>
            </div>
        </Link>

    </div>
    }
   </div>
  )
}

export default Menu