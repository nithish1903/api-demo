"use client"
// DateDB

import React, { useEffect, useRef, useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { DateRange } from 'react-date-range';
import { addDays,format } from 'date-fns';
import { TiArrowSortedDown } from 'react-icons/ti';

const AllTimeDB = () => {


  const [dateRangeValue,setDateRangeValue] = useState("All Time")

  const [range,setRange] = useState([
    {
      startDate: null,
      endDate: addDays(null),
      key: 'selection'
    }
  ])
  const [open,setOpen] = useState(false)
  const refOne = useRef(null)


  useEffect(()=>{
    if(range&&range.length>0&&range[0].startDate){
        setDateRangeValue(`${format(range[0].startDate,"dd/MM/yyyy")} to ${format(range[0].endDate,"dd/MM/yyyy")}`)
    }
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
    <div className='relative'>
        <div onClick={()=>{setOpen(!open)}} className={`${range&&range.length>0&&range[0].startDate?`w-auto`:`w-[174px]`} bg-[#FFFFFF] flex items-center justify-between border-2 border-[#CFD5E1] p-2 rounded-[4px] z-10`}>
          <div className='mx-2'>
            <span>{dateRangeValue}</span>
          </div>
          <div className={`${open?"rotate-180":"rotate-0"} transition-all`}>
            <TiArrowSortedDown />
          </div>
        </div>
        <div ref={refOne} className='absolute top-12  right-14 md:right-0 w-[270px] md:w-[332px]'>
            {
                open && (
                    <div className='border-2 shadow-2xl'>
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
      
    </div>
  );
};

export default AllTimeDB;

