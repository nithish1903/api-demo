"use client";
import { Box, Drawer, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'

import { FaAngleDown } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import NavBarCompo from './NavBarCompo';
import DashboardHeader from './DashboardHeader';
import { usePathname } from 'next/navigation'
import PageHeaderLayout from './PageHeaderLayout';

const AppLayout = React.memo(({children}) => {

    const [showNavBar,setShowNavBar] = useState(true)
    const [showSublink,setShowSubLink] = useState("")
    const [tablet,setTablet] = useState(false)
    const [openDrawer,setOpenDrawer] = useState(false)
    const pathname = usePathname()
    const theme = useTheme()
    console.log(pathname)


    useLayoutEffect(() => {
        if (typeof(window)!=="undefined") {
            const checkIsTablet = () => {
                setTablet(window.innerWidth <= 1124);
                setShowNavBar(window.innerWidth > 1124);
            };
            checkIsTablet();
            window.addEventListener("resize", checkIsTablet);
    
            return () => {
              window.removeEventListener("resize", checkIsTablet);
            };
        }
    }, [window]);
    

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

    const handleToggleDrawer = ()=>{
        setOpenDrawer(!openDrawer)
    }

  return (
    <Box className='bg-[#F3F5F8] flex'>
        {
            tablet ? (
                <div>
                    <Drawer className='overflow-visible' open={openDrawer} onClose={handleToggleDrawer} sx={{overflowY:"visible"}}>
                        <Box sx={{ width: 300 , paddingRight:"30px" }} role="presentation" onClick={handleToggleDrawer}>
                            <NavBarCompo 
                                navLists={navLists} 
                                showSublink={showSublink} 
                                handleShowLink={handleShowLink} 
                                handleShowNavBar={()=>setShowNavBar(false)} 
                            />
                        </Box>
                    </Drawer>
                </div>
            ) : (
                <Box className="fixed top-0 left-0">
                    <Box sx={{
                        paddingTop:"40px",
                        width:`${showNavBar?300:0}px`,
                        transform: `${showNavBar?"none":"translateX(-300px)"}`,
                        transition: `${showNavBar?"transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms":"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}`,
                        visibility:`${showNavBar?"visible":"hidden"}`,
                    }} className="bg-[#fff] h-[100vh] relative">
                        
                        <NavBarCompo 
                            navLists={navLists} 
                            showSublink={showSublink} 
                            handleShowLink={handleShowLink} 
                            handleShowNavBar={()=>setShowNavBar(false)} 
                        />
                    </Box>
                </Box>
            )
        }
         {/* Content */}
         <Box
            sx={{
                    marginTop:"40px",
                    width: `calc(100% - ${showNavBar?300:0}px)`,
                    marginLeft: `${showNavBar?300:0}px`,
                    transition: theme.transitions.create(['width'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,}),
            }}
        >
            <Box className=" pl-3 lg:pl-10 w-full">
                {
                    tablet?(
                            <Box sx={{
                                transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                            }} onClick={()=>setOpenDrawer(true)} className="inline-block p-3 mr-5 rounder-[4px] bg-[#fff] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                                <FaBars />
                            </Box>
                    ):(
                        !showNavBar&&(
                            <Box sx={{
                                transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                            }} onClick={()=>setShowNavBar(true)} className="inline-block p-3 mt-5 mr-5 rounder-[4px] bg-[#fff] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                                <FaBars />
                            </Box>
                        )
                    )
                }
                <Box sx={{
                    transition: "width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                }}>
                    {
                        pathname=="/app/dashboard" ? <DashboardHeader /> : <PageHeaderLayout /> 
                    }
                </Box>
            </Box>
            <Box className="ml-3 lg:ml-12 mt-8 mr-3 lg:mr-8">
                {children}
            </Box>
        </Box>
    </Box>
  )
})

export default AppLayout