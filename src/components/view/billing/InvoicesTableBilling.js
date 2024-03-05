import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdOutlineFileDownload } from "react-icons/md";

function createData(DATE, AMOUNT, PLAN, STATUS) {
  return { DATE, AMOUNT, PLAN, STATUS };
}

const rows = [
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
  createData('29-Feb-2024', "₹199.00" , "Review - Growth 500" , "Closed"),
];

export default function InvoicesTableBilling() {
  return (
    <div className='border-2 border-[#CFD5E1] px-5 py-4 rounded-[6px]'>
        <h6>Invoices</h6>
        <div className='pt-7'>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>DATE</TableCell>
                    <TableCell align="center">AMOUNT</TableCell>
                    <TableCell align="center">PLAN</TableCell>
                    <TableCell align="center">STATUS</TableCell>
                    <TableCell align="center">INVOICE</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.DATE}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.DATE}
                    </TableCell>
                    <TableCell align="center">{row.AMOUNT}</TableCell>
                    <TableCell align="center">{row.PLAN}</TableCell>
                    <TableCell align="center">{row.STATUS}</TableCell>
                    <TableCell align="center">
                        <div className='w-full flex items-start justify-center'>
                            <MdOutlineFileDownload className='w-[12px] h-[12px] text-[#334851]'/>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}