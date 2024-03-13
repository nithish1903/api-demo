"use client"

import React, { useEffect } from 'react'
import { getCookiesNext } from './cookiesNext'
import { redirect } from 'next/navigation'

const CheckCookiesRedirect = ({children}) => {

    useEffect(()=>{
        if(getCookiesNext("user")){
            redirect('/app/dashboard')
        }else{
            redirect('/auth/login')
        }
      },[])

  return (
    <>
        {children}
    </>
  )
}

export default CheckCookiesRedirect