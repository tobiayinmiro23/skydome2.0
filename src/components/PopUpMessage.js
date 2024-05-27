import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { addItemToCart } from '../features/home/AddToCart'
import { useDispatch } from 'react-redux'


export default function PopUpMessage({data}) {
    const dispatch=useDispatch()
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
      dispatch(addItemToCart(data))
      setState({ ...state, open: true });
   
  };
  
 
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} style={{boxShadow:'0px 2px 3px grey'}}  className="w-[90%] my-[0.6rem] px-[0.8rem] py-[0.1rem] rounded-[0.4rem] bg-[#38ef7d] cursor-pointer outline-none hover:bg-[#17cf5e] max-[384px]:mt-[0.25rem] max-[384px]:py-[0rem] max-[343px]:text-[0.9rem]">add to cart</button>
    </React.Fragment>
  );

  return (
    <Box >
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={1000}
        open={open}
        onClose={handleClose}
        message="Product successfully added to cart"
        key={vertical + horizontal}
      />
    </Box>
  );
}
