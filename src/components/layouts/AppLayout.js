"use client";
import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'

import { FaAngleDown } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import LayoutHeader from './LayoutHeader';


const AppLayout = ({children}) => {

    const [showNavBar,setShowNavBar] = useState(true)
    const [showSublink,setShowSubLink] = useState("")
    const theme = useTheme()

    const navLists  = [
        {
            label:"Dashboard",
            link:"/app/dashboard",
            icon:(className)=><LuLayoutDashboard  className={`${className}`}/>,
            subLink:[
                {
                    lable:"Form",
                    link:"/auth/login"
                },
                {
                    lable:"Lable",
                    link:"/app/dashboard"
                },
                {
                    lable:"Input",
                    link:"/app/dashboard"
                },
            ]
        },
        {
            label:"Emails",
            link:"/app/dashboard",
            icon:(className)=><LuLayoutDashboard  className={`${className}`}/>,
            subLink:[]
        },
        {
            label:"On-Site Widgets",
            link:"/app/dashboard",
            icon:(className)=><LuLayoutDashboard  className={`${className}`}/>,
            subLink:[
                {
                    lable:"Form",
                    link:"/auth/login"
                },
                {
                    lable:"Lable",
                    link:"/app/dashboard"
                },
                {
                    lable:"Input",
                    link:"/app/dashboard"
                },
            ]
        },
        {
            label:"Analytics",
            link:"/app/dashboard",
            icon:(className)=><LuLayoutDashboard  className={`${className}`}/>,
            subLink:[]
        },
    ]

    const handleShowLink = useCallback((lable)=>{
        if(showSublink==lable){
            setShowSubLink("")
        }else{
            setShowSubLink(lable)
        }
    },[showSublink])

    const handleShowNavBar = ()=>{
        setShowNavBar(!showNavBar)
    }

  return (
    <Box className='bg-[#F3F5F8] flex'>
        <Box sx={{
            width:`${showNavBar?335:0}px`,
            transform: `${showNavBar?"none":"translateX(-320px)"}`,
            transition: `${showNavBar?"transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms":"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}`,
            visibility:`${showNavBar?"visible":"hidden"}`,
        }} className="bg-[#fff] h-[100vh] relative">
            <Box className="mt-8">
                <div className='w-[225px] mx-auto mb-16'>
                    <Image src={"/logo.svg"} alt='logo'  height={0} width={225} className='h-auto'/>
                </div>
                <div className=''>
                    {
                        navLists.map((nav,n)=>{
                            return <div key={n} className=''>
                                {
                                    nav.subLink.length>0 ? (
                                        <div>
                                            <div className={`group py-3 my-4 pl-12 pr-2 grid grid-cols-8 hover:text-[#fff] bg-[#fff] hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-700 hover:to-sky-500`} 
                                                onClick={()=>{
                                                    handleShowLink(nav.label)
                                                }}
                                            >
                                                <div className='col-span-7 flex items-center'>
                                                    <div className='mr-8'>
                                                        {nav.icon("w-[21px] h-[21px] group-hover:text-[#fff] text-[#334851] ")}
                                                    </div>
                                                    <p className='text-[18px] font-[300] group-hover:text-[#fff]'>{nav.label}</p>
                                                </div>
                                               <div className='col-span-1'>
                                                    <div className=''>
                                                        <FaAngleDown className='w-[18px] h-[18px] group-hover:text-[#fff] ' />
                                                    </div>
                                               </div>
                                            </div>
                                            {
                                                showSublink == nav.label && (
                                                    <ul>
                                                        {nav.subLink.map((ele,e)=>{
                                                            return <li className='py-3 pl-16 pr-2 flex items-center'>
                                                                <div className='mr-4'>
                                                                    <FaRegCircle width={"21px"} height={"21px"} />
                                                                </div>
                                                                <Link href={ele.link} className='text-[#334851]'>{ele.lable}</Link>
                                                            </li>
                                                        })}
                                                    </ul>
                                                )
                                            }
                                        </div>
                                    ) :(
                                        <Link href={nav.link}  className={`group py-3 my-4 m pl-12 pr-2 flex items-center hover:text-[#fff] bg-[#fff] hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-700 hover:to-sky-500`}>
                                            <div className='mr-8'>
                                                {nav.icon("w-[21px] h-[21px] group-hover:text-[#fff] text-[#334851]")}
                                            </div>
                                            <p className='text-[18px] font-[300] group-hover:text-[#fff]'>{nav.label}</p>
                                        </Link>
                                    )
                                }
                            </div>
                        })
                    }
                </div>
            </Box>
            <Box className="absolute top-14 -right-3 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#fff] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]"
                onClick={handleShowNavBar}
            >
                <Box>
                    <FaAngleDown className='text-[#0266E1] rotate-90' />
                </Box>
            </Box>
        </Box>
         {/* Content */}
         <Box
            sx={{
                zIndex: 1,
                flexGrow: 1,
                bgcolor: theme.palette.primary[50],
                height: 'calc(100% - 96px)',
                width: `calc(100% - ${showNavBar?335:0}px)`,
                marginLeft: 0,
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
                }),
            }}
        >
            {
                !showNavBar&&(
                    <Box display={"inline-block"} onClick={handleShowNavBar} className="p-3 mt-5 ml-5 rounder-[4px] bg-[#fff] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                        <FaBars />
                    </Box>
                )
            }
            <LayoutHeader />
          {children}
        </Box>
    </Box>
  )
}

export default AppLayout