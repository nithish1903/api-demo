"use client"
import React from 'react'
import InputText from '@/components/common/InputText'
import ButtonPrim from '@/components/common/ButtonPrim'
import Link from 'next/link'
import axios from 'axios'
import useAPi from '@/hooks/useApi'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import { LoadingSkeletonBasic } from '@/components/common/LoadingSkeleton'


const ForgotPasswordForm = () => {

    const [email,setEmail] = React.useState("")
    const [formError,setFormError] = React.useState({})

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

    let formErr  = {}

    

    const validateEmail = (email) => {
        const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        return isValidEmail
    };

    const handleError = ()=>{
        if(!validateEmail(email)){
            formErr.email = "Email is incorrect"
        }
    }

    const resolve = ()=>{
        setEmail("")
        setFormError({})
        formErr = {}
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
            formErr = {}
        }else{
            const data = {
                email
            }
            handleForgotPswRequest(data)
        }
    }

    const handleForgotPswRequest = async (data)=>{
        try {
            setLoadingTrue()
            const response  = await axios.post("http://localhost:9024/v1/user/request-password-reset",data ,{withCredentials: true} )
            const resData = response.data
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
            }
            resolve()
            setLoadingFalse()
        } catch (error) {
            setErrorMessage(error.response.data.message)
            setIsErrorTrue()
            setLoadingFalse()
        }
    }

    

  return (
    <>
        <ErrorSnackbar open={isError} handleCloseSnack={setIsErrorFalse} message={errorMessage}/>
        <SuccessSnackbars open={isSuccess} handleCloseSnack={setIsSuccessFalse} message={successMessage} />
        <div className='w-[100%] sm:w-[568px] mx-auto rounded-[30px] bg-white drop-shadow-[0_0_19px_rgba(0,0,0,0.25)] px-4 sm:px-8 py-10'>
            <div className='grid grid-cols-12 gap-6 mb-6'>
                <div className='col-span-12'>
                    <h2 className='text-[26px] md:text-[40px] font-[500] text-center'>Reset Your Password</h2>
                </div>
                <div className='col-span-12'>
                    <p className='w-[100%] sm:w-[370px] mx-auto text-[14px] font-[400] text-center'>
                        Enter your email address below and we’ll send you a link to reset your password.
                    </p>
                </div>
            </div>
            {
                isLoading ? (
                    <div>
                        <LoadingSkeletonBasic />
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <div className='grid grid-cols-12 gap-10'>
                            <div className='col-span-12'>
                                <InputText 
                                    type={"text"} 
                                    label={"Email"} 
                                    value={email} 
                                    htmlFor={"email"}
                                    id={"email"}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                        delete formError.email
                                    }} 
                                    placeholder={"Enter Email Address"}
                                    error={(Object.keys(formError).length>0&&formError.email)?true:false}
                                    errorMsg={Object.keys(formError).length>0&&formError.email}
                                />
                            </div>
                            <div className='col-span-12'>
                                <ButtonPrim type="sumit"><span>Send A Mail</span></ButtonPrim>
                            </div>
                            <div className='col-span-12'>
                                <div className='text-center'>
                                    <Link href={"/auth/login"}>Back to login</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            }
        </div>
        
    </>
  )
}

export default ForgotPasswordForm