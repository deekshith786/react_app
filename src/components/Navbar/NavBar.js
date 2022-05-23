import * as React from 'react';
import { Toolbar, AppBar, IconButton, Button, Box, Typography } from "@mui/material";
import Logo  from '../../logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "react-oidc-context";

export const NavBar = () => {

    let navigate = useNavigate();

    const auth = useAuth();


  
      // if (auth.isLoading) {
      //     return <div>Loading...</div>;
      // }
  
      // if (auth.error) {
      //     return <div>Oops... {auth.error.message}</div>;
      // }
  
      if (auth.isAuthenticated) {
        return (
        <div>
            Hello {auth.user.profile.name}{" "}
            <button onClick={auth.removeUser}>Log out</button>
        </div>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" title='logo.svg' style={{ background: '#2E3B55' }}>
            <Toolbar>
            <Box component="img" sx={{ height: 30}} src={Logo}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                <Button color="inherit" onClick={()=>{ navigate('/')}}>Dashboard</Button>
              </Typography>
              <Button color="inherit" onClick={()=>{ navigate('/new')}}>New Market</Button>
              {/* <Button color="inherit" onClick={()=>{ navigate('/edit')}}>Edit Market</Button> */}
              <Button color="inherit" onClick={()=>{ navigate('/tab')}}>Market Data</Button>
              <Button color="inherit" onClick={auth.signinPopup}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
        
};
