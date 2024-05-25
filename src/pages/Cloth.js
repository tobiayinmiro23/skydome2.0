import React,{useState,useEffect} from 'react'
import { Header,Input,Card,GenderSelection ,Footer,NoResultForSearchBar} from '../AllFilles';
import { mensclotheProd,womensclotheProd,searchBarData } from '../database/clothProd';
import { handleSearchForBothGenders,cancelSearchForBothGenders } from '../helper Functions/SearchBar';

const Cloth = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
    const [men, setmen] = useState(true)
    const [women, setwomen] = useState(true)
    const [searchWord, setsearchWord] = useState('')
    const [searching, setsearching] = useState(false)
    const [mensCloth, setmensCloth] = useState(mensclotheProd)
    const [womensCloth, setwomensCloth] = useState(womensclotheProd)

    
    const handleSearch=()=>{
        handleSearchForBothGenders(searchWord,mensclotheProd,womensclotheProd,setmensCloth,setwomensCloth,setsearching,setmen,setwomen)
      }
      // to cancel search
      const cancelSearch=()=>{
        cancelSearchForBothGenders(setsearchWord,mensclotheProd,womensclotheProd,setmensCloth,setwomensCloth,setsearching,setmen,setwomen)
      }
    
  return (
    <div>
        <Header/>
        <div className='pt-[6rem]'><Input searching={searching} searchWord={searchWord}  setsearchWord={setsearchWord} searchBarDataList={searchBarData} handleSearch={handleSearch} cancelSearch={cancelSearch}/></div>
        <div><GenderSelection setmen={setmen} setwomen={setwomen} searching={searching}/></div>
        <div  className="pb-[5rem]">
            {(men && mensCloth.length!==0) && <Card data={mensCloth} route={'clothcheckout'}/>  }
            {(women && womensCloth.length!==0) && <Card data={womensCloth} route={'clothcheckout'}/>}
            {
            (mensCloth.length===0) && ( womensCloth.length===0)
             &&
                <div className='mt-[-11rem] w-[98.5%] max-[657px]:mt-[-2.5rem] max-[370px]:mt-[-1.5rem]'><NoResultForSearchBar/> </div>
             }
        </div>
        <Footer/>


    </div>
  )
}

export default Cloth