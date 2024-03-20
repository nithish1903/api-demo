
import React, { useRef, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import { NavMenuHeader } from '@/components/common/MenuCustom';
import { Box } from '@mui/material';
import Image from 'next/image';

const ProfilePicMenu = () => {
    const {userData , isLoading,errorMessage,isError,isSuccess} = useSelector((state)=>{
        return state.user
    })
    const user_response = isSuccess && userData &&  Object.keys(userData).length>0  
    const [anchorEl,setAnchorEl] = useState(null)
    const ref_one = useRef()

  return (
    <div>
        <Box  className="flex items-center gap-3 md:gap-4 cursor-pointer">
            <div className='w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-full' onClick={()=>{
                setAnchorEl(ref_one.current);
            }}>
                <Image src='/assets/images/header/AnilPic.svg' alt='profile-pic' width={50} height={50} className='' />
            </div>
           <div id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} 
            onClick={(event) => {
                setAnchorEl(event.currentTarget);
            }} ref={ref_one} >
                <div className='block md:hidden'>
                    <IoIosArrowDown className='text-[#334851] w-[20px] h-auto' />
                </div>
                <div className='hidden md:block' >
                    <div className='flex items-center'>
                        <p className='text-[14px] font-[700] mr-3'>{user_response && userData.name ? userData.name : ""}</p>
                        <div>
                            <IoIosArrowDown className='text-[#334851] w-[20px] h-auto' />
                        </div>
                    </div>
                    <p className='text-[12px] font-[300]'>Owner</p>
                </div>
           </div>
        </Box>
        <NavMenuHeader anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </div>
  )
}

export default ProfilePicMenu

