import React, { useEffect ,useState}  from 'react'
import { loaderTimer} from '../helper Functions/LoadingAnimationTimer';
import Loader from './Loader';

const NoResultForSearchBar = () => {
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        loaderTimer(setloading,600)
    },[])

  return (
    <div>
      {
            loading ?
            <div className='pt-[0rem]'><Loader/></div>
            :
            <div className='w-[50%] m-[auto] max-[1150px]:w-[65%] max-[912px]:w-[75%] max-[657px]:w-[100%]'>
                <div>
                    <img src="/E-commerce pictures/undraw_Empty_re_opql.png" loading='eager' alt="no result" />
                </div>
                <h1 className='text-center productinfo  font-bold text-[1.3rem] '>Ops, We could not find any result</h1>
            </div>
        }
    </div>
  )
}

export default NoResultForSearchBar
