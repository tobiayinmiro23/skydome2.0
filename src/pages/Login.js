import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

const Login = () => {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
  const [signup, setsignup] = useState(false)
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [errormsg, seterrormsg] = useState('')

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === 'signup') setsignup(true)
  }, [])

  const SignUp = (e) => {
    e.preventDefault()
    seterrormsg('')
    setloading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setloading(false)
        navigate('/user')
      })
      .catch((error) => {
        setloading(false)
        const errorCode = error.code;
        seterrormsg(errorCode.split('/')[1])
        if (errorCode === 'auth/internal-error') seterrormsg('unable to sign up please try again later')
        if (errorCode === 'auth/weak-password') seterrormsg('password should be atleast 6 characters')
      });
  }

  const logIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setloading(false)
        navigate('/user')
      })
      .catch((error) => {
        e.preventDefault()
        setloading(false)
        const errorCode = error.code;
        seterrormsg(errorCode.split('/')[1])
        if (errorCode === 'auth/internal-error') seterrormsg('unable to sign in please try again later')
      });


  }
  const handleButton = (e) => {
    e.preventDefault()
   if (email.trim() === '' || password.trim() === '') return
    else {
      seterrormsg('')
      setloading(true)
      if (signup) {
        SignUp(e)
      } else {
        logIn(e)
      }
    }
  }
  return (
    <div className="Signup">
      <div style={{ boxShadow: ' 0px 2px 5px rgba(0, 0, 0, 0.4)' }} className='w-[20rem] m-[auto] text-center pt-[0.5rem] bg-[white] rounded-[0.18rem]  max-[345px]:w-[90%]'>
        <h1 className='pt-[1rem] text-[2.2rem] font-bold'>{signup ? 'Sign Up' : 'Log in'}</h1>
        <form action="">
          <div className="flex w-[90%] item-center m-[auto] mt-[3rem] border-b-[2px] border-[black]">
            <EmailIcon />
            <input placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="email" />
          </div>
          <div className="flex w-[90%] item-center m-[auto] mt-[3rem] border-b-[2px] border-[black]">
            <HttpsIcon />
            <input placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="password" />
          </div>
          {!signup && <p className='mt-[0.4rem]'><Link to='/forgotpassword'>forgot password ?</Link></p>}
          <p className='font-bold text-[red] mt-[0.5rem]'>{errormsg}</p>
          {
            loading ?
              <button className="w-[85%] rounded-[0.2rem] px-[3rem] py-[0.4rem] bg-[#38ef7d] font-bold cursor-pointer mt-[1.4rem] mb-[1.7rem] outline-none hover:bg-[#17cf5e]">
                <div class="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[#38ef7d] border-t-[#38ef7d] border-b-[#f1f1f1] "></div>
              </button>
              :
              <button onClick={(e) => handleButton(e)} className="w-[85%] rounded-[0.2rem] px-[3rem] py-[0.4rem] bg-[#38ef7d] font-bold cursor-pointer mt-[1.4rem] mb-[1.7rem] outline-none hover:bg-[#17cf5e]">
                <h3 >{signup ? 'Create account' : 'Log in'}</h3>
              </button>
          }
        </form>
      </div>
    </div>
  )
}

export default Login
