"use client"

import React from 'react'
import ButtonPrim from '@/components/common/ButtonPrim'
import Link from 'next/link'
import InputPassword from '@/components/common/InputPassword'
import useAPi from '@/hooks/useApi'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { LoadingSkeletonBasic } from '@/components/common/LoadingSkeleton'
import axios from 'axios'
import baseURL from '@/lib/others/baseURL'
const ResetPasswordForm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const paramEmail = searchParams.get("email")

    const [email,setEmail] = React.useState(paramEmail?paramEmail:"")
    const [password,setPassword] = React.useState("")
    const [password2,setPassword2] = React.useState("")

    const [formError,setFormError] = React.useState({})
    let formErr  = {}

    React.useEffect(()=>{
        if(searchParams.get("email")){
            setEmail(searchParams.get("email"))
        }
    },[searchParams])

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

    const handleError = ()=>{

        if(password.toString().trim().length<6){
            formErr.password = "Password should be 6 charater"
        }

        if(password2.toString().length<6){
            formErr.password2 = "Password should be 6 charater"
        }else if((password2.toString().trim() !== password.toString().trim())){
            formErr.password2 = "Password is not matching"
        }

    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
            formErr = {}
        }else{
            const resetData = {
                "new_password":password,
                email
            }
            handleResetPswRequest(resetData)
        }
    }

    const resolve = ()=>{
        setPassword("")
        setPassword2("")
        setFormError({})
        setEmail(paramEmail?paramEmail:"")
        formErr = {}
        router.push('/auth/login')
    }

    const handleResetPswRequest = async (data)=>{
        try{
            setLoadingTrue()
            const response  = await axios.post(`${baseURL}/v1/user/reset-password`,data,{withCredentials: true})
            const resData = response.data
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
            }
            resolve()
            setLoadingFalse()
        }catch(error){
            if(error.response && error.response.data ){
                const data = error.response.data
                if(Object.keys(data).length>0&&data.data){
                    setIsErrorTrue()
                    setErrorMessage(data.data)
                }
            }
            setLoadingFalse()
        }
    }

  return (
    <>
        <ErrorSnackbar open={isError} handleCloseSnack={setIsErrorFalse} message={errorMessage}/>
        <SuccessSnackbars open={isSuccess} handleCloseSnack={setIsSuccessFalse} message={successMessage} />
        <div className='w-[100%] sm:w-[568px] mx-auto rounded-[30px] bg-white drop-shadow-[0_0_19px_rgba(0,0,0,0.25)]'>
            <form onSubmit={handleFormSubmit} className='px-4 sm:px-8 py-10'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-12'>
                        <h2 className='text-[26px] md:text-[40px] font-[500] text-center'>Reset Your Password</h2>
                    </div>
                    {
                        isLoading ? (
                            <div className='col-span-12'>
                                <LoadingSkeletonBasic />
                            </div>
                        ) : (
                            <>
                                <div className='col-span-12'>
                                    <InputPassword
                                        type={"text"} 
                                        label={"Enter New Password"}
                                        htmlFor={"password"}
                                        id={"password"}
                                        value={password} 
                                        onCopy={(e)=>{e.preventDefault()}}
                                        onPaste={(e)=>{e.preventDefault()}}
                                        onChange={(e)=>{
                                            setPassword(e.target.value)
                                            if(e.target.value.toString().trim().length<6){
                                                formError.password = "Password should be 6 charater"
                                            }else{
                                                delete formError.password
                                            }
                                        }} 
                                        error={(Object.keys(formError).length>0&&formError.password)?true:false}
                                        errorMsg={Object.keys(formError).length>0&&formError.password}
                                    />
                                </div>
                                <div className='col-span-12'>
                                    <InputPassword
                                        type={"text"} 
                                        label={"Re-Enter New Password"}
                                        htmlFor={"password2"}
                                        id={"password2"}
                                        onCopy={(e)=>{e.preventDefault()}}
                                        onPaste={(e)=>{e.preventDefault()}}
                                        value={password2} 
                                        onChange={(e)=>{
                                            setPassword2(e.target.value)
                                            if(e.target.value.toString().trim() !== password.toString().trim()){
                                                formError.password2 = "Password is Not Matching"
                                            }else{
                                                delete formError.password2
                                            }
                                        }} 
                                        error={(Object.keys(formError).length>0&&formError.password2)?true:false}
                                        errorMsg={Object.keys(formError).length>0&&formError.password2}
                                    />
                                </div>
                                <div className='col-span-12'>
                                    <ButtonPrim type="sumit"><span>Reset Password</span></ButtonPrim>
                                </div>
                                <div className='col-span-12'>
                                    <div className='text-center'>
                                        <Link href={"/auth/login"}>Back</Link>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    </>
  )
}

export default ResetPasswordForm