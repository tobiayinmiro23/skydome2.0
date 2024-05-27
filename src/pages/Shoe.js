import React,{useState,useEffect} from 'react'
import { Header,Input,Card,GenderSelection ,Footer,NoResultForSearchBar} from '../AllFilles';
import { handleSearchForBothGenders,cancelSearchForBothGenders } from '../helper Functions/SearchBar';
import { menshoeProd,womenshoeProd,searchBarData } from '../database/shoeProd';

const Shoe = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
    const [men, setmen] = useState(true)
    const [women, setwomen] = useState(true)
    const [searchWord, setsearchWord] = useState('')
    const [searching, setsearching] = useState(false)
    const [mensShoe, setmensShoe] = useState(menshoeProd)
    const [womensShoe, setwomensShoe] = useState(womenshoeProd)

    
    const handleSearch=()=>{
        handleSearchForBothGenders(searchWord,menshoeProd,womenshoeProd,setmensShoe,setwomensShoe,setsearching,setmen,setwomen)
      }
      // to cancel search
      const cancelSearch=()=>{
        cancelSearchForBothGenders(setsearchWord,menshoeProd,womenshoeProd,setmensShoe,setwomensShoe,setsearching,setmen,setwomen)
      }
    
  return (
    <div>
        <Header/>
        <div className='pt-[6rem]'><Input searching={searching} searchWord={searchWord}  setsearchWord={setsearchWord} searchBarDataList={searchBarData} handleSearch={handleSearch} cancelSearch={cancelSearch}/></div>
        <div><GenderSelection setmen={setmen} setwomen={setwomen} searching={searching}/></div>
        <div  className="pb-[5rem]">
            {(men && mensShoe.length!==0) && <Card data={mensShoe} route={'shoecheckout'}/>  }
            {(women && womensShoe.length!==0) && <Card data={womensShoe} route={'shoecheckout'}/>}
            {
            (mensShoe.length===0) && ( womensShoe.length===0)
             &&
                <div className='mt-[-11rem] w-[98.5%] max-[657px]:mt-[-2.5rem] max-[370px]:mt-[-1.5rem]'><NoResultForSearchBar/> </div>
             }
        </div>
        <Footer/>
    </div>
  )
}

export default Shoe