"use client"
// DateDB

import React, { useEffect, useRef, useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { DateRange } from 'react-date-range';
import { addDays,format } from 'date-fns';
import { IoCalendarOutline } from 'react-icons/io5';
import { TiArrowSortedDown } from 'react-icons/ti';

const DateDBRange = () => {


  const [dateRangeValue,setDateRangeValue] = useState("All Time")
  const [range,setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])
  const [open,setOpen] = useState(false)
  const refOne = useRef(null)


  useEffect(()=>{
    setDateRangeValue(`${format(range[0].startDate,"dd/MM/yyyy")} to ${format(range[0].endDate,"dd/MM/yyyy")}`)
  },[range])


  useEffect(()=>{
    document.addEventListener("keydown",handleHide,true)
    document.addEventListener("click",handleOnClickOutside,true)
  },[])

  const handleHide = (e)=>{
    if(e.key == "Escape"){
      setOpen(false)
    }
  }

  const handleOnClickOutside = (e)=>{
    if(refOne.current && !refOne.current.contains(e.target)){
      setOpen(false)
    }

  }

  return (
    <div className=' relative'>
       <div className='w-auto flex items-center border-2 border-[#CFD5E1] p-2 rounded-[4px] ' onClick={()=>{
        setOpen(open => !open)
      }}>
          <div>
            <IoCalendarOutline />
          </div>
          <div className='mx-2'>
            <span>{dateRangeValue}</span>
          </div>
          <div className=''>
            <TiArrowSortedDown />
          </div>
      </div>
      {
        open && (
          <div ref={refOne} className='absolute top-12 right-0 w-[270px] md:w-[332px] border-2 shadow-2xl'>
              <DateRange 
                onChange={item => setRange([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={range}
                direction="vertical"
              />
          </div>
        )
      }
      
    </div>
  );
};

export default DateDBRange;

