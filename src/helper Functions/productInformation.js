// function to display product information for laptop and phone
export const displayProductInformation=(allProd,setproductInformation,productId,setsliderData,setinvalidProduct)=>{
    window.scrollTo(0,0)
      let product=allProd.filter(item=>{
        return item.no ===productId
      })
      if(product.length === 0){
        setinvalidProduct(true)
      }else{
        product.map(item=>{
            setproductInformation(item)
           let slide= [
                {
                    id:1,
                    src:item.productimage1
                },
                {
                    id:2,
                    src:item.productimage2
                },
            ]
            setsliderData(slide)
        })
      }
           
       
}
// function to display product information for cloth,shoe and general products
export const displayProductInformationForClothShoeAndGeneral =(productId,allProd,setinvalidProduct,setproductInformation,setprice,setsize)=>{
    window.scrollTo(0,0)
    let product= allProd.filter(item=>{
        return item.no === productId
      })
      if(product.length === 0){
        setinvalidProduct(true)
      }else{
        product.map(item=>{
            setproductInformation(item)
            setprice(item.productprice.toLocaleString())
            setsize(item.shoesize)
        })
    }
}

