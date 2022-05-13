import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import Dropdown from 'react-bootstrap/Dropdown';
//import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
            </Typography>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Button>
          {/*<Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
  </Dropdown>*/}
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Manage
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Activities
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Profile
          </Button>
          {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Profile
            </Typography>*/}
          <Button color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
