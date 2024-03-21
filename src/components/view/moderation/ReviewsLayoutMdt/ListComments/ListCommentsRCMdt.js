import Label from '@/components/common/Label'
import { ModalCustomBox } from '@/components/common/ModalBox'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import SwitchGreen from '@/components/common/SwitchGreen'
import { useReviewsFilter } from '@/context/ReviewsFilterContext'
import useAPi from '@/hooks/useApi'
import useToggle from '@/hooks/useToggle'
import baseURL from '@/lib/others/baseURL'
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction'
import { Box, Button, Modal } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'



  
const ListCommentsRCMdt = ({comment,_id}) => {
    const dipatch = useDispatch()
    const {reviewFilter} = useReviewsFilter()
    const { toggle,handleToggle,setFalse} = useToggle(false)
    const [writeComment,setWriteComment] = useState(comment?comment.comment:"")
    const [privateComment,setPrivateComment] = useState(false)

    const handleReset = ()=>{
        setWriteComment(comment?comment.comment:"")
        setPrivateComment(false)
        setFalse()
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

    const handleApiCall = (type)=>{
        const data = {
            "id": _id,
            "comment": writeComment,
            "status": privateComment?0:1 , // 1 or 0 (send comment as private)
            "type": type, // add_new_comment, delete_comment, update_comment
            "comment_id": comment&&comment.comment_id, // only if your updating or deleting the comment
            "content_type": reviewFilter.content_type // product_reviews, site_reviews, product_question_answers
        }
        
        handlePublishedReview(data)
    }

    const handlePublishedReview = async (data)=>{
        try {
            setLoadingTrue()
            const response  = await axios.post(`${baseURL}/v1/shopify/manage-comment`,data ,{withCredentials: true} )
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
                <p className='text-[#334851] text-[13px]'>{comment.comment}</p>
            </div>
            <div className='col-span-12 lg:col-span-4 flex items-center lg:justify-end gap-6 md:gap-4'>
                <div className=' px-2 py-2 bg-[#0266E1] rounded-[6px]'>
                    <BiSolidEdit className='w-[16px] h-[16px] cursor-pointer text-[#fbfcfd]' onClick={handleToggle}/>
                </div>
                <div className=' px-2 py-2 bg-[#d35044] rounded-[6px]'>
                    <MdDelete className='w-[16px] h-[16px] cursor-pointer text-[#FFF]' onClick={()=>{handleApiCall("delete_comment")}}/>
                </div>
            </div>
        </div>
        <ModalCustomBox open={toggle} handleModal={handleToggle}>
            <div>
                <div>
                    <textarea value={writeComment} onChange={(e)=>{setWriteComment(e.target.value)}} className='border-2 border-[#334851] w-full px-2 py-2' rows={8}></textarea>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='col-span-2 lg:col-span-1 flex items-center gap-3'>
                        <SwitchGreen id="privatemsg" value={privateComment} onChange={()=>{setPrivateComment(!privateComment)}}/>
                        <Label htmlFor="privatemsg" label={"Send as private message"}/>
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex items-center lg:justify-end gap-3'>
                        <Button variant="text" onClick={handleReset}>Cancel</Button>
                        <Button variant="contained" onClick={()=>{handleApiCall("update_comment")}}>Publish</Button>
                    </div>
                </div>
            </div>
        </ModalCustomBox>
    </>
  )
}

export default ListCommentsRCMdt