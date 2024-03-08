import React from 'react'

import { Dropdown, DropdownMenuItem,DropdownNestedMenuItem } from '@/components/common/DropdownCustom';

import { TiArrowSortedDown } from 'react-icons/ti'
import { ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/base';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import Link from 'next/link';

const nestedMenu = [
    {
        lable:"Rejected",
        icon: ()=><AiOutlineDelete />,
        link:"",
        nested:[
            {
                lable:"Legal transgression",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Profanity / Inappropriate",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Foreign language",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Contains private information",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Unrelated to the product or service",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"False or misleading",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Fake",
                icon: ()=>{},
                link:"",
            },
            {
                lable:"Other (Write your own)",
                icon: ()=>{},
                link:"",
            },
        ]
    },
]

let nested =[
    {
        lable:"Legal transgression",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Profanity / Inappropriate",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Foreign language",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Contains private information",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Unrelated to the product or service",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"False or misleading",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Fake",
        icon: ()=>{},
        link:"",
    },
    {
        lable:"Other (Write your own)",
        icon: ()=>{},
        link:"",
    },
]

const PublishedButton = ()=>{
    return  <button className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 rounded-[4px]'>
    <span className='w-[14px] h-[14px] bg-[#0266E1] text-[#fff] rounded-full flex items-center justify-center'><IoMdArrowRoundUp /></span>
        Published
    <TiArrowSortedDown className=''/>
</button>
}
const PublishedDrepDown = () => {
    
  return (
    <>
        <Dropdown
                trigger={<button className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 rounded-[4px]'>
                <span className='w-[14px] h-[14px] bg-[#0266E1] text-[#fff] rounded-full flex items-center justify-center'><IoMdArrowRoundUp /></span>
                    Published
                <TiArrowSortedDown className=''/>
            </button>}
                menu={[
                    <DropdownNestedMenuItem
                    label="Rejected"
                    rightIcon={<ArrowRight />}
                    leftIcon={<AiOutlineDelete />}
                    menu={[
                        nested.map((itemnest,i)=>{
                            return <Link href={itemnest.link} key={i} className='my-1 mx-3 w-full block  '>
                                {itemnest.lable}
                            </Link>
                        })
                    ]}
                    />
                ]}
                />
    </>
  )
}

export default PublishedDrepDown