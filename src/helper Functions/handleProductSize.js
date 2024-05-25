
export const increaseProductSize=(size,setsize)=>{
    if(size===59)return
    setsize(size + 1)
  }
  

export const decreaseProductSize=(size,setsize)=>{
  if(size===9)return
  setsize(size - 1)
} 