import React, { useEffect, useState } from 'react'
import { Header, SliderComponent, Footer, ProductInfoButton, Loader, NoResult } from '../AllFilles';
import { useParams } from 'react-router-dom'
import { phoneProd } from '../database/phoneProd';
import { displayProductInformation } from '../helper Functions/productInformation';
import { loaderTimer } from '../helper Functions/LoadingAnimationTimer'

const PhoneInformation = () => {
    const [loading, setloading] = useState(true)
    const [productInformation, setproductInformation] = useState('')
    const [sliderData, setsliderData] = useState([])
    const [invalidProduct, setinvalidProduct] = useState(false)

    const productId = Number(useParams().id)
    useEffect(() => {
        loaderTimer(setloading, 400)
        displayProductInformation(phoneProd, setproductInformation, productId, setsliderData, setinvalidProduct)
    }, [])
    return (
        <div>
            <Header />
            {
                loading ?
                    <div className='pt-[14rem]'><Loader /></div>
                    :
                    <div>
                        {
                            invalidProduct ?
                                <div className='pt-[4rem] mb-[1.5rem]'><NoResult /></div>
                                :
                                <div>
                                    <div className='w-[60rem] pt-[5rem] m-[auto] pb-[1rem] max-[1111px]:w-[85%]'>
                                        <SliderComponent sliderImg={sliderData} from={'productInformation'} />
                                    </div>
                                    <ProductInfoButton id={productInformation.no} />
                                    <div className="mt-[1.5rem]" >
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>product name:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.productname}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[white]">
                                            <h3>product price:</h3>
                                            <div className="flex ml-[2rem]">
                                                <span className="naira">&#8358;</span>
                                                <h3 className="productprice  generalname max-[377px]:ml-[1rem]">{productInformation.productprice}</h3>
                                            </div>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>batteryinfo :</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.batteryinfo}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[white]">
                                            <h3>ram</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.ram}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>rom:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.rom}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[white]">
                                            <h3>network:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.network}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>front camera:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.frontcamera}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[white]">
                                            <h3>rear camera:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.rearcamera}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>version:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.windowversion}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[white]">
                                            <h3>color:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.color}</h3>
                                        </div>
                                        <div className="flex font-semibold text-[1.3rem] productinfo py-[0.9rem] pl-[1.2rem] bg-[#bdb9b9]">
                                            <h3>screen inch:</h3>
                                            <h3 className="ml-[2rem] max-[377px]:ml-[1rem]">{productInformation.inch}</h3>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
            }
            <Footer />
        </div>
    )
}

export default PhoneInformation
