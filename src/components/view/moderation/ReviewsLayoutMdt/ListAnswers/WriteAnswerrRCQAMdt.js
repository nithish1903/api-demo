import React, { useState } from 'react'
import { useReviewsFilter } from "@/context/ReviewsFilterContext"
import { useDispatch } from "react-redux"
import useAPi from '@/hooks/useApi'
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import { ModalCustomBox } from '@/components/common/ModalBox'
import SwitchGreen from '@/components/common/SwitchGreen'
import axios from 'axios'
import Label from '@/components/common/Label'
import { Button } from '@mui/material'


const WriteAnswerrRCQAMdt = ({_id,showWirteAns,handleShowWriteAns}) => {

    const dipatch = useDispatch()
    const {reviewFilter} = useReviewsFilter()
    const [write_ans,setWrite_ans] = useState("")
    const [private_ans,setPrivate_ans] = useState(false)

    const handleReset = ()=>{
        setWrite_ans("")
        setPrivate_ans(false)
        handleShowWriteAns()
    }

    const { 
        isLoading,
        setLoadingFalse,
        setLoadingTrue ,

        isError,
        setIsErrorTrue , 
        setIsErrorFalse,

        errorMessage,
        setErrorMessage ,

        isSuccess,
        setIsSuccessTrue,
        setIsSuccessFalse,

        successMessage,
        setSuccessMessage,
    } = useAPi()

 

    const handleAnswer = async ()=>{
        const data = {
            "id": _id,
            "answer": write_ans, 
            "status": private_ans?0:1 , // 1 or 0 (send answer as private)
            // "answer_id": "1710413875", // only if your updating or deleting the answer
            "type": "add_new_answer" // add_new_answer, delete_answer, update_answer
        }
        try {
            setLoadingTrue()
            const response  = await axios.post("http://localhost:9024/v1/shopify/manage-answer",data ,{withCredentials: true} )
            const resData = response.data
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
                dipatch(moderationActionPost(reviewFilter))
                handleReset()
            }
            setLoadingFalse()
        } catch (error) {
            setErrorMessage(error && error.response && error.response.data && error.response.data.message)
            setIsErrorTrue()
            setLoadingFalse()
        }
    }

  return (
    <>
        <ErrorSnackbar open={isError} handleCloseSnack={setIsErrorFalse} message={errorMessage}/>
        <SuccessSnackbars open={isSuccess} handleCloseSnack={setIsSuccessFalse} message={successMessage} />
        <ModalCustomBox open={showWirteAns} handleModal={handleReset}>
            <div>
                <div>
                    <textarea value={write_ans} onChange={(e)=>{setWrite_ans(e.target.value)}} className='border-2 border-[#334851] w-full px-2 py-2' rows={8}></textarea>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='col-span-2 lg:col-span-1 flex items-center gap-3'>
                        <SwitchGreen id="privatemsg" value={private_ans} onChange={()=>{setPrivate_ans(!private_ans)}}/>
                        <Label htmlFor="privatemsg" label={"Send as private message"}/>
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex items-center lg:justify-end gap-3'>
                        <Button variant="text" onClick={handleReset}>Cancel</Button>
                        <Button variant="contained" onClick={handleAnswer}>Publish</Button>
                    </div>
                </div>
            </div>
        </ModalCustomBox>
    </>
  )
}

export default WriteAnswerrRCQAMdt