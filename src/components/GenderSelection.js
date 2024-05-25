import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Man,WomanRounded } from '@mui/icons-material'; 
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export default function GenderSelection({setmen,setwomen,searching}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  useEffect(()=>{
      setSelectedIndex(0)
  },[searching])
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
        //  to display the mens clothes
        const handleMen=(event)=>{
            handleListItemClick(event, 1)
            setmen(true)
            setwomen(false)
        }
        //  to display the womens clothes
        const handleWomen=(event)=>{
            handleListItemClick(event, 2)
            setmen(false)
            setwomen(true)
        }
        //  to display all the clothes
        const handleAll=(event)=>{
        // if(searching===false){
            handleListItemClick(event, 0)
            setmen(true)
            setwomen(true)
        // }else{
            setmen(true)
            setwomen(true)
        // }
        }
 

  return (
   <div className='mt-[1rem] ml-[2rem] w-[9.5rem] max-[499px]:ml-[0.7rem] max-[499px]:mt-[0.5rem] max-[452px]:w-[8.2rem]'>
       <Box sx={{bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleAll(event)}
          className='genderSelection' 
        >
          <ListItemIcon   style={{minWidth:'2px',marginRight:'0.5rem'}}>
           <GroupWorkIcon/>
          </ListItemIcon>
         
          <ListItemText color='red'  primary="All" />
        </ListItemButton>
          <Divider />
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleMen(event)}
          className='genderSelection' 
        >
          <ListItemIcon style={{minWidth:'2px',marginRight:'0.5rem'}}>
            <Man />
          </ListItemIcon>
          <ListItemText primary="Male" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleWomen(event)}
          className='genderSelection' 
        >
          <ListItemIcon style={{minWidth:'2px',marginRight:'0.5rem'}}>
            <WomanRounded />
          </ListItemIcon>
          <ListItemText primary="Female" />
        </ListItemButton>
      </List>
    </Box>
   </div>
  );
}
