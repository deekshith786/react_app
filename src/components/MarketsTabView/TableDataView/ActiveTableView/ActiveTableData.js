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
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ArchiveIcon from '@mui/icons-material/Archive';
import Swal from 'sweetalert2';

export const ActiveTableData = (params) => {

    let navigate = useNavigate();
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

      const [ActiveMarketData,setActiveMarketData] = useState([]);
      useEffect(()=> {
        fetch("http://localhost:9005/market/getAllMarketsByStatus/Active/0")
        .then((res) => res.json())
                .then((res) => {setActiveMarketData(res)})
                .catch((err) => console.error(err))
        }, [])
              
      function archiveData (rowData) {

        console.log(rowData);
        fetch("http://localhost:9005/market/updateMarketStatus/"+rowData.marketID, {method:"PUT", 
        headers: new Headers({
          'Content-Type':'application/json'
          }),})
        .then(response=>console.log(response.json()));
        console.log(JSON.stringify(rowData))
        Swal.fire(
          'Archived Data Successfully!',
          'Yay!',
          'success'
        ) 
        window.location.reload(false);
      }
      
    return (
      <div style={{margin:'30px'}}>
        <TableContainer component={Paper}>
          <Table sx={{ width: 1 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
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
              {ActiveMarketData.map((rowData) => (
                <StyledTableRow key={rowData.name}>
                  <StyledTableCell component="th" scope="row">{rowData.marketName}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.photo}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.center}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.timeZone}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.latitude}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.longitude}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.activeLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center">{rowData.competitorLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center">
                        <Button variant='text' color='primary' onClick={()=>{navigate('/edit', { state: { rowData : rowData }})}}>Edit</Button>
                        <Button variant='contained' color='error' endIcon={<ArchiveIcon />} onClick={()=>archiveData(rowData)}>Archive</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
    
};


