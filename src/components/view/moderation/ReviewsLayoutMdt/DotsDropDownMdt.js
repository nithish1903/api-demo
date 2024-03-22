import React from 'react'

// import { ArrowRight } from '@mui/icons-material';
// import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


let nested=[
    {
        lable:"Push to Facebook",
        icon: ()=><FaFacebookSquare />,
        link:"",
    },
    {
        lable:"Connect Twitter",
        icon: ()=><FaSquareXTwitter />,
        link:"",
    },
]

const othernested = [
    {
        lable:"Unmark as incentivized",
        icon: ()=>{},
        link:"",
        nested:[]
    },
    {
        lable:"Re-send review request",
        icon: ()=>{},
        link:"",
        nested:[]
    },
    {
        lable:"Save as site review only",
        icon: ()=>{},
        link:"",
        nested:[]
    },
    {
        lable:"Save as both product & site review",
        icon: ()=>{},
        link:"",
        nested:[]
    },
]

const DotsDropDownMdt = () => {
    
  return (
    <>
     <button className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 py-2 rounded-[4px]'>
        <BsThreeDotsVertical />
    </button>
    </>
  )
}

export default DotsDropDownMdt