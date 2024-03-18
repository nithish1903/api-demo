"use client";
import { Box, Drawer, useTheme } from '@mui/material'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'

import { LuLayoutDashboard } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import NavBarCompo from './NavBarCompo';
import DashboardHeader from './DashboardHeader';
import { usePathname } from 'next/navigation'
import PageHeaderLayout from './PageHeaderLayout';
import { RiBillLine } from "react-icons/ri";
import { LuUserCog2 ,} from "react-icons/lu";
import { AiOutlineControl } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '@/lib/redux/features/userAuth/userAction';
import { getCookiesNext } from '@/lib/cookies/cookiesNext';
import Cookies from 'js-cookie';



const AppLayout = React.memo(({children}) => {
    const dispatch  = useDispatch()
    const [showNavBar,setShowNavBar] = useState(true)
    const [showSublink,setShowSubLink] = useState("")
    const [tablet,setTablet] = useState(false)
    const [openDrawer,setOpenDrawer] = useState(false)
    const pathname = usePathname()
    const theme = useTheme()


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

    useEffect(()=>{
        const user_token  = JSON.parse(Cookies.get("user"))
        if(user_token && user_token.account_id){
            dispatch(userDetails({ "user_id": user_token.account_id}))
        }
    },[dispatch])

   
    

    const navLists  = [
        {
            label:"Dashboard",
            link:"/app/dashboard",
            icon:(className)=><LuLayoutDashboard  className={`${className}`}/>,
            subLink:[]
        },
        {
            label:"Moderation",
            link:"/app/moderation",
            icon:(className)=><AiOutlineControl  className={`${className}`}/>,
            subLink:[]
        },
        {
            label:"Settings",
            link:"/app/settings",
            icon:(className)=><LuSettings  className={`${className}`}/>,
            subLink:[]
        },
        {
            label:"Billing",
            link:"/app/billing",
            icon:(className)=><RiBillLine  className={`${className}`}/>,
            subLink:[
                // {
                //     lable:"Form",
                //     link:"/auth/login"
                // },
            ]
        },
        {
            label:"Teammates",
            link:"/app/teammates",
            icon:(className)=><LuUserCog2  className={`${className}`}/>,
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