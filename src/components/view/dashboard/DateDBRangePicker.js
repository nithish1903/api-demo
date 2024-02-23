"use client"
// DateDB

import React, { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { DateRangePicker } from 'react-date-range';
import { addDays,format } from 'date-fns';

import { IoCalendarOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import ModelDateRange from '@/components/common/ModelDateRange';
import { Button } from '@mui/material';
import ButtonPrim from '@/components/common/ButtonPrim';


const DateDBRangePicker = () => {
  const [range,setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])
  const [openModel,setOpenModel] = useState(false)

  return (
    <div className='w-auto inline-block relative'>
      <div className='w-auto flex items-center border-2 border-[#CFD5E1] p-2 rounded-[4px] ' onClick={()=>{setOpenModel(openModel => !openModel)}}>
        <div>
          <IoCalendarOutline />
        </div>
        <div className='mx-2'>
          <span>{`${format(range[0].startDate,"dd/MM/yyyy")} to ${format(range[0].endDate,"dd/MM/yyyy")}`} </span>
        </div>
        <div className=''>
          <TiArrowSortedDown />
        </div>
      </div>
      <ModelDateRange openModel={openModel} setOpenModel={setOpenModel} >
        <div>
          <DateRangePicker 
            onChange={item => setRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={range}
            direction="horizontal"
            className='border-2 border-[#CFD5E1] p-2 rounded-[4px] bg-[#fff]'
          />
          <div className='flex justify-end mt-5 gap-5'>
            <div>
              <ButtonPrim type={"button"} onClick={()=>{setOpenModel(!openModel)}} className={"w-auto"} >Save</ButtonPrim>
            </div>
            <div>
              <Button onClick={()=>{setOpenModel(!openModel)}} className='py-2.5' variant="outlined">Cancle</Button>
            </div>
          </div>
        </div>
      </ModelDateRange>
    </div>
  );
};

export default DateDBRangePicker;

