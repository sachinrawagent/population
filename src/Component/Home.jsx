import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from"axios";
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
export const Home = () => {
    const [getInfo, setInfo] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios.get(`https://countrywise.herokuapp.com/city`)
            .then((res) => setInfo([...res.data]));
    }
    // console.log(getInfo);

    const handleDelete=(e)=>{
        axios.delete(`https://countrywise.herokuapp.com/city/${e.id}`).then(()=>{
            getData()
        })
    }
    const handlesort=()=>{
        axios.get("https://countrywise.herokuapp.com/city?_sort=population&_order=asc").then((res)=>{
        setInfo([...res.data]);
        })
    }
    const handlesortDesc=()=>{
        axios.get("https://countrywise.herokuapp.com/city?_sort=population&_order=desc").then((res)=>{
        setInfo([...res.data]);
        })
    }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700,mt:5}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="right">Country </StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Population</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getInfo.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Country}</StyledTableCell>
                <StyledTableCell align="right">{row.City}</StyledTableCell>
                <StyledTableCell align="right">{row.population}</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
                <StyledTableCell align="right">{
       <Button variant="contained" onClick={()=>handleDelete(row)}>Delete</Button>}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" onClick={handlesort}>sort by asc population</Button>
     <hr/>
  
     <Button variant="contained" onClick={handlesortDesc}>sort by dsc population</Button>
      </TableContainer>
      
    )
}