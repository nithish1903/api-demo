"use client"
import Image from 'next/image'
import React from 'react'
import InputText from '@/components/common/InputText'
import InputPassword from '@/components/common/InputPassword'
import Label from '@/components/common/Label'
import Button from '@/components/common/Button'
import Link from 'next/link'

const LoginFormComp = () => {

    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [keepLoged,setKeepLoged] = React.useState(false)
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
        if(password.toString().trim().length<8){
            formErr.password = "Password should be 8 charater"
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
                email,password,keepLoged
            }
            console.log(data)
            resolve()
        }
    }

    const resolve = ()=>{
        setEmail("")
        setPassword("")
        setKeepLoged(false)
        setFormError({})
        formErr = {}
    }

  return (
    <div className='w-[100%] sm:w-[568px] mx-auto rounded-[30px] bg-white drop-shadow-[0_0_19px_rgba(0,0,0,0.25)]'>
        <form onSubmit={handleFormSubmit} className='px-4 sm:px-8 py-10'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <h2 className='text-[40px] font-[500] text-[#334851] text-center'>Log In</h2>
                </div>
                <div className='col-span-12 mt-10'>
                    <button className='bg-[#0266E1] mx-auto rounded-[4px] pl-1 py-1 pr-2 flex items-center gap-2'>
                        <div className=' w-[36px] h-[36px] p-[6px] bg-[#FFFFFF] rounded-tl-[4px] rounded-bl-[4px] '>
                            <Image src={"/assets/images/login/google.svg"} alt='logo' width={27} height={27}/>
                        </div>
                        <span className='text-[20px] font-[500] text-[#fff]'>Sign In With Google</span>
                    </button>
                </div>
                <div className='col-span-12'>
                    <div className='flex items-center my-12'>
                        <div className='w-[230px] h-[2px] bg-[#334851]'></div>
                        <p className='my-0 mx-4 text-center'>or</p>
                        <div className='w-[230px]  h-[2px] bg-[#334851]'></div>
                    </div>
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
                    <InputPassword
                        type={"text"} 
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
                    <Button type="sumit"><span>Log In</span></Button>
                </div>
                <div className='col-span-12'>
                    <div className='bg-[#334851] h-[2px] w-[100%] mt-9'></div>
                </div>
                <div className='col-span-12 sm:mx-auto mt-5'>
                    <div className='grid grid-cols-12 gap-3 items-center'>
                        <div className='col-span-12 sm:col-span-4'>
                            <Link href={""}>I forgot my password</Link>
                        </div>
                        <div className='col-span-1 hidden sm:flex justify-center items-center'>
                            <div className='w-[10px] h-[10px] bg-[#0266E1] rounded-full '></div>
                        </div>
                        <div className='col-span-12 sm:col-span-6'>
                            <Link href={""}>Don’t have an account? Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginFormComp