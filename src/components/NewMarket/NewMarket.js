import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    TextField,
  } from "@mui/material";
  import { display, padding } from "@mui/system";
  import { useEffect } from "react";
  import { useState } from "react";
  import './NewMarket.css'
  
  export const NewMarket = (params) => {
  
    const [MarketData,setMarketData] = useState([]);
  
    const getAllData = () =>{
  
    }
  
    useEffect(()=>{
      //for worldwide fetch
        fetch("http://localhost:9000/market/getMarketByName/Abc")
        .then(response => response.json())
        .then((data)=>{
            setMarketData(data);
            console.log(data);
  
        });
      },[]);
  
    return (
      <div>
          
        <div className="editHeader">
          <h1>New Market</h1><hr/>
          <p style={{display:'block'}}><b>Market</b></p>
          <p style={{display:'block'}}><b>Photo</b></p>
          <Button className="FileButton" variant="contained">choose file</Button>
          <p>No file choosen</p>
        </div>
        <div>
          <Card>
            <CardContent>
              <Grid container spacing={1}></Grid>
              <Grid xs={12} sm={6} item>
              <h3>TimeZone</h3>
              <TextField fullWidth select label="TimeZone" ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Name</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>State</h3>
                <TextField fullWidth label="Name" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Longitude</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Latitude</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Map Zoom</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Android Map Zoom</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Ios Map Zoom</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Default Home screen</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Reservation maximum duration</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Username</h3>
                <TextField fullWidth label="Select" placeholder="" variant="outlined"></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
              <h3>Description</h3>
                <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
              </Grid><br/>
              
              <Button variant="contained" onClick={getAllData()}>Edit</Button>
  
            </CardContent>
          </Card>
       </div>
      </div>
  
    );
  };
  