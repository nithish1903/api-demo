"use client"

import React from 'react'
import InputText from '@/components/common/InputText'
import InputPassword from '@/components/common/InputPassword'
import Label from '@/components/common/Label'
import ButtonPrim from '@/components/common/ButtonPrim'
import Link from 'next/link'
import {useRouter} from "next/navigation";
import { userLogin } from '@/lib/redux/features/userAuth/userAction'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const LoginFormComp = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [keepLoged,setKeepLoged] = React.useState(false)
    const [formError,setFormError] = React.useState({})
    const [loading, setLoading] = React.useState(false);

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
        if(password.toString().trim().length<6){
            formErr.password = "Password should be 6 charater"
        }
    }

    const resolve = ()=>{
        setEmail("")
        setPassword("")
        setKeepLoged(false)
        setFormError({})
        formErr = {}
        router.push("/app/dashboard");
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
            formErr = {}
        }else{
            const formData = {
                email,password
            }
            const req = {formData,resolve}
            dispatch(userLogin(req))
        }
    }



  return (
    <div className='w-[100%] sm:w-[568px] mx-auto rounded-[30px] bg-white drop-shadow-[0_0_19px_rgba(0,0,0,0.25)]'>
        <form onSubmit={handleFormSubmit} className='px-4 sm:px-8 py-10'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <h2 className='text-[26px] md:text-[40px] font-[500] text-[#334851] text-center'>Log In</h2>
                </div>
                <div className='col-span-12 mt-7'>
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
                    <InputPassword
                        htmlFor={"password"}
                        id={"password"}
                        value={password} 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                            delete formError.password
                        }} 
                        error={(Object.keys(formError).length>0&&formError.password)?true:false}
                        errorMsg={Object.keys(formError).length>0&&formError.password}
                    />
                </div>
                <div className='col-span-12'>
                    <div className='flex items-center'>
                        <input id='keepLoged' className='mr-2 rounded' type='checkbox' checked={keepLoged} onChange={()=>{setKeepLoged(!keepLoged)}} />
                        <Label htmlFor={"keepLoged"} label={"Keep me logged in"} />
                    </div>
                </div>
                <div className='col-span-12 mt-10'>
                    <ButtonPrim type="sumit"><span>Log In</span></ButtonPrim>
                </div>
                <div className='col-span-12'>
                    <div className='bg-[#334851] h-[2px] w-[100%] mt-9'></div>
                </div>
                <div className='col-span-12 sm:mx-auto mt-8'>
                    <div className='text-center'>
                        <Link href={"/auth/forgot-password"}>I forgot my password</Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginFormComp