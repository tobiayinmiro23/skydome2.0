import React from 'react'
import { useDispatch } from 'react-redux'
import { PopUpMessage } from '../AllFilles'
import { getTotal } from '../features/Checkout/Total'
import { useNavigate } from 'react-router-dom'
const ProductInfoButton = ({ id, price }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(getTotal(price))
    navigate(`/checkout/${id}`)
  }

  return (
    <div>

      <div className="btnWrapper w-[fit-content] flex  m-[auto] my-[1.5rem] max-[321px]:block max-[321px]:text-center ">
        <div> <PopUpMessage data={id} style='font-semibold  m-[0.6rem] px-[3rem] py-[0.6rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[405px]:m-[0.2rem] max-[405px]:px-[2rem] max-[321px]:w-[90%]' /></div>
        <div onClick={handleCheckout}> <button style={{ boxShadow: '0px 1.4px 2px darkgrey' }} className="w-[90%] font-semibold m-[0.6rem] px-[3rem] py-[0.6rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[405px]:my-[0.2rem] max-[405px]:px-[2rem] max-[321px]:mt-[0.8rem] max-[321px]:w-[90%]" >Checkout</button></div>
      </div>
    </div>
  )
}

export default ProductInfoButton
