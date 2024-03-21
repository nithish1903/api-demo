
import React from 'react'
import ProfilePreferences from './ProfileEmailPreferences/ProfilePreferences'
// import EmailPreferences from './ProfileEmailPreferences/EmailPreferences'

const ProfileEmailPreferences = () => {
  return (
    <div className='grid grid-cols-1 gap-5'>
        <div className='col-span-1'>
            <ProfilePreferences />
        </div>
        {/* <div className='col-span-1'>
            <EmailPreferences />
        </div> */}
    </div>
  )
}

export default ProfileEmailPreferences