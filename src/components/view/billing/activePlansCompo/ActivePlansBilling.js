"use client"
import React, { useState } from 'react'
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsCreditCardFill } from "react-icons/bs";
import SwitchGreen from '@/components/common/SwitchGreen';
import { HiDotsHorizontal } from "react-icons/hi";
import "./table.css"

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const options = [
    {
        label:'Plan',
        link:"/app/billing/plan"
    }
  ];
  const ITEM_HEIGHT = 48;

  const thead = ["Plan","Subscription","Current Usage Fee","Paid By","Due On","Total","Action"]


const ActivePlansBilling = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


  return (
    <div className=''>
        <div className='mb-7'>
            <h6 className='font-[700]'>Active plans</h6>
        </div>
        <div className=''>
            <table className='w-full'>
                <thead className='py-2.5'>
                    <tr>
                        {
                            thead.map((heading,h)=>{
                                return <th key={h} scope="col" className='text-left'>{heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr className=' box-border  border-2 border-[#CFD5E1] rounded-[6px]'>
                        <td data-label="Plan" className='py-4 pl-4 '>
                            <div className='flex items-center justify-end xl:justify-start gap-4'>
                                <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#F3F6F9] rounded-[6px]'>
                                    <HiOutlineBookOpen className='w-[20px] h-[20px] text-[#0266E1]' /> 
                                </div>
                                <div>
                                    <h6 className='text-[16px] font-[700]'>Reviews</h6>
                                    <p className='text-[14px]'>Growth 500</p>
                                </div>
                            </div>
                        </td>
                        <td data-label="Subscription" className='py-4'>
                            <div className='flex items-center justify-end xl:justify-start gap-2'>
                                <div>
                                    <BsCreditCardFill className='text-[#D9D9D9] w-[12px] h-auto' />
                                </div>
                                <p className='text-[16px]'>₹199/Monthly</p>
                            </div>
                        </td>
                        <td data-label="Current Usage Fee" className='py-4'>
                            <div className='flex flex-col md:flex-row justify-end xl:justify-start gap-4'>
                                <div>
                                    <div className='flex items-center justify-end xl:justify-start gap-2'>
                                        <div>
                                            <BsCreditCardFill className='text-[#D9D9D9] w-[12px] h-auto' />
                                        </div>
                                        <p className='text-[16px] font-bold m-0'>₹0.00</p>
                                    </div>
                                    <p className='text-[14px]'>Review Booster</p>
                                </div>
                                <div className=''>
                                    <div className='inline-block'>
                                        <SwitchGreen  />
                                    </div>
                                    <p className='text-[14px]'>OFF</p>
                                </div>
                            </div>
                        </td>
                        <td data-label="Paid By" className='py-4'>
                            <p className='text-[16px]'>Credit Card</p>
                        </td>
                        <td data-label="Due On" className='py-4'>
                            <p className='text-[16px]'>Feb 29, 2024</p>
                        </td>
                        <td data-label="Total" className='py-4'>
                            <p className='text-[16px] font-bold'>₹2388.00</p>
                        </td>
                        <td data-label="Action" className='py-4 pr-4'>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <HiDotsHorizontal className='text-[#334851] w-[20px] h-auto'/>
                            </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                <Link href={option.link} className='w-full block'> {option.label}</Link>
                              </MenuItem>
                            ))}
                          </Menu>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ActivePlansBilling