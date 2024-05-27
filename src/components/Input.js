import React from 'react'

const Input = ({searching,searchWord,setsearchWord,searchBarDataList,handleSearch,cancelSearch}) => {

  return (
    <div>
        <div className="search-container pt-[7rem] flex justify-center max-[815px]:w-[100%] max-[564px]:pt-[5.5rem]" style={{paddingTop:'2rem'}}>
          <input onChange={(e)=>setsearchWord(e.target.value)} value={searchWord} style={{boxShadow:"0px 2px 5px rgb(197, 184, 184)"}}  className="search p-[1.1rem] mb-[2rem] w-[32rem] outline-none max-[815px]:p-[1.2rem] max-[815px]:p-[1.2rem] max-[815px]:w-[60%] max-[564px]:p-[0.9rem] max-[403px]:p-[0.7rem] max-[369px]:p-[0.5rem]"  type="text" list='list' />
          <datalist id='list'>
              {
                searchBarDataList.map(item=>{
                  return  <option key={item.id}> {item.product}</option>
                })
              }
          </datalist>
          <div>
            {
            searching ?
             <div onClick={cancelSearch} className="cancelSearchButton searchbtn w-[1rem] ml-[1.6rem] pt-[1.3rem] cursor-pointer">
                <img src="/E-commerce pictures/close (2).png" alt="img" />
             </div>
            :
            <button onClick={handleSearch} style={{boxShadow:"0px 2px 5px rgb(197, 184, 184)"}} className=" py-[1.1rem] px-[1.8rem] border-l-[1px] border-[#c4bbbb] bg-[#38ef7d] cursor-pointer hover:bg-[#17cf5e] max-[815px]:p-[1.2rem] max-[564px]:p-[0.9rem] max-[403px]:p-[0.7rem] max-[369px]:p-[0.5rem]" >search</button>
              }
              </div>
         </div>
        <hr />
    </div>
  )
}

export default Input