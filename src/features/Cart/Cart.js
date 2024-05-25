import { createSlice } from '@reduxjs/toolkit';
import {allProductDb} from '../../database/allProductDb'

const initialState ={
  cart:[],
  total:0,

}

export const MenuSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    listCartItem:(state,action)=>{ 
        let memory=[]
        action.payload?.forEach(item =>{
          let data=allProductDb.filter(res =>{
            return res.no === item
            })
            if(data.length !== 0){
              memory.push(data)
             let result=memory.map(item=>{
                return item[0]
              })
              // let a=result.reverse()
              //    setresult(result)
              state.cart=result
              }
            })
    },

    cartTotal:(state,action)=>{
        state.total=action.payload  
    },

    handleDelete:(state,action)=>{
        let newCartProduct=state.cart.filter(item=>{
          return item.id !== action.payload.id
        })
        state.cart=newCartProduct
        let memory=[]
        newCartProduct.map(item=>{
          return memory.push(item.no)
         })
        localStorage.setItem('skydome',JSON.stringify(memory))
      },

      increaseProductQuantity:(state,action)=>{
      
        // action.payload.quantity +=1
      },

      decreaseProductQuantity:(state,action)=>{
        if(action.payload.quantity===1)return
          action.payload.quantity -=1
      } ,

      increaseShoeSize:(state,action)=>{
        action.payload.shoesize +=1
      },

      decreaseShoeSize:(state,action)=>{
        if(action.payload.shoesize===1)return
          action.payload.shoesize -=1
      }


  }
});


export const {listCartItem,cartTotal,handleDelete,increaseProductQuantity,increaseShoeSize,decreaseProductQuantity,decreaseShoeSize} = MenuSlice.actions;

export default MenuSlice.reducer;
