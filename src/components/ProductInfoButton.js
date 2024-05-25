import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/home/AddToCart'
import { Link } from 'react-router-dom'
const ProductInfoButton = ({id}) => {
  const dispatch=useDispatch()
    
  return (
    <div>
        <div className="btnWrapper w-[fit-content] flex  m-[auto] my-[1.5rem] max-[321px]:block max-[321px]:text-center ">
            <button style={{boxShadow:'0px 1.4px 2px darkgrey'}} onClick={()=>dispatch(addItemToCart(id))} className="w-[90%]  font-semibold  m-[0.6rem] px-[3rem] py-[0.6rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[405px]:m-[0.2rem] max-[405px]:px-[2rem] " >Add to cart</button>
            <Link to="/checkout">
                <button style={{boxShadow:'0px 1.4px 2px darkgrey'}} className="w-[90%] font-semibold m-[0.6rem] px-[3rem] py-[0.6rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[405px]:my-[0.2rem] max-[405px]:px-[2rem] max-[321px]:mt-[0.8rem]" >Checkout</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductInfoButton