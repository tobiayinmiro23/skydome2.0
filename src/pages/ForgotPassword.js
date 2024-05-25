import React,{useState} from 'react'
import { getAuth ,sendPasswordResetEmail} from "firebase/auth";
const auth = getAuth();

const ForgotPassword = () => {
    const[email,setemail]=useState('')

    const auth = getAuth();

    const passwordResetEmail=(e)=>{
            e.preventDefault()
            sendPasswordResetEmail(auth,email)
            .then(() => {
              alert('password reset email sent')
            }).catch((error) => {
              const errorMessage = error.message;
              alert(errorMessage)
            });
      }
  return (
    <div className='bg-[#f1f1f1] w-[100vw] h-[100vh] m-[auto]'>
        <div className='pt-[3rem]'>
            <form action="" method="" className='flex justify-center item-center h-[fit-content] max-[390px]:block max-[390px]:m-[auto]'> 
              <input name="email" onChange={(e)=>setemail(e.target.value)}  style={{boxShadow:' 0px 1px 2px rgb(200, 198, 198)'}} className='w-[20rem] block rounded-[0.35rem] px-[0.5rem] py-[0.4rem] bg-[white] my-[1rem] outline-none max-[492px]:w-[55%] max-[390px]:m-[auto] max-[390px]:w-[90%]' required placeholder="Email" type="email" />
              <button  onClick={(e)=>passwordResetEmail(e)} style={{boxShadow:' 0px 1px 2px rgb(200, 198, 198)'}} className='py-[0.4rem] ml-[1.2rem] px-[0.6rem] rounded-[0.35rem] h-[fit-content]  bg-[#38ef7d] cursor-pointer hover:bg-[#17cf5e] max-[390px]:text-center max-[390px]:w-[90%] max-[390px]:mt-[1rem]'>Send reset email</button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword