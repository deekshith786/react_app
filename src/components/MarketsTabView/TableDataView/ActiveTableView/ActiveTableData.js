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
        fetch("http://localhost:9000/market/getAllMarketsByState/Active/0")
        .then((res) => res.json())
                .then((res) => {setActiveMarketData(res)})
                .catch((err) => console.error(err))
        }, [])
              
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="customized table">
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
              {ActiveMarketData.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">{row.marketName}</StyledTableCell>
                  <StyledTableCell align="center">{row.photo}</StyledTableCell>
                  <StyledTableCell align="center">{row.center}</StyledTableCell>
                  <StyledTableCell align="center">{row.timeZone}</StyledTableCell>
                  <StyledTableCell align="center">{row.latitude}</StyledTableCell>
                  <StyledTableCell align="center">{row.longitude}</StyledTableCell>
                  <StyledTableCell align="center">{row.activeLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center">{row.competitorLocationsCount}</StyledTableCell>
                  <StyledTableCell align="center">
                        <Button variant='text' color='primary' onClick={()=>{ navigate('/edit')}}>Edit</Button>
                        <Button variant='contained' color='error'>Archive</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    
};


