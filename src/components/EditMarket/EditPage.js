import {  Button, Checkbox, FormControlLabel, FormGroup, Grid, InputLabel, TextField} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";  

import './EditPage.css'
import { VenuGroupDialogBox } from "./VenuGroup/VenuGroup";

export const EditMarket = (params) => {

  const {state} = useLocation();
  const { rowData } = state;

  const [MarketData,setMarketData] = useState([]);
  const [currentMarketData,setCurrentMarketData] = useState([]);

  const updateMarketData = () =>{
    console.log(JSON.stringify(currentMarketData))
    const newdata = JSON.stringify(currentMarketData);

    fetch("http://localhost:9000/market/updateMarket/"+currentMarketData.marketID, {method:"PUT", body:newdata, 
    headers: new Headers({
      'Content-Type':'application/json'
      }),})
    .then(response=>console.log(response.json()));
    console.log(JSON.stringify(currentMarketData))
    Swal.fire(
      'Data Updated Successfully!',
      'Yay!',
      'success'
    )  }

  useEffect(()=>{
      fetch("http://localhost:9000/market/getMarketById/"+rowData.marketID)
      .then(response => response.json())
      .then((data)=>{
          setMarketData(data);
          setCurrentMarketData(data)
          console.log(data);
      });
    },[]);

  return (
    <div className="main-container">
        <h1>Edit</h1><hr/>
        <br/><br/>
        <div className="editHeader">
          <div style={{ display: "inline-grid" }}>
            <InputLabel className="InputLabel">Market</InputLabel>
            <input accept="image/*" id="upload-company-logo" type='file'  />
          </div>
          <FormGroup>
            <FormControlLabel control={<Checkbox value={currentMarketData.visible} />} label="Top Market" />
            <FormControlLabel control={<Checkbox value={currentMarketData.visible}/>} label="Visible" />
          </FormGroup>
        <div>
          <InputLabel className="InputLabel">Import Locations</InputLabel>
          <InputLabel className="InputLabel">Popular Destination</InputLabel>
          <input accept="image/*" id="upload-company-logo" type='file'  />
        </div>
        <div style={{ display: "inline-grid" }}>
          <InputLabel className="InputLabel">Venue Groups</InputLabel>
          <Button><VenuGroupDialogBox/></Button>
          </div>
      </div>
      <div className="MuiCardContent-root">
            <Grid container spacing={1}></Grid>
            <Grid xs={12} sm={6} item>
            <h3>TimeZone</h3>
              <TextField fullWidth value = {currentMarketData.timeZone} onChange={(event)=>{console.log("updated timezone" ,event,); setCurrentMarketData({...currentMarketData, "timeZone":event.target.value})}} placeholder={MarketData.timeZone} variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Name</h3>
              <TextField fullWidth value = {currentMarketData.marketName} onChange={(event)=>{console.log("updated name" ,event,); setCurrentMarketData({...currentMarketData, "marketName":event.target.value})}} placeholder={MarketData.marketName} variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>State</h3>
              <TextField fullWidth value = {currentMarketData.marketState} onChange={(event)=>{console.log("updated state" ,event,); setCurrentMarketData({...currentMarketData, "marketState":event.target.value})}} placeholder={MarketData.marketState} variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Longitude</h3>
              <TextField fullWidth value = {currentMarketData.longitude} onChange={(event)=>{console.log("updated Longitude" ,event,); setCurrentMarketData({...currentMarketData, "longitude":event.target.value})}} placeholder={MarketData.timeZone} variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Latitude</h3>
              <TextField fullWidth value = {currentMarketData.latitude} onChange={(event)=>{console.log("updated Latitude" ,event,); setCurrentMarketData({...currentMarketData, "latitude":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Map Zoom</h3>
              <TextField fullWidth value = {currentMarketData.mapZoom} onChange={(event)=>{console.log("updated Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "mapZoom":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Android Map Zoom</h3>
              <TextField fullWidth value = {currentMarketData.androidMapZoom} onChange={(event)=>{console.log("updated Android Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "androidMapZoom":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Ios Map Zoom</h3>
              <TextField fullWidth value = {currentMarketData.iosMapZoom} onChange={(event)=>{console.log("updated Ios Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "iosMapZoom":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Default Home screen</h3>
              <TextField fullWidth value = {currentMarketData.defaultHomeScreen} onChange={(event)=>{console.log("updated Default Home screen" ,event,); setCurrentMarketData({...currentMarketData, "defaultHomeScreen":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Reservation maximum duration</h3>
              <TextField fullWidth value = {currentMarketData.reservationMaxDurationDays} onChange={(event)=>{console.log("updated Reservation maximum duration" ,event,); setCurrentMarketData({...currentMarketData, "reservationMaxDurationDays":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Validation account reservation maximum duration</h3>
              <TextField fullWidth value = {currentMarketData.houseAccountReservationMaxDurationDays} onChange={(event)=>{console.log("houseAccountReservationMaxDurationDays" ,event,); setCurrentMarketData({...currentMarketData, "houseAccountReservationMaxDurationDays":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Description</h3>
              <TextField fullWidth value = {currentMarketData.description} onChange={(event)=>{console.log("updated Description" ,event,); setCurrentMarketData({...currentMarketData, "description":event.target.value})}} placeholder="Select" variant="outlined"></TextField>
            </Grid><br/>          
            <Button variant="contained" onClick={()=>updateMarketData()}>Edit</Button>
     </div>
    </div>

  );
};
