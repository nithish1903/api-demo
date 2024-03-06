import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import { FaAngleDown, FaRegCircle } from 'react-icons/fa6'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBarCompo = ({navLists,showSublink,handleShowLink,handleShowNavBar}) => {
    const pathname = usePathname()

  return (
    <div>
        <Box className="">
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
                                                        return <li key={e} className='py-3 pl-16 pr-2 flex items-center'>
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
                                            {nav.icon(`w-[21px] h-[21px] group-hover:text-[#fff] ${pathname.startsWith(nav.link)?"text-[#0180F9]":"text-[#334851]"} `)}
                                        </div>
                                        <p className={`text-[18px] group-hover:text-[#fff] ${pathname.startsWith(nav.link)?"text-[#0180F9] font-[600]":"text-[#334851] font-[300]"}`}>{nav.label}</p>
                                    </Link>
                                )
                            }
                        </div>
                    })
                }
            </div>
        </Box>
        <Box className="absolute top-14 -right-3 z-[1000] flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#fff] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]"
            onClick={handleShowNavBar}
        >
            <Box>
                <FaAngleDown className='text-[#0266E1] rotate-90' />
            </Box>
        </Box>
    </div>
  )
}

export default NavBarCompo