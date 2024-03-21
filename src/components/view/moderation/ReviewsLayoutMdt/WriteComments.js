import Label from '@/components/common/Label'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import SwitchGreen from '@/components/common/SwitchGreen'
import { useReviewsFilter } from '@/context/ReviewsFilterContext'
import useAPi from '@/hooks/useApi'
import baseURL from '@/lib/others/baseURL'
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction'
import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

const WriteComments = ( {  
        _id,
        handleShowWriteComment,
        showWriteComment, 
        setShowWriteComment , 
        writeComment , 
        setWriteComment , 
        privateComment ,
        setPrivateComment
    }) => {

    const dipatch = useDispatch()

    const {reviewFilter} = useReviewsFilter()

    const refOne = useRef(null)

    const handleHide = (e)=>{
        if(e.key == "Escape"){
            setWriteComment("")
            setShowWriteComment(false)
            setPrivateComment(false)
        }
      }
    
      const handleOnClickOutside = (e)=>{
        if(refOne.current && !refOne.current.contains(e.target)){
            setWriteComment("")
            setShowWriteComment(false)
            setPrivateComment(false)
        }
      }
      

    useEffect(()=>{
        document.addEventListener("keydown",handleHide,true)
        document.addEventListener("click",handleOnClickOutside,true)
    },[handleHide,handleOnClickOutside])


  

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


    const handlePublishedReview = async ()=>{
        const data = {
            "id": _id,
            "comment": writeComment,
            "status": privateComment?0:1 , // 1 or 0 (send comment as private)
            "type": "add_new_comment", // add_new_comment, delete_comment, update_comment
            // "comment_id": "1710413533", // only if your updating or deleting the comment
            "content_type": reviewFilter.content_type // product_reviews, site_reviews, product_question_answers
        }
        try {
            setLoadingTrue()
            const response  = await axios.post(`${baseURL}/v1/shopify/manage-comment`,data ,{withCredentials: true} )
            const resData = response.data
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
                dipatch(moderationActionPost(reviewFilter))
                handleShowWriteComment()
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
        {
            (
                <div ref={refOne} className={`${showWriteComment?"block":"hidden"} absolute -top-5 -right-4  sm:right-0 z-[200] bg-[#fff] shadow-lg w-[280px] md:w-[400px] lg:w-[500px]`}>
                    <div className='px-4 py-4'>
                        <div>
                            <textarea value={writeComment} onChange={(e)=>{setWriteComment(e.target.value)}} className='border-2 border-[#334851] w-full px-2 py-2' rows={8}></textarea>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div className='col-span-2 lg:col-span-1 flex items-center gap-3'>
                                <SwitchGreen id="privatemsg" value={privateComment} onChange={()=>{setPrivateComment(!privateComment)}}/>
                                <Label htmlFor="privatemsg" label={"Send as private message"}/>
                            </div>
                            <div className='col-span-2 lg:col-span-1 flex items-center lg:justify-end gap-3'>
                                <Button variant="text" onClick={handleShowWriteComment}>Cancel</Button>
                                <Button variant="contained" onClick={handlePublishedReview}>Publish</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default WriteComments