"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import React, { useEffect, useState } from 'react'
import AllTeammatesTable from './AllTeammatesTable'
import ContainerBox from '@/components/common/ContainerBox'
import AddTeammates from './AddTeammates'
import { useDispatch, useSelector } from 'react-redux'
import { teammatesActionGet } from '@/lib/redux/features/teammates/teammatesAction'
import { ErrorPageHnadleBasic } from '@/components/common/ErrorHnadle'
import { errorClearRedirct } from '@/lib/cookies/cookiesNext'

const TeammatesLayout = () => {
    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)

    const handleModal = ()=>setOpen(!open)

    useEffect(()=>{
        const formData = {}
        dispatch(teammatesActionGet(formData))
    },[dispatch])

    const { teammatesData, isLoading, errorMessage, isError, isSuccess } = useSelector((state) => {
        return state.teammates;
      });
    
      // Extracting data and pagination details
      const is_teammates = isSuccess && teammatesData && Object.keys(teammatesData).length > 0 && teammatesData.data;
      const is_pagination = isSuccess && teammatesData && Object.keys(teammatesData).length > 0 && teammatesData.pagination;

    if(isError){
        errorClearRedirct(errorMessage)
        if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
            const formData1 = {}
            return <ErrorPageHnadleBasic handleCallBack={()=>{ dispatch(teammatesActionGet(formData1)) }} errorMessage={errorMessage}/>
        }
        //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
    }
   
  return (
    <ContainerBox>
        <div>
            <h5>Teammates</h5>
        </div>
        <div className='border-2 border-[#CFD5E1] rounded-[6px] mt-7'>
            <div className='px-6 py-5 flex gap-4 flex-col md:flex-row md:justify-between'>
                <div className='flex items-center gap-4'>
                    <p className='font-[500]'>Users:</p>
                    <p className='text-[#b0afaf] font-[500]'>{is_pagination?is_pagination.total:0}</p>
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