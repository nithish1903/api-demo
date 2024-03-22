import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { userReset } from '@/lib/redux/features/userAuth/userSlice';
import { dashboardReset } from '@/lib/redux/features/dashboard/dashboardSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

export function NavMenuHeader({anchorEl,setAnchorEl}) {
    
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()
  const router = useRouter()

  const reset  = ()=>{
      dispatch(userReset())
      dispatch(dashboardReset())
      Cookies.remove("user")
      Cookies.remove("token")
      router.push("/auth/login")
  }

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link href={"/app/general-settings"}>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link href={"/app/teammates"}>Users</Link>
        </MenuItem>
        <MenuItem onClick={()=>{
            handleClose()
            reset()
        }}>Logout</MenuItem>
      </Menu>
    </>
  );
}
