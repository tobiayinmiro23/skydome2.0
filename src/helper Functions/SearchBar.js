// function to search for a product in men and womens section
export const handleSearchForBothGenders=(searchWord,mensclotheProd,womensclotheProd,setmensCloth,setwomensCloth,setsearching,setmen,setwomen)=>{
    if( searchWord !==''){
        const mensResult=mensclotheProd.filter(item=>{
          return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
        })
        const womensResult=womensclotheProd.filter(item=>{
          return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
        })
        setmensCloth(mensResult)
        setwomensCloth(womensResult)
        setsearching(true)
        if(mensResult.length === 0 && womensResult.length === 0){
          setmen(false)
          setwomen(false)
        }
      }
}
// function to cancel search
export const cancelSearchForBothGenders=(setsearchWord,mensclotheProd,womensclotheProd,setmensCloth,setwomensCloth,setsearching,setmen,setwomen)=>{
    setsearchWord('')
    setsearching(false)
    setmen(true)
    setwomen(true)
    setmensCloth(mensclotheProd)
    setwomensCloth(womensclotheProd)
}

// function  to search for genderless products like laptops and phones
export const handleSearch=(searchWord,allProd,setproducts,setsearching)=>{
  if( searchWord !==''){
    setsearching(true)
    const result=allProd.filter(item=>{
      return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
    })
    setproducts(result)
  }

}
// function  to cancel search for genderless products like laptops and phbones
export const cancelProductSearch=(setsearchWord,setproducts,laptopProd,setsearching)=>{
  setsearching(false)
  setsearchWord('')
  setproducts(laptopProd)
}