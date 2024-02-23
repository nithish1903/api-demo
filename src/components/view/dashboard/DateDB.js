"use client"
// DateDB

import React, { useEffect, useRef, useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { Calendar, DateRangePicker } from 'react-date-range';
import { addDays, format } from 'date-fns';

const DateDB = () => {
  const [calender,setCalendar] = useState("")
  const [open,setOpen] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const refOne = useRef(null)


  useEffect(()=>{
    setCalendar(format(new Date(),"dd/MM/yyyy"))
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

  const handleSelect = (date)=>{
    setCalendar(format(date,"dd/MM/yyyy"))
  }

  return (
    <div>
      <DateRangePicker  
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal" 
      />
      <input value={calender} readOnly className='border-2' onClick={()=>{
        setOpen(open => !open)
      }} />
      <div ref={refOne}>
        {
          open &&  <Calendar date={new Date()} onChange={handleSelect} />
        }
      </div>
    </div>
  );
};

export default DateDB;

