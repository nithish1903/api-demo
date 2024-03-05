"use client"
// DateDB

import React, { useEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export const ColorPickerES = ({color,setColor}) => {
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
    <div className='relative'>
        <div onClick={()=>{setOpen(!open)}} className={`w-[240px] rounded-[6px] z-10 border-2 border-[#CFD5E1] flex items-center`}>
          <div className={`w-[43px] h-[43px] rounded-[6px] border-r-2 border-[#CFD5E1]`} style={{backgroundColor:color?color:"#aabbcc"}}></div>
          <p className='ml-5 text-[#334851] '>{color?color:"#aabbcc"}</p>
        </div>
        <div ref={refOne} className='absolute top-12 left-0 z-[100]'>
            {
                open && (
                    <div className='' onMouseLeave={handleOnClickOutside}>
                        <HexColorPicker color={color?color:"#aabbcc"} onChange={setColor} />;
                    </div>
                )
            }
        </div>
      
    </div>
  );
};

