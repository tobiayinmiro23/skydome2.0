import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader, NoResult } from '../AllFilles';
import { cartTotal } from '../features/Cart/Cart'
import { useDispatch } from 'react-redux'
import { allProductDb } from '../database/allProductDb'
import { loaderTimer } from '../helper Functions/LoadingAnimationTimer';
import { setCookie, getCookie } from '../helper Functions/Cookie'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
    const [loading, setloading] = useState(true)
    const [size, setsize] = useState(31)
    const [Cart, setCart] = useState([])
    const [productPrice, setproductPrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let cartCookieData = getCookie()
    useEffect(() => {
        loaderTimer(setloading, 400)
        window.scrollTo(0, 0)
        // code to get the product id's from cookies ,loop through it and display it
        if (cartCookieData.length) {
            let memory = []
            cartCookieData?.forEach(item => {
                let data = allProductDb.filter(res => {
                    return res.no === item
                })
                if (data.length !== 0) {
                    memory.push(data)
                    let result = memory.map(item => {
                        return item[0]
                    })
                    setCart(result)
                    getTotal(result)
                }
            })
        }
    }, [])
    // function to calculate the total price of products in the cart
    const getTotal = (data) => {
        var productPrice = []
        data?.map(cid => {
            productPrice.push(cid.productprice * cid.quantity)
            return cid.productprice
        })
        let price = productPrice.reduce((cid, acc) => {
            return cid + acc
        }, 0)
        setproductPrice(price)
        dispatch(cartTotal(price))
    }


    useEffect(() => {
        getTotal(Cart)
    },
        [Cart]
    )
    const handleDeleteCart = (data) => {
        let newCart = Cart.filter(item => {
            return item.id !== data.id
        })
        setCart(newCart)
        let memory = []
        newCart.map(item => {
            return memory.push(item.no)
        })
        setCookie(memory)
        if (Cart.length === 1) navigate('/')
    }

    const increaseProductQuantity = (item) => {
        item.quantity += 1
        setproductPrice(productPrice + item.productprice)
    }

    const decreaseProductQuantity = (item) => {
        if (item.quantity === 1) return
        item.quantity -= 1
        setproductPrice(productPrice - item.productprice)
    }

    const increaseProductSize = (item) => {
        if (item.shoesize === 59) return
        item.shoesize += 1
        setsize(item.shoesize)
    }


    const decreaseProductSize = (item) => {
        if (item.shoesize === 10) return
        item.shoesize -= 1
        setsize(item.shoesize)
    }

    return (
        <div>
            {
                loading ?
                    <div className='pt-[14rem]'><Loader /></div>
                    :
                    <div>
                        {
                            Cart.length === 0 ?
                                <div className='mt-[3.5rem]'><NoResult /></div>
                                :
                                <div className='flex pt-[5.3rem] w-[100%] item-start max-[855px]:m-[auto] max-[855px]:block max-[855px]:w-[100%] max-[855px]:h-[20vh] max-[855px]:pt-[1rem]'>
                                    <div className=' max-[855px]:pb-[7rem] max-[855px]:h-[80vh] max-[855px]:overflow-auto'>
                                        {
                                            Cart.map(cid => {
                                                return <div key={cid.id}>
                                                    <div style={{ boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.378)' }} className='flex item-start w-[45rem] mb-[1.3rem] mx-[4rem] bg-[#faebd788] p-[1rem]  max-[1125px]:w-[38rem] max-[1033px]:w-[36rem] max-[1033px]:mb-[2rem] max-[1033px]:ml-[2rem] max-[1033px]:mr-[1rem] max-[898px]:w-[35rem] max-[898px]:mx-[1rem] max-[898px]:mb-[1rem] max-[855px]:w-[85%] max-[855px]:m-[auto] max-[855px]:my-[2rem] max-[743px]:w-[90%] max-[535px]:w-[95%]'>
                                                        <div className='one'>
                                                            <div className="flex item-start">
                                                                <div ><img className='w-[8rem] h-[6rem]  max-[655px]:w-[7.3rem] max-[655px]:h-[5.3rem] max-[430px]:mr-[2rem] max-[381px]:w-[6rem] max-[381px]:h-[5rem] max-[341px]:w-[7rem] max-[381px]:h-[4.7rem]' src={cid.productimage1} alt="" /></div>
                                                                <h2 className='ml-[1rem] text-[1.35rem] font-bold max-[655px]:text-[1.18rem] max-[535px]:ml-[0.5rem] max-[436px]:text-[1.12rem] max-[381px]:text-[1rem]'>{cid.productname}</h2>
                                                            </div>
                                                            <div onClick={() => handleDeleteCart(cid)} className=" w-[fit-content] rounded-[0.3rem] p-[0.3rem] pt-[0.15rem] bg-[red] cursor-pointer mt-[1rem] hover:bg-[#e41717]" >
                                                                <DeleteIcon className='text-[white] ' sx={{ fontSize: '1.3rem' }} />
                                                            </div>
                                                        </div>
                                                        <div className='ml-[auto] mr-[1rem]  max-[655px]:mr-[0.5rem] max-[358px]:mr-[0rem] '>
                                                            <span className='flex mb-[2rem] ml-[2rem] productinfo text-[1.1rem] max-[381px]:text-[0.95rem]'><h3>&#8358;</h3> <h3>{cid.productprice.toLocaleString()}</h3></span>
                                                            <div className="qtyContainer flex item-center ml-[2rem]">
                                                                {/* <div onClick={() => increaseProductQuantity(cid)} style={{ boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' }} className="add w-[1.75rem] h-[1.9rem]  bg-[#38ef7d] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] hover:bg-[#17cf5e] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><img className='mt-[0.43rem] w-[0.94rem] m-[auto] h-[0.94rem] max-[463px]:w-[0.74rem] max-[463px]:h-[0.74rem] max-[463px]:mt-[0.43rem]' src="/productimage/plus.png" alt="" /></div> */}
                                                                <div onClick={() => increaseProductQuantity(cid)} style={{ boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' }} className="add w-[1.75rem] h-[1.9rem]  bg-[#38ef7d] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] hover:bg-[#17cf5e] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><AddIcon /></div>
                                                                <p className='quantity font-bold mx-[0.7rem] productinfo text-[1.1rem]  max-[463px]:text-[1rem]'>{cid.quantity}</p>
                                                                <div onClick={() => decreaseProductQuantity(cid)} style={cid.quantity === 1 ? { background: ' #76ae8b9c', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' } : { background: '#38ef7d', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' }} className="add w-[1.75rem] h-[1.9rem]  bg-[#38ef7d] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><RemoveIcon /></div>
                                                            </div>
                                                            {
                                                                cid.shoe &&
                                                                <div className='mt-[0.3rem]'>
                                                                    <div className="qtyContainer flex item-center ml-[2rem]">
                                                                        <div onClick={() => increaseProductSize(cid)} style={cid.shoesize >= 59 ? { background: ' #76ae8b9c', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' } : { background: '#38ef7d', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' }} className="add w-[1.75rem] h-[1.9rem] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] hover:bg-[#17cf5e] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><AddIcon /></div>
                                                                        <p className='quantity font-bold mx-[0.4rem] productinfo text-[1.1rem] max-[463px]:text-[1rem]'>{cid.shoesize}</p>
                                                                        <div onClick={() => decreaseProductSize(cid)} style={cid.shoesize <= 10 ? { background: ' #76ae8b9c', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' } : { background: '#38ef7d', boxShadow: ' 0px 3px 9px rgb(208, 201, 201)' }} className="add w-[1.75rem] h-[1.9rem] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><RemoveIcon /></div>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                    <div style={{ boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.378)' }} className='w-[16rem] text-center h-[fit-content] py-[0.5rem] bg-[#faebd788] max-[855px]:w-[100%] max-[855px]:fixed max-[855px]:bottom-[0%] max-[855px]:h-[20vh] max-[855px]:overflow-auto max-[855px]:h-[20vh] max-[855px]:bg-[white] max-[855px]:py-[0.6rem] max-[855px]:'>
                                        <h2 className='text-[1.3rem] font-bold border-b-[1px] border-[black] pb-[0.23rem]  max-[855px]:border-[darkgrey]'>Cart Summary</h2>
                                        <div className=' max-[855px]:flex  max-[855px]:justify-center max-[855px]:mt-[0.35rem]'>
                                            <div className="total flex item-center justify-center mt-[0.5rem] text-[1.1rem] font-bold max-[855px]:mt-[0rem]">
                                                <h3>Total item:</h3>
                                                <h3 className="price ml-[0.5rem]">{Cart.length}</h3>
                                            </div>
                                            <div className="total flex item-center justify-center mt-[0.5rem] text-[1.1rem] font-bold max-[855px]:mt-[0rem] max-[855px]:ml-[2rem] max-[377px]:ml-[1rem]">
                                                <h3>Total</h3>
                                                <div className="price flex item-center justify-center">
                                                    <h3>&#8358;</h3>
                                                    <h3 className='ml-[0.5rem]'>{productPrice.toLocaleString()}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        < div className="btnContainer text-center">
                                            <Link to="/checkout">
                                                <button style={{ boxShadow: '0px 3px 9px rgb(208, 201, 201)' }} className=' w-[90%] rounded-[0.2rem] px-[3rem] py-[0.4rem] bg-[#38ef7d] font-bold cursor-pointer mt-[1.2rem] mb-[0.5rem] outline-none hover:bg-[#17cf5e] max-[855px]:mt-[0.5rem]'><h3>Checkout</h3></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                        }
                    </div>
            }
        </div>
    )
}

export default Cart
