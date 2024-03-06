import React from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiCheck } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function createData(head, Free, Plan1, Plan2,Plan3) {
    return { head, Free, Plan1, Plan2,Plan3 };
}
  
const rows = [
    createData('Automatic Review Requests', true , true , true,true),
    createData('Reminder Review Requests', true , true , true ,true),
    createData('Import Existing Reviews', true , true , true ,true),
    createData('Email Templates Library', true , true , true,true),
    createData('Manual Review Requests', false , true , true,true),
    createData('Review Request Email Editor', false , true , true,true),
    createData('Photo & Video Reviews', false , true , true,true),
    createData('Review Coupons', false , true , true,true),
    createData('Custom Questions', false , false , true,true),
    createData('Smart Prompts', false , true , true,true),
];

const rows2 = [
    createData('Review Widgets', true , true , true,true),
    createData('Star Ratings', true , true , true ,true),
    createData('Review Sorting', true , true , true ,true),
    createData('Reviews Tab', true , true , true,true),
    createData('Remove Kasplo branding', false , true , true,true),
    createData('Product Grouping', false , true , true,true),
    createData('Reviews Carousel', false , true , true,true),
    createData('Attribute Filters', false , true , true,true),
    createData('Community Q&A', false , false , true,true),
    createData('Top Review Highlights', false , true , true,true),
    createData('Smart Filters', false , true , true,true),
    createData('Advanced CSS Editor', false , true , true,true),
];

const CenterCell = ({children})=>{
    return <div className='w-full flex justify-center items-center'>{children}</div>
}

const PlansComparison = () => {
  return (
    <>
        <div>
            <h5 className='font-[700]'>Our Plans Comparison</h5>
        </div>
        <div className='pt-7'>
            <TableContainer component={Paper}>
            <Table aria-label="simple table" className='border-0'>
                <TableHead>
                    <TableRow sx={{ "& td ,& th": { border: 0 } }}>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                            <h6 className='font-bold'>Free</h6>
                        </TableCell>
                        <TableCell align="center">
                            <h6 className='font-bold'>Plan 1</h6>
                        </TableCell>
                        <TableCell align="center">
                            <h6 className='font-bold'>Plan 2</h6>
                        </TableCell>
                        <TableCell align="center">
                            <h6 className='font-bold'>Plan 3</h6>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ "& td": { border: 0 } }}>
                        <TableCell><p className='font-bold'>Collect Reviews</p></TableCell>
                    </TableRow>
                        {rows.map((row,r) => (
                            <TableRow
                            key={r}
                            sx={{ "& td,& th": { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        {row.head}
                                    </div>
                                    <div>
                                        <AiOutlineExclamationCircle />
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center" className=''>
                                <CenterCell>{row.Free && <FiCheck className=''/>}</CenterCell>
                            </TableCell>
                            <TableCell align="center">
                                <CenterCell>{row.Plan1 && <FiCheck />}</CenterCell>
                            </TableCell>
                            <TableCell align="center" className='bg-[#C9E1FF] '>
                                <CenterCell>{row.Plan2 && <FiCheck className='text-[#0266E1]'/>}</CenterCell>
                            </TableCell>
                            <TableCell align="center">
                                <CenterCell>{row.Plan3 && <FiCheck />}</CenterCell>
                            </TableCell>
                            </TableRow>
                        ))}
                        <TableRow className='pt-14 pb-5' sx={{ "& td": { border: 0 } }}>
                            <TableCell><p className='font-bold'>Display Reviews On-Site</p></TableCell>
                        </TableRow>
                        {rows2.map((row,r) => (
                            <TableRow
                            key={r}
                            sx={{ "& td,& th": { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        {row.head}
                                    </div>
                                    <div>
                                        <AiOutlineExclamationCircle />
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="center" className=''>
                                <CenterCell>{row.Free && <FiCheck className=''/>}</CenterCell>
                            </TableCell>
                            <TableCell align="center">
                                <CenterCell>{row.Plan1 && <FiCheck />}</CenterCell>
                            </TableCell>
                            <TableCell align="center" className='bg-[#C9E1FF] '>
                                <CenterCell>{row.Plan2 && <FiCheck className='text-[#0266E1]'/>}</CenterCell>
                            </TableCell>
                            <TableCell align="center">
                                <CenterCell>{row.Plan3 && <FiCheck />}</CenterCell>
                            </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </>
  )
}

export default PlansComparison