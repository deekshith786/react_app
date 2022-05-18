import * as React from "react";
import { Tab, AppBar, Tabs, Button, Box } from "@mui/material";
import './MarketTabView.css';
import { useNavigate } from "react-router-dom";
import { ActiveTableData }  from './TableDataView/ActiveTableView/ActiveTableData'
import { ArchivedTableData } from './TableDataView/ArchivedTableView/ArchivedTableData'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export const MarketTabs = (params) => {
  
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [searched, setSearched] = useState("");
  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
    <div>
    <div className="topbar">
        <div className="heading">
        <motion.h1
          initial={{x: -200, opacity:0}}
          animate={{x: -5, opacity:1}}
          transition={{delay:0.5, duration : 0.3, type: 'tween' }}
        >Market</motion.h1>
        </div>
          <div className="search-bar">
            <Search className="innner-search">
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searched}
                    onChange={(event) => setSearched(event.target.value)}    
                  />
              </Search>
            </div>
      </div>

      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleTabs} textColor="primary" indicatorColor="primary">
          <Tab label="Active" />
          <Tab label="Archived" />
          <Box className="NewBox"><Button variant="contained" style={{marginRight:"25px"}} onClick={()=>{ navigate('/new')}}>New</Button></Box>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            {<ActiveTableData 
              searched={searched}
              />}
      </TabPanel>
      <TabPanel value={value} index={1}>
            {<ArchivedTableData
              searched={searched}            
            />}
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>{value === index && <div>{children}</div>}</div>);
}
