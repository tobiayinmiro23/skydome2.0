import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Header,SliderComponent,Input,Card,Advertisement ,Footer, NoResultForSearchBar} from '../AllFilles';
import {laptopProductForHome} from '../database/ProdBeforeAdd'
import {generalProductsForHome} from '../database/ProdAfterAdd'
import {phoneProductForHome} from '../database/phoneProd'
import {shoeProductForHome} from '../database/shoeProd'
import { searchBarData } from '../database/homeProd'
 import { sliderImg } from '../database/slider';

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
     const pingServer = async () => {
      try {
        let response = axios({
          method: 'get',
          url: 'https://skydomee.onrender.com/'
        })
        let data = await response
        console.log(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    pingServer()
  },[])
  const [laptopProduct, setlaptopProduct] = useState(laptopProductForHome)
  const [phoneProduct,setphoneProduct]=useState(phoneProductForHome)
  const [shoeProduct,setshoeProduct]=useState(shoeProductForHome)
  const [generalProduct,setgeneralProduct]=useState(generalProductsForHome)
  const [searchWord, setsearchWord] = useState('')
  const [searching, setsearching] = useState(false)
  const [invalidSearch, setinvalidSearch] = useState(false)
  const [displayAdvert, setdisplayAdvert] = useState(true)

 
  const handleSearch=()=>{
    if(searchWord !==''){
      setsearching(true)
      setdisplayAdvert(false)
      const result=laptopProduct.filter(item=>{
        return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
      })
      const result2=phoneProduct.filter(item=>{
        return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
      })
      const result3=shoeProduct.filter(item=>{
        return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
      })
      const result4=generalProduct.filter(item=>{
        return  item.productname.toLowerCase().includes(searchWord.toLowerCase())
      })
      setlaptopProduct([])
      let searchResult=[]
      result.map(item=>{
        searchResult.push(item)
      })
      result2.map(item=>{
        searchResult.push(item)
      })
      result3.map(item=>{
        searchResult.push(item)
      })
      result4.map(item=>{
        searchResult.push(item)
      })
      setphoneProduct([])
      setshoeProduct([])
      setgeneralProduct([])
      setgeneralProduct(searchResult)
      if(result.length === 0 && result2.length === 0 && result3.length === 0 && result4.length === 0){
        setinvalidSearch(true)
      }
    }
}

const cancelSearch=()=>{
  setsearchWord('')
  setsearching(false)
  setdisplayAdvert(true)
  setlaptopProduct(laptopProductForHome)
  setphoneProduct(phoneProductForHome)
  setshoeProduct(shoeProductForHome)  
  setgeneralProduct(generalProductsForHome)
  setinvalidSearch(false)
}
  return (
    <div>
        <Header/>
        <div className="pt-[5rem]  w-[95%] m-[auto] pb-[1rem] max-[1032px]:w-[90%] max-[490px]:pt-[4.5rem]">
          <SliderComponent sliderImg={sliderImg} from={'home'}/>
        </div>
        <Input searching={searching} searchWord={searchWord}  setsearchWord={setsearchWord} searchBarDataList={searchBarData} handleSearch={handleSearch} cancelSearch={cancelSearch}/>
        <div className="pb-[5rem]"  >
          <Card data={laptopProduct} route={'laptopcheckout'}/>
          {displayAdvert && <Advertisement setdisplayAdvert={setdisplayAdvert}/>}
          <Card data={phoneProduct} route={'phonecheckout'}/>
          <Card data={shoeProduct} route={'shoecheckout'}/>
          {invalidSearch && <div className='pt-[1rem] w-[98.5%]'><NoResultForSearchBar/> </div>}
          <Card data={generalProduct} route={  searching ? "searchresultcheckout"  :  "generalcheckout"}/> 
        </div>
        <Footer/>

    </div>
  )
}

export default Home
