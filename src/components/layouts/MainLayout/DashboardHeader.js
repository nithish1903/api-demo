
import React from 'react'
import ProfilePicMenu from './ProfilePicMenu';


const DashboardHeader = () => {

  return (
    <div className='grid grid-cols-12 gap-5 md:gap-0'>
        {/* <div className='col-span-12 md:col-span-6'>
            <div className='w-[240px] lg:w-[450px] relative'>
                <input type='text' className='px-5 lg:px-10 py-5 w-full rounded-full' placeholder='Search'/>
                <div className=' absolute top-[50%] translate-y-[-50%] right-[40px]'>
                    <Image src='/assets/images/header/search.svg' alt='search-bar' width={19} height={19} className='' />
                </div>
            </div>
        </div> */}
        <div className='col-span-12 md:col-span-12 flex justify-end pr-8'>
            <ProfilePicMenu />
        </div>
    </div>
  )
}

export default DashboardHeader