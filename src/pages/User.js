import React,{useState,useEffect} from 'react'
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { Loader } from '../AllFilles';
import { loaderTimer } from '../helper Functions/LoadingAnimationTimer';


const User = () => {
    const [loading, setloading] = useState(true)
    const [email, setemail] = useState('')
    useEffect(()=>{
    loaderTimer(setloading,400)
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setemail(user.email)
        }
    });
    },[])
  return (
    <div>
        {
            loading ?
            <div className='pt-[14rem]'><Loader/></div>
            :
           <div> {email !== '' && <h1 className='text-center font-bold mt-[3.5rem] productinfo text-[1.3rem]'>welcome {email}</h1>}</div>
        }
    </div>
  )
}

export default User
