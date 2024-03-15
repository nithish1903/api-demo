"use client"
import React, { useEffect } from 'react'
import TabEmailSettings from './TabEmailSettings'
import { useDispatch } from 'react-redux'
import { settingsActionGet } from '@/lib/redux/features/settings/settingsAction'
// import PreviewEmailSettings from './previewemail/PreviewEmailSettings'

const TabPreviewES = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(settingsActionGet())
  },[dispatch])

  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 xl:col-span-7'>
            <TabEmailSettings />
        </div>
        {/* <div className='col-span-12 xl:col-span-5 mt-10 xl:mt-0'>
          <PreviewEmailSettings />
        </div> */}
    </div>
  )
}

export default TabPreviewES