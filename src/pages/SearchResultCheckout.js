import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { generalProductsForHome } from '../database/ProdAfterAdd'
import { allProductDb } from '../database/allProductDb'


const SearchResultCheckout = () => {
    const navigate=useNavigate()
    const [productInformation,setproductInformation]=useState({})
    const [generalProduct, setgeneralProduct] = useState(false)
    const productId=Number(useParams().id)

    useEffect(()=>{
        let product=allProductDb.filter(item=>{
            return item.no ===productId
        })
        product.map(item=>{
            setproductInformation(item)
        })
        // to check if the product category is general product
        let generalproduct=generalProductsForHome.filter(item=>{
            return item.no ===productId
        })
        if(generalproduct.length > 0)setgeneralProduct(true)
    },[])
  return (
    <div>
        {productInformation.processorname && navigate('/laptopcheckout/' + productId)}
        {productInformation.network && navigate('/phonecheckout/' + productId)}
        {productInformation.shoe && productInformation.productinfopreview && navigate('/shoecheckout/' + productId)}
        {productInformation.shoe && !(productInformation.productinfopreview) && navigate('/clothcheckout/' + productId) }
        {generalProduct && navigate('/generalcheckout/' + productId)}
    </div>
  )
}

export default SearchResultCheckout