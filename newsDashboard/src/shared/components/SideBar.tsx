import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <>
      <MenuIcon 
      onClick={toggleDrawer(true)}
      sx={{
        fill:'#F4F3F0',
        width:'1.5em',
        height:'1.5em'
      }}/>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer(false)}
        
      >
        <Stack
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            backgroundColor:'#E95D2E',
            height:'100%',
            width:'16em',
            alignItems:'center',
            gap:2,
            padding:'2em'
        }}
        >
          <Link to='/aapl' style={{textDecoration:'none'}}>
            <Typography variant='h2' sx={{color:'#F4F3F0'}}>
                AAPL
            </Typography>
          </Link>
          <Link to='/ORCL' style={{textDecoration:'none'}}>
            <Typography variant='h2' sx={{color:'#F4F3F0'}}>
                ORCL
            </Typography>
          </Link>
          <Link to='/MSFT' style={{textDecoration:'none'}}>
            <Typography variant='h2' sx={{color:'#F4F3F0'}}>
                MSFT
            </Typography>
          </Link>
          <Link to='/NVIDIA' style={{textDecoration:'none'}}>
            <Typography variant='h2' sx={{color:'#F4F3F0'}}>
                NVIDIA
            </Typography>
          </Link>
        </Stack>
      </Drawer>
    </>
  );
}
