"use client"
// DateDB

import React, { useEffect, useRef, useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { DateRange } from 'react-date-range';
import { addDays,format } from 'date-fns';

const DateDBRange = () => {
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
    <div>
      <input value={`${format(range[0].startDate,"dd/MM/yyyy")} to ${format(range[0].endDate,"dd/MM/yyyy")}`} readOnly className='border-2' onClick={()=>{
        setOpen(open => !open)
      }} />
      <div ref={refOne}>
        {
          open &&  <DateRange 
          onChange={item => setRange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={range}
          direction="horizontal"
          />
        }
      </div>
    </div>
  );
};

export default DateDBRange;

