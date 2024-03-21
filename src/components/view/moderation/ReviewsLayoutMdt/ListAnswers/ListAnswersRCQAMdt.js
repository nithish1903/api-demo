
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
import { BiSolidEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'



const ListAnswersRCQAMdt = ({answer,_id}) => {

    const dipatch = useDispatch()
    const {reviewFilter} = useReviewsFilter()
    const [write_ans,setWrite_ans] = useState(answer&&answer.answer?answer.answer:"")
    const [private_ans,setPrivate_ans] = useState(false)
    const [showWirteAns,setshowWirteAns] = useState(false)

    const handleShowWriteAns=()=>{setshowWirteAns(!showWirteAns)}

    const handleReset = ()=>{
        setWrite_ans(answer&&answer.answer?answer.answer:"")
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

 

    const handleAnswer = async (value)=>{
        const data = {
            "id": _id,
            "answer": write_ans, 
            "status": private_ans?0:1 , // 1 or 0 (send answer as private)
            "answer_id": answer&&answer.ans_id, // only if your updating or deleting the answer
            "type": value // add_new_answer, delete_answer, update_answer
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
        <div className='grid grid-cols-12 lg:items-center gap-2 py-2 px-2 my-3 border-[1px] border-[#CFD5E1] rounded-[5px] bg-[#eeeeef]'>
            <div className='col-span-12 lg:col-span-8'>
                <p className='text-[#334851] text-[13px]'>{answer&&answer.answer?answer.answer:""}</p>
            </div>
            <div className='col-span-12 lg:col-span-4 flex items-center lg:justify-end gap-6 md:gap-4'>
                <div className=' px-2 py-2 bg-[#0266E1] rounded-[6px]'>
                    <BiSolidEdit className='w-[16px] h-[16px] cursor-pointer text-[#fbfcfd]' onClick={handleShowWriteAns}/>
                </div>
                <div className=' px-2 py-2 bg-[#d35044] rounded-[6px]'>
                    <MdDelete className='w-[16px] h-[16px] cursor-pointer text-[#FFF]' onClick={()=>{handleAnswer("delete_answer")}}/>
                </div>
            </div>
        </div>
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
                        <Button variant="contained" onClick={()=>{handleAnswer("update_answer")}}>Publish</Button>
                    </div>
                </div>
            </div>
        </ModalCustomBox>
    </>
  )
}

export default ListAnswersRCQAMdt