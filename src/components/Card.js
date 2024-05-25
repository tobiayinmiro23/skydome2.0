import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/home/AddToCart'
const Card = ({data,route}) => {
    const dispatch=useDispatch()

  return (
      <div className='card flex item-center justify-center m-[auto] max-w-[1200px] flex-wrap max-[1032px]:max-w-[670px] max-[1032px]:item-start '>
         {
            data.map(item=>{
                return <div style={{boxShadow:'0px 1px 2px #adabab'}} key={item.id} className="card w-[13.6rem] bg-[#fdf5a8] rounded-[0.3rem] mx-[2rem] my-[0rem] mt-[2rem] cursor-pointer  max-[1144px]:mx-[0.9rem] max-[1032px]:mx-[3rem] max-[1032px]:my-[1rem] max-[644px]:mx-[1.5rem] max-[564px]:w-[12rem] max-[488px]:w-[45%] max-[488px]:mx-[2%]">
                    <Link to={`/${route}/`+ item.no}>
                    <div className="img w-[100%] h-[9rem] border-b-[1px] border-[#cac7c7] bg-[#f1f1f1] max-[564px]:h-[8rem] max-[488px]:h-[8.5rem] max-[393px]:h-[7.5rem] max-[338px]:h-[7rem]">
                        <img src={item.productimage1} loading='lazy' className='rounded-t-lg' alt="img" />
                        {/* <img src="" alt="" /> */}
                    </div>
                    </Link>
                    <div  className="card-info p-[0.15rem]">
                        <Link to={`/${route}/`+ item.no}>
                        <div>
                                <h3 className='productName pb-[0rem] ml-[0.3rem] text-[1.2rem] font-semibold overflow-hidden h-[1.65rem]  max-[384px]:mt-[-0.4rem]  max-[334px]:text-[1.1rem]'>{item.productname}</h3>
                                <div className="flex item-center ml-[0.3rem] max-[338px]:leading-[0.9rem]">
                                    <p className="productinfo text-[0.85rem]">&#8358;</p>
                                    <p className="productinfo text-[0.85rem]">{item.productprice.toLocaleString()}</p>
                                </div>
                                <p className='productinfo ml-[0.3rem] overflow-hidden h-[1.9rem] leading-[0.93rem] max-[338px]:mt-[0.13rem]'>{item.productinfopreview}</p>
                            </div>
                        </Link>
                        <div className="text-center">
                        <button style={{boxShadow:'0px 2px 3px grey'}} onClick={()=>dispatch(addItemToCart(item.no))} className="w-[90%] my-[0.6rem] px-[0.8rem] py-[0.1rem] rounded-[0.4rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[384px]:mt-[0.25rem] max-[384px]:py-[0rem] max-[343px]:text-[0.9rem]">add to cart</button>
                        </div>
                     </div>
                </div>
            })
         }
    </div>
  )
}

export default Card