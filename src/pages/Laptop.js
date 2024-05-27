import React,{useState,useEffect} from 'react'
import { Header,Input,Card,Footer,NoResultForSearchBar} from '../AllFilles';
import { searchBarData,laptopProd,allProd } from '../database/laptopProd';
import { handleSearch,cancelProductSearch } from '../helper Functions/SearchBar';


const Laptop = () => {
      const [laptops, setlaptops] = useState(laptopProd)
        const [searchWord, setsearchWord] = useState('')
    const [searching, setsearching] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)  
      },[])

      const Search=()=>{
        handleSearch(searchWord,allProd,setlaptops,setsearching)
      }
      const cancelSearch=()=>{
        cancelProductSearch(setsearchWord,setlaptops,laptopProd,setsearching)
      }
  return (
    <div>
    <Header/>
    <div className='pt-[6rem]'><Input searching={searching} searchWord={searchWord}  setsearchWord={setsearchWord} searchBarDataList={searchBarData} handleSearch={Search} cancelSearch={cancelSearch}/></div>
    <div  className="pb-[5rem]">
        <Card data={laptops} route={'laptopcheckout'}/> 
        {
        (laptops.length===0)
         &&
            <div className='mt-[0rem]'><NoResultForSearchBar/> </div>
         }
    </div>
    <Footer/>


</div>
  )
}

export default Laptop