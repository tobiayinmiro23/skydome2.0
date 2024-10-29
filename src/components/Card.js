import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {PopUpMessage} from '../AllFilles'
import { useDispatch } from 'react-redux'
const Card = ({data,route}) => {
    const [PopUpMessageOpened, setPopUpMessageOpened] = useState(false)
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
                                    <p className="productinfoFont text-[0.85rem]">&#8358;</p>
                                    <p className="productinfoFont text-[0.85rem]">{item.productprice.toLocaleString()}</p>
                                </div>
                                <p className='productinfoFont ml-[0.3rem] overflow-hidden h-[1.9rem] leading-[0.93rem] max-[338px]:mt-[0.13rem]'>{item.productinfopreview}</p>
                            </div>
                        </Link>
                        <div className="text-center">
                            <PopUpMessage data={item.no}/>
                        </div>
                     </div>
                </div>
            })
         }
         {/* <PopUpMessage PopUpMessageOpened={PopUpMessageOpened} setPopUpMessageOpened={setPopUpMessageOpened} /> */}
    </div>
  )
}

export default Card
