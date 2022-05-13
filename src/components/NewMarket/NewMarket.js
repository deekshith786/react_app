import {  Button, Grid, TextField} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";  

import './NewMarket.css'

export const NewMarketcomponent = (params) => {

  const [MarketData,setMarketData] = useState([]);
  const [currentMarketData,setCurrentMarketData] = useState([]);

  const updateMarketData = () =>{
    console.log(JSON.stringify(currentMarketData))
    const newdata = JSON.stringify(currentMarketData);

    fetch("http://localhost:9000/market/addMarket", {method:"POST", body:newdata, 
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

//   useEffect(()=>{
//     //for worldwide fetch
//       fetch(MarketData?.length == 0 ? "http://localhost:9000/market/getMarketById/420a0ca6-e56a-4bf5-b461-af9f0ae7f62c": "http://localhost:9000/market/getMarketById/"+MarketData?.marketID)
//       .then(response => response.json())
//       .then((data)=>{
//           setMarketData(data);
//           setCurrentMarketData(data)
//           console.log(data);
//       });
//     },[]);

  return (
    <div className="main-container">
      <div className="editHeader">
        <h1>New Market</h1><hr/>
        <br/><br/>
        <input accept="image/*" id="upload-company-logo" type='file'  />
      </div>
      <div className="MuiCardContent-root">
            <Grid container spacing={1}></Grid>
            <Grid xs={12} sm={6} item>
            <h3>TimeZone</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated timezone" ,event,); setCurrentMarketData({...currentMarketData, "timeZone":event.target.value})}} placeholder= "Timezone" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Name</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated name" ,event,); setCurrentMarketData({...currentMarketData, "marketName":event.target.value})}} placeholder= "Name" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Center</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated center" ,event,); setCurrentMarketData({...currentMarketData, "center":event.target.value})}} placeholder= "Center" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Radius</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated radius" ,event,); setCurrentMarketData({...currentMarketData, "radius":event.target.value})}} placeholder= "Radius" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Slug</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated slug" ,event,); setCurrentMarketData({...currentMarketData, "slug":event.target.value})}} placeholder= "Slug" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Photo</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated photo" ,event,); setCurrentMarketData({...currentMarketData, "photo":event.target.value})}} placeholder= "Photo" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Top Market</h3>
              <TextField fullWidth  onChange={(event)=>{console.log("updated top market" ,event,); setCurrentMarketData({...currentMarketData, "topMarket":event.target.value})}} placeholder= "topMarket" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>State</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated state" ,event,); setCurrentMarketData({...currentMarketData, "marketState":event.target.value})}} placeholder= "State" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Longitude</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Longitude" ,event,); setCurrentMarketData({...currentMarketData, "longitude":event.target.value})}} placeholder= "Longitude" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Active Location Count</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Active location count" ,event,); setCurrentMarketData({...currentMarketData, "activeLocationsCount":event.target.value})}} placeholder= "Active Location Count" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Latitude</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Latitude" ,event,); setCurrentMarketData({...currentMarketData, "latitude":event.target.value})}} placeholder="Latitude" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Map Zoom</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "mapZoom":event.target.value})}} placeholder="Map zoom" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Android Map Zoom</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Android Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "androidMapZoom":event.target.value})}} placeholder="Android Map zoom" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Ios Map Zoom</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Ios Map Zoom" ,event,); setCurrentMarketData({...currentMarketData, "iosMapZoom":event.target.value})}} placeholder="Ios Map Zoom" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Default Home screen</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Default Home screen" ,event,); setCurrentMarketData({...currentMarketData, "defaultHomeScreen":event.target.value})}} placeholder="Default Home screen" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Reservation maximum duration</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Reservation maximum duration" ,event,); setCurrentMarketData({...currentMarketData, "reservationMaxDurationDays":event.target.value})}} placeholder="Reservation maximum duration" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Validation account reservation maximum duration</h3>
              <TextField fullWidth onChange={(event)=>{console.log("houseAccountReservationMaxDurationDays" ,event,); setCurrentMarketData({...currentMarketData, "houseAccountReservationMaxDurationDays":event.target.value})}} placeholder="houseAccountReservationMaxDurationDays" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Visible</h3>
              <TextField fullWidth onChange={(event)=>{console.log("Visile" ,event,); setCurrentMarketData({...currentMarketData, "visible":event.target.value})}} placeholder="houseAccountReservationMaxDurationDays" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
            <h3>Description</h3>
              <TextField fullWidth onChange={(event)=>{console.log("updated Description" ,event,); setCurrentMarketData({...currentMarketData, "description":event.target.value})}} placeholder="Description" variant="outlined"></TextField>
            </Grid><br/>          
            <Button variant="contained" onClick={()=>updateMarketData()}>Create Market</Button>
     </div>
    </div>

  );
};
