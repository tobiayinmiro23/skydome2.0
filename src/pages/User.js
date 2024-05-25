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
        const uid = user.uid;
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
            <h1 className='text-center'>welcome {email}</h1>
        }
    </div>
  )
}

export default User