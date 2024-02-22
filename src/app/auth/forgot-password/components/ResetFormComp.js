"use client"
import React from 'react'
import InputText from '@/components/common/InputText'
import Button from '@/components/common/Button'
import Link from 'next/link'

const ResetFormComp = () => {

    const [email,setEmail] = React.useState("")
    const [formError,setFormError] = React.useState({})

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
            console.log(data)
            resolve()
        }
    }

    const resolve = ()=>{
        setEmail("")
        setFormError({})
        formErr = {}
    }

  return (
    <div className='w-[100%] sm:w-[568px] mx-auto rounded-[30px] bg-white drop-shadow-[0_0_19px_rgba(0,0,0,0.25)]'>
        <form onSubmit={handleFormSubmit} className='px-4 sm:px-8 py-10'>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-12'>
                    <h2 className='text-[40px] font-[500] text-center'>Reset Your Password</h2>
                </div>
                <div className='col-span-12'>
                    <p className='w-[100%] sm:w-[370px] mx-auto text-[14px] font-[400] text-center'>
                        Enter your email address below and we’ll send you a link to reset your password.
                    </p>
                </div>
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
                    <Button type="sumit"><span>Log In</span></Button>
                </div>
                <div className='col-span-12'>
                    <div className='text-center'>
                        <Link href={"/auth/login"}>Back</Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ResetFormComp