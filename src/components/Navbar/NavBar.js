import * as React from 'react';
import { Toolbar, AppBar, IconButton, Button, Box, Typography } from "@mui/material";
import Logo  from '../../logo.svg';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" title='logo.svg' style={{ background: '#2E3B55' }}>
            <Toolbar>
            <Box component="img" sx={{ height: 30}} src={Logo}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                <Button color="inherit" onClick={()=>{ navigate('/')}}>Dashboard</Button>
              </Typography>
              <Button color="inherit" onClick={()=>{ navigate('/new')}}>New Market</Button>
              <Button color="inherit" onClick={()=>{ navigate('/edit')}}>Edit Market</Button>
              <Button color="inherit" onClick={()=>{ navigate('/tab')}}>Market Data</Button>
              <Button color="inherit">SignOut</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
        
};
