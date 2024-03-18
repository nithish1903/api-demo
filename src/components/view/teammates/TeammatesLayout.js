"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import React, { useState } from 'react'
import AllTeammatesTable from './AllTeammatesTable'
import ContainerBox from '@/components/common/ContainerBox'
import AddTeammates from './AddTeammates'

const TeammatesLayout = () => {
    const [open,setOpen] = useState(false)

    const handleModal = ()=>setOpen(!open)
  return (
    <ContainerBox>
        <div>
            <h5>Teammates</h5>
        </div>
        <div className='border-2 border-[#CFD5E1] rounded-[6px] mt-7'>
            <div className='px-6 py-5 flex gap-4 flex-col md:flex-row md:justify-between'>
                <div className='flex items-center gap-4'>
                    <p className='font-[500]'>Users</p>
                    <p className='text-[#b0afaf] font-[500]'>1/1</p>
                </div>
                <div>
                    <SaveChangesES text={"Add Teammates"} onClick={handleModal}/>
                    <AddTeammates open={open} handleModal={handleModal} />
                </div>
            </div>
            <div className='border-t-2 border-[#CFD5E1]'>
                <AllTeammatesTable />
            </div>
        </div>
    </ContainerBox>
  )
}

export default TeammatesLayout