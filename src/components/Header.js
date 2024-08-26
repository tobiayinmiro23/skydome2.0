import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { handleMenu } from '../features/home/Menu'
import { setCart } from '../features/home/AddToCart';
import { setCookie, getCookie } from '../helper Functions/Cookie'



const Header = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.addToCart)
    useEffect(() => {
        let cartCookieData = getCookie()
        if (cartCookieData?.length) {
            dispatch(setCart(cartCookieData))
        } else {
            setCookie([])
            dispatch(setCart([]))
        }


    }, [])
    const pingServer = async () => {
        try {
            let response = axios({
                method: 'get',
                url: 'https://skydomee.onrender.com/'
            })
            let data = await response
            console.log(data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <nav className='w-full bg-[#38ef7d] z-50 px-[0.67rem] fixed flex items-center justify-between h-[3.4rem]'>
                <div className="cursor-pointer" onClick={() => dispatch(handleMenu())}>
                    <img src="/E-commerce pictures/icons8-menu-24.png" alt="" />
                </div>
                <Link to='/'>
                    <div className="flex items-center">
                        <div className="company-logo-container w-[2.6rem] h-[2.6rem]">
                            <img
                                src="/E-commerce pictures/bag (1).png"
                                alt=""
                            />
                        </div>
                        <div className="text-[1.9rem] font-extrabold">
                            <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> SkyDome</h1>
                        </div>
                    </div>
                </Link>
                <Link to='/cart' onClick={pingServer}>
                    <div className="cart-container relative" title="my cart" >
                        <div>
                            <div className="cart-img-container h-[2rem] w-[2rem]">
                                <img src="/E-commerce pictures/shopping-cart.png" alt="" />
                            </div>
                            <div title="cart amount" className="cart-count bg-[red] text-[13px] w-[1.2rem] pb-[0.15rem] text-center rounded-[1.8rem] absolute top-[-0.3rem] left-[1.2rem]">{cart?.length}</div>
                        </div>
                    </div>
                </Link>
            </nav>
            <Menu />
        </div>

    )
}

export default Header
