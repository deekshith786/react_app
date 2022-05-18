import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';


export const ArchivedTableData = (params) => {

  const {searched} = params;  

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      const [FilteredData,setFilteredData] = useState([]);

      const [ArchivedMarketData,setArchivedMarketData] = useState([]);
      useEffect(()=> {
        fetch("http://localhost:9005/market/getAllMarketsByStatus/Archived/0")
        .then((res) => res.json())
                .then((res) => {setArchivedMarketData(res); setFilteredData(res)})
                .catch((err) => console.error(err))
        }, [])
      
        useEffect(()=> {
          console.log(searched)
          const filteredRows = ArchivedMarketData.filter((row) => {
            return row.marketName.toString().toLowerCase().includes(searched.toString().toLowerCase());
          });
          setFilteredData(filteredRows);
        },[searched])

      function activeData (row) {

        console.log(row);
        fetch("http://localhost:9005/market/updateMarketStatus/"+row.marketID, {method:"PUT", 
        headers: new Headers({
          'Content-Type':'application/json'
          }),})
        .then(response=>console.log(response.json()));
        console.log(JSON.stringify(row))
        Swal.fire(
          'Activated Data Successfully!',
          'Yay!',
          'success'
        ) 
        window.location.reload(false);
      }
        
  
    return (
      <motion.div style={{margin:'30px'}}
      initial={{x: '100vw'}}
      animate={{x: 0}}
      transition={{delay:0.2, duration : 0.2 }}
>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Photo</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Time Zone</StyledTableCell>
                <StyledTableCell align="center">Latitude</StyledTableCell>
                <StyledTableCell align="center">Longitude</StyledTableCell>
                <StyledTableCell align="center">Toatl Active Locations</StyledTableCell>
                <StyledTableCell align="center">Total Competitor Locations</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {FilteredData.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">{row.marketName}</StyledTableCell>
                  <StyledTableCell align="center">{row.photo}</StyledTableCell>
                  <StyledTableCell align="center">{row.center}</StyledTableCell>
                  <StyledTableCell align="center">{row.timeZone}</StyledTableCell>
                  <StyledTableCell align="center">{row.latitude}</StyledTableCell>
                  <StyledTableCell align="center">{row.longitude}</StyledTableCell>
                  <StyledTableCell align="center">{row.activeLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center">{row.competitorLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center"><Button variant='contained' color='success' endIcon={<ReplayIcon />} onClick={()=>activeData(row)}>Recover</Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </motion.div>
      );
    
};