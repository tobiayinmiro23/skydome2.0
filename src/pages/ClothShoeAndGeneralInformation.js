import React,{useEffect,useState} from 'react'
import {Header,Footer,ProductInfoButton,Loader,NoResult} from '../AllFilles';
import {useParams } from 'react-router-dom'
import { allclotheProd } from '../database/clothProd';
import { shoeProd } from '../database/shoeProd';
import { generalProductsForHome } from '../database/ProdAfterAdd';
import { displayProductInformationForClothShoeAndGeneral } from '../helper Functions/productInformation';
import {loaderTimer} from '../helper Functions/LoadingAnimationTimer'
import { increaseProductSize,decreaseProductSize } from '../helper Functions/handleProductSize';

const ClothShoeAndGeneralInformation= () => {
  const [loading, setloading] = useState(true)
  const [productInformation, setproductInformation] = useState('')
  const [invalidProduct, setinvalidProduct] = useState(false)
  const [price, setprice] = useState(0)
  const [size, setsize] = useState(31)
  const productId=Number(useParams().id)
    useEffect(()=>{
      loaderTimer(setloading,400)
      if (window.location.pathname.split('/')[1]==='shoecheckout'){
        displayProductInformationForClothShoeAndGeneral(productId,shoeProd,setinvalidProduct,setproductInformation,setprice,setsize)
      }else  if (window.location.pathname.split('/')[1]==='clothcheckout'){
        displayProductInformationForClothShoeAndGeneral(productId,allclotheProd,setinvalidProduct,setproductInformation,setprice,setsize)
      }else  if (window.location.pathname.split('/')[1]==='generalcheckout'){
        displayProductInformationForClothShoeAndGeneral(productId,generalProductsForHome,setinvalidProduct,setproductInformation,setprice,setsize)
      }
    },[])
       
    return (
    <div>
        <Header/>
           <div>
            {
              loading ?
                <div className='pt-[14rem]'><Loader/></div>
              :
                <div>
                     {
                      invalidProduct 
                      ?
                        <div className='pt-[4rem] mb-[1.5rem]'><NoResult/></div>
                      :
                      <div>
                          <div className='w-[40rem] pt-[5rem] m-[auto] pb-[1rem] max-[1111px]:w-[90%]'>
                                <img src={productInformation.productimage1} alt="" srcset="" />
                          </div>
                          <div className="flex item-center justify-center max-[653px]:block ">
                            <div className="flex font-semibold text-[1.2rem] productinfo py-[0.9rem] justify-center max-[653px]:py-[0rem] max-[350px]:text-[1.09rem] max-[335px]:text-[1.06rem]">
                                <h3>{productInformation.productname}</h3>
                                <div className="flex ml-[2rem] max-[418px]:ml-[0.5rem]">
                                      <span className="naira">&#8358;</span>
                                      <h3 className="generalname">{price}</h3>
                                </div>
                            </div>
                            <div>
                              {
                                productInformation.shoe &&
                                <div className="qtyContainer flex item-center ml-[2rem] max-[653px]:justify-center max-[653px]:mt-[0.5rem]">
                                  <h3 className='font-semibold text-[1.2rem] productinfo mr-[0.3rem] max-[350px]:text-[1.04rem]'>Size</h3>
                                  <div onClick={()=>increaseProductSize(size,setsize)} style={size >=59 ? {background:' #76ae8b9c',boxShadow:' 0px 3px 9px rgb(208, 201, 201)'} :{background:'#38ef7d',boxShadow:' 0px 3px 9px rgb(208, 201, 201)'} }   className="add w-[1.75rem] h-[1.9rem] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] hover:bg-[#17cf5e] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><img className='mt-[0.43rem] w-[0.94rem] m-[auto] h-[0.94rem] max-[463px]:w-[0.74rem] max-[463px]:h-[0.74rem] max-[463px]:mt-[0.43rem]' src="/productimage/plus.png" alt="" /></div>
                                  <p className='quantity font-bold mx-[0.4rem] productinfo text-[1.1rem] max-[463px]:mx-[0.75rem] max-[463px]:text-[1rem]'>{size}</p>
                                  <div onClick={()=>decreaseProductSize(size,setsize)} style={size <=9 ? {background:' #76ae8b9c',boxShadow:' 0px 3px 9px rgb(208, 201, 201)'} :{background:'#38ef7d',boxShadow:' 0px 3px 9px rgb(208, 201, 201)'} } className="add w-[1.75rem] h-[1.9rem] rounded-[0.1rem] text-center cursor-pointer mt-[0.43rem] max-[463px]:w-[1.5rem] max-[463px]:h-[1.7rem] max-[463px]:rounded-[0.1rem]" ><img className='mt-[0.43rem] w-[0.94rem] m-[auto] h-[0.94rem] max-[463px]:w-[0.74rem] max-[463px]:h-[0.74rem] max-[463px]:mt-[0.43rem]' src="/productimage/minus-sign.png" alt="" /></div>
                                </div>
                              }
                            </div>
                          </div>
                          <ProductInfoButton id={productInformation.no} price={productInformation.productprice} />
                      </div>
              }
                  </div>
              }
           </div>
        <Footer/>
    </div>
  )
}

export default ClothShoeAndGeneralInformation
