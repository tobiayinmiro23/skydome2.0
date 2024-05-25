import React,{useState,useEffect} from 'react'
import { Header,Input,Card,Footer,NoResultForSearchBar} from '../AllFilles';
import { handleSearch,cancelProductSearch } from '../helper Functions/SearchBar';
import { phoneProd,searchBarData } from '../database/phoneProd';


const Phone = () => {
    const [phones, setphones] = useState(phoneProd)
    const [searchWord, setsearchWord] = useState('')
    const [searching, setsearching] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)  
      },[])

      const Search=()=>{
        handleSearch(searchWord,phoneProd,setphones,setsearching)
      }
      const cancelSearch=()=>{
        cancelProductSearch(setsearchWord,setphones,phoneProd,setsearching)
      }
  return (
    <div>
    <Header/>
    <div className='pt-[6rem]'><Input searching={searching} searchWord={searchWord}  setsearchWord={setsearchWord} searchBarDataList={searchBarData} handleSearch={Search} cancelSearch={cancelSearch}/></div>
    <div  className="pb-[5rem]">
        <Card data={phones} route={'phonecheckout'}/> 
        {
        (phones.length===0)
         &&
            <div className='mt-[0rem]'><NoResultForSearchBar/> </div>
         }
    </div>
    <Footer/>


</div>
  )
}

export default Phone