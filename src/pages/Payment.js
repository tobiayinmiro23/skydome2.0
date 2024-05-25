import React,{useState} from 'react'
import { loaderTimer } from '../helper Functions/LoadingAnimationTimer';
import { Loader } from '../AllFilles';
import { useSelector } from 'react-redux';
const Payment = () => {
    const [loading, setloading] = useState(true)
    loaderTimer(setloading,400)
    const {Link}=useSelector(state=>state.paymentlink)

  return (
    <div className='mt-[4.5rem]'>
         {
            loading ?
            <Loader/>
            :
            <div className='w-[100%] text-center '>
              <form action={Link} target='_blank'>
                <button className=' rounded-[0.2rem] px-[1.2rem] py-[0.4rem] bg-[#38ef7d] font-bold cursor-pointer text-[white]  text-[1.3rem] outline-none hover:bg-[#17cf5e]'>Click to pay</button>
              </form>
            </div>
        }
        
    </div>
  )
}

export default Payment