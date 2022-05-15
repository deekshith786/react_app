import * as React from "react";
import { Tab, AppBar, Tabs, Button, Box } from "@mui/material";
import './MarketTabView.css';
import { useNavigate } from "react-router-dom";
import { ActiveTableData }  from './TableDataView/ActiveTableView/ActiveTableData'
import { ArchivedTableData } from './TableDataView/ArchivedTableView/ArchivedTableData'

export const MarketTabs = (params) => {
  
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <h1>Market</h1>
      
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleTabs} textColor="secondary" indicatorColor="secondary">
          <Tab label="Active" />
          <Tab label="Archived" />
          <Box className="NewBox"><Button variant="contained" onClick={()=>{ navigate('/new')}}>New</Button></Box>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            {<ActiveTableData/>}
      </TabPanel>
      <TabPanel value={value} index={1}>
            {<ArchivedTableData/>}
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return (<div>{value === index && <h1>{children}</h1>}</div>);
}
