import React,{useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getLink } from '../features/Checkout/PaymentLink'
import {Payment} from '../AllFilles'


const Checkout = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [loading, setloading] = useState(false)
    const{total}=useSelector(item=>item.cart)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [address, setaddress] = useState('')
    const [validName,setvalidName]=useState(false)
    const [validEmail,setvalidEmail]=useState(false)
    const [validNumber,setvalidNumber]=useState(false)
    const [validAddress,setvalidAddress]=useState(false)
    const [validPayment, setvalidPayment] = useState(false)
    const [paymentLink, setpaymentLink] = useState('')
    const nameRef=useRef()
    const emailRef=useRef()
    const addressRef=useRef()
    const numberRef=useRef()
    // function to validate the users name
    const handleName=()=>{
         if(name.trim().length === 0){
            nameRef.current.classList.add('red')
             setvalidName(false)
         }else{
          nameRef.current.classList.remove('red')
            setvalidName(true)
         }
     }
    // function to validate the users address
     const handleAddress=()=>{
        if(address.trim().length === 0){
            addressRef.current.classList.add('red')
            setvalidAddress(false)
        }else{
           addressRef.current.classList.remove('red')
           setvalidAddress(true)
    
        }
    }
    // function to validate the users phone number
     const handleNumber=()=>{
        const numberPattern=/((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/
        if(numberPattern.test(number) === false || number.length < Number(10)){
           numberRef.current.classList.add('red')
           setvalidNumber(false)
        }
        else{
           numberRef.current.classList.remove('red')
           setvalidNumber(true)
        }    
    }
    // function to validate the users email
    function handleEmail(){
        let emailpattern1=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
        let emailpattern2=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    
        if(emailpattern1.test(email)=== false  ){
           emailRef.current.classList.add('red')
           setvalidEmail(false)
        }else{
           emailRef.current.classList.remove('red')
           setvalidEmail(true)
        }
    }
    
      const handleButton=(e)=>{
        e.preventDefault()
        setvalidPayment(false)
        if(validName && validEmail && validAddress  && validNumber){
          setloading(true)
          axios.post('https://skydomee.onrender.com/pay', {
            email
          })
          .then(function (response) {
              if (response.status === false){
                setloading(false)
                alert(response.message)
                setvalidPayment(false)
               
              }else{
                setloading(false)
                dispatch(getLink(response?.data?.data?.authorization_url))
               setvalidPayment(true)
              }
          })
          .catch(function (error) {
             setloading(false)
             setvalidPayment(false)
             alert('an error, occured please try again later')
          });
        }else{
        e.preventDefault()
        handleNumber()
        handleName()
        handleEmail()
        handleAddress()
        }
      }
  return (
    <div>
        {
          validPayment ?
            <Payment/>
            :
            <form action="" className='w-[38rem] m-[auto] pt-[4rem] max-[667px]:w-[90%] max-[667px]:pt-[5.3rem]'>
              <input type="text"  required placeholder="name" value={name} ref={nameRef} onInput={(e)=>setname(e.target.value)} onChange={()=>handleName()}  className='w-[100%] block rounded-[0.2rem] px-[0.5rem] py-[0.6rem] bg-[none] my-[1rem] border-[1px] border-[#e4e1e1] outline-none' name="" id=""/>
              <input type="email" required placeholder="email" value={email} ref={emailRef} onInput={(e)=>setemail(e.target.value)} onChange={()=>handleEmail()} className='w-[100%] block rounded-[0.2rem] px-[0.5rem] py-[0.6rem] bg-[none] my-[1rem] border-[1px] border-[#e4e1e1] outline-none' name="" id=""/>
              <input type="number" required placeholder="number" value={number} ref={numberRef} onInput={(e)=>setnumber(e.target.value)} onChange={()=>handleNumber()} className='w-[100%] block rounded-[0.2rem] px-[0.5rem] py-[0.6rem] bg-[none] my-[1rem] border-[1px] border-[#e4e1e1] outline-none' name="" id=""/>
              <textarea required placeholder="address" value={address} ref={addressRef} onInput={(e)=>setaddress(e.target.value)} onChange={()=>handleAddress()} className='w-[100%] block rounded-[0.2rem] px-[0.5rem] py-[0.4rem] bg-[none] mb-[1rem] border-[1px] border-[#e4e1e1] outline-none h-[11rem] resize-none max-[500px]:p-[0.5rem] max-[500px]:h-[8.5rem]'></textarea>
                <div className="text-end">
                    <button className='w-[100%] rounded-[0.2rem] px-[1.2rem] py-[0.4rem] bg-[#38ef7d] font-bold cursor-pointer w-[12rem] h-[4rem] text-[white] outline-none hover:bg-[#17cf5e]'>
                        {
                          loading ?
                            <div className="round round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[#38ef7d] border-t-[#38ef7d] border-b-[#f1f1f1]"></div>
                            :
                            <div onClick={(e)=>handleButton(e)}>
                              <h4>Proceed to payment</h4> 
                              <div className="flex justify-center text-[1.2rem]">
                                <h3>&#8358;</h3>
                                <h3>{total.toLocaleString()}</h3>
                              </div>
                            </div>
                        }
                  </button>
                </div>
            </form>
        }
    </div>
  )
}

export default Checkout