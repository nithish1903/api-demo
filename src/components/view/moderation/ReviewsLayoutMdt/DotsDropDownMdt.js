import React from 'react'

import { Dropdown, DropdownMenuItem,DropdownNestedMenuItem } from '@/components/common/DropdownCustom';
import { ArrowRight } from '@mui/icons-material';
import Link from 'next/link';
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
        <Dropdown
                trigger={
                    <button className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 py-2 rounded-[4px]'>
                        <BsThreeDotsVertical />
                    </button>}
                menu={[
                        <DropdownNestedMenuItem
                        label="Push to Social"
                        rightIcon={<ArrowRight />}
                        menu={[
                            nested.map((itemnest,i)=>{
                                return <Link href={itemnest.link} key={i} className='my-1 mx-3 w-full block  '>
                                    <div className='flex items-center gap-2'>
                                        {itemnest.icon()}
                                        {itemnest.lable}
                                    </div>
                                </Link>
                            })
                        ]}
                    />,
                    othernested.map((ele,e)=>{
                        return <DropdownMenuItem key={e}>
                                <Link href={ele.link} className='my-1 mx-3 w-full block  '>
                                    <div className='flex items-center'>
                                        {ele.icon()}
                                        {ele.lable}
                                    </div>
                                </Link>
                        </DropdownMenuItem>
                    })
                    ,
                    
                ]}
                />
    </>
  )
}

export default DotsDropDownMdt