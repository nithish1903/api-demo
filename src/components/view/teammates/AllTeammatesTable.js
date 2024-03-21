// Importing necessary dependencies
"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@emotion/react';
import { TableHead } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { teammatesActionGet } from '@/lib/redux/features/teammates/teammatesAction';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LoadingSkeletonBasic } from '@/components/common/LoadingSkeleton';


const no_per_page = [5,10,25,50,100]

export default function AllTeammatesTable() {
  const theme = useTheme();
  const dispatch = useDispatch()
  // Redux selector to get teammates data
  const { teammatesData, isLoading, errorMessage, isError, isSuccess } = useSelector((state) => {
    return state.teammates;
  });

  // Extracting data and pagination details
  const is_teammates = isSuccess && teammatesData && Object.keys(teammatesData).length > 0 && teammatesData.data;
  const is_pagination = isSuccess && teammatesData && Object.keys(teammatesData).length > 0 && teammatesData.pagination;

  // State variables for total, page, and rowsPerPage
  const [total,setTotal] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(null);

  React.useEffect(() => {
    if (is_pagination&&isSuccess) {
      setPage(is_pagination.page - 1);
      setRowsPerPage(is_pagination.per_page);
      setTotal(is_pagination.total);
    }
  }, [is_pagination,isSuccess]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    let no_newPage = newPage +1
    const formData = {
      "page": no_newPage,
      "per_page": rowsPerPage
    }
    dispatch(teammatesActionGet(formData))
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value,10));
    setPage(0);

    const formData = {
      "per_page": parseInt(event.target.value),
      "page": 1
    }
    dispatch(teammatesActionGet(formData))
  };

       

  // JSX rendering
  return (
    <>
      {
        isLoading ? (
          <div className='py-4 px-5'>
              <LoadingSkeletonBasic />
          </div>
        ) : (
          <>
          <TableContainer component={Paper}>
            <Table  aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Last Login</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {is_teammates &&
                  is_teammates.map((row, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.email}
                        </TableCell>
                        <TableCell align="left">{row.last_login_at}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              <TableFooter sx={{ paddingLeft: "0px" }}>
                <TableRow sx={{ paddingLeft: "0px",width:"100%" }}>
                      
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 25]}
              count={total}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )
      }
    </>
  );
}
