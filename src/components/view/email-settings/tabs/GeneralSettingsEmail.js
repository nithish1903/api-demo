"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import { ErrorPageHnadleBasic } from '@/components/common/ErrorHnadle'
import FormInputFiled from '@/components/common/FormInputFiled'
import { errorClearRedirct } from '@/lib/cookies/cookiesNext'
import { settingsActionGet, settingsActionPost } from '@/lib/redux/features/settings/settingsAction'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GeneralSettingsEmail = () => {
    const dispatch = useDispatch()
    const {settingsData,isError,errorMessage} = useSelector((state)=>{
        return state.settings
    })
    const is_email_notifications = settingsData && Object.keys(settingsData).length > 0 && settingsData.data && Object.keys(settingsData.data).length>0 && settingsData.data.email_notifications  

    const [from_name,setfrom_name] = useState(is_email_notifications&&is_email_notifications.from_name?is_email_notifications.from_name:"")
    const [from_email,setfrom_email] = useState(is_email_notifications&&is_email_notifications.from_email?is_email_notifications.from_email:"")
    const [reply_to,setreply_to] = useState(is_email_notifications&&is_email_notifications.reply_to?is_email_notifications.reply_to:"")
    const [formError,setFormError] = React.useState({})

    let formErr  = {}

    useEffect(()=>{
        if(is_email_notifications){
            setfrom_name(is_email_notifications.from_name?is_email_notifications.from_name:"")
            setfrom_email( is_email_notifications.from_email?is_email_notifications.from_email:"" )
            setreply_to(is_email_notifications.reply_to?is_email_notifications.reply_to:"" )
        }
    },[is_email_notifications])

    const validateEmail = (email) => {
        const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        return isValidEmail
    };

    const handleError = ()=>{
        if(!validateEmail(from_email)){
            formErr.from_email = "Email is invalidate"
        }
        if(from_name.toString().trim().length===0){
            formErr.from_name = "Name is invalidate"
        }
        if(!validateEmail(reply_to)){
            formErr.reply_to = "Reply to Email is invalidate"
        }
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
        }else{
            const data  = {
                "email_notifications":{
                    from_email,from_name,reply_to
                }
            }
            dispatch(settingsActionPost(data))
        }
    }

    if(isError){
        errorClearRedirct(errorMessage)
        if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
            return <ErrorPageHnadleBasic handleCallBack={()=>{ dispatch(settingsActionGet()) }} errorMessage={errorMessage}/>
        }
        //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
    }

  return (
    <>
        <div className='mb-7'>
            <h6 className='font-[700]'>Customize the general settings related to the emails sent by Kasplo to your customers.</h6>
        </div>
        <form onSubmit={handleFormSubmit}>
            {/* <div className='grid grid-cols-12 gap-2'>
                <div className='col-span-12'>
                    <h5 className='text-[22px] font-[600]'>Profile Picture</h5>
                </div>
                <div className='col-span-12 flex flex-col gap-4 items-center'>
                    <div className='w-[270px] md:w-[300px] h-[270px] md:h-[300px] border-[2px] border-[#CFD5E1] grid grid-cols-2 gap-0 content-between overflow-hidden rounded-full'>
                        <div className='col-span-2 flex justify-center items-center pt-10 pb-8'>
                            <Image src={"/assets/images/emailSetting/company-logo.svg"} alt='company-logo' width={0} height={0} className='w-[184px] h-auto' />
                        </div>
                        <div className='col-span-2 w-full '>
                            <button className='text-[24px] font-[700] text-[#fff] text-center bg-[#0266E1] w-full pt-6 pb-8'>Remove</button>
                        </div>
                    </div>
                    <div>
                        <Checkbox
                            id='titleCheck'
                            sx={{
                                color: "#0266E1",
                                '&.Mui-checked': {
                                color: "#0266E1",
                                },
                            }}
                        />
                        <label htmlFor='titleCheck' className='text-[16px] font-[700]'>Include title in form</label>
                    </div>
                </div>
            </div> */}
            <div className=' grid grid-cols-12 gap-5 pb-10 border-b-2 border-[#CFD5E1]'>
                <div className='col-span-12 lg:col-span-4'>
                    <FormInputFiled 
                        label={"From name:"} 
                        placeholder={"example"} 
                        value={from_name} 
                        onChange={(e)=>{
                            setfrom_name(e.target.value)
                            delete formError.from_name
                        }} 
                        error={(Object.keys(formError).length>0&&formError.from_name)?true:false}
                        errorMsg={Object.keys(formError).length>0&&formError.from_name}
                    />
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <FormInputFiled 
                        label={"From email:"} 
                        placeholder={"example@gmail.com"} 
                        value={from_email} 
                        onChange={(e)=>{
                            setfrom_email(e.target.value)
                            delete formError.from_email
                        }} 
                        error={(Object.keys(formError).length>0&&formError.from_email)?true:false}
                        errorMsg={Object.keys(formError).length>0&&formError.from_email}
                    />
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <FormInputFiled 
                        label={"Reply email:"} 
                        placeholder={"example@gmail.com"} 
                        value={reply_to} 
                        onChange={(e)=>{
                            setreply_to(e.target.value)
                            delete formError.reply_to
                        }} 
                        error={(Object.keys(formError).length>0&&formError.reply_to)?true:false}
                        errorMsg={Object.keys(formError).length>0&&formError.reply_to}
                    />
                </div>
            </div>
            {/* <div className='grid grid-col-12 gap-5 mt-5'>
                <div className='col-span-12'>
                    <h6 className='text-[700]'>Email Compatibility</h6>
                </div>
                <div className='col-span-12'>
                    <p className='text-[16px]'>
                    In case an email client has compatibility problems with review request email, review request contain a link to an external page where customers can respond.
                    </p>
                </div>
                <div className='col-span-12 grid grid-cols-12 gap-5 items-center pb-10 border-b-2 border-[#CFD5E1]'>
                    <div className='col-span-12 lg:col-span-9'>
                        <FormInputFiled label={"Link body:"} placeholder={"Fashion Studio"}/>
                    </div>
                    <div className='max-w-[250px] col-span-12 lg:col-span-3'>
                        <div>
                            <p>Font Size</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-[22px] font-[700] py-2 cursor-pointer ' 
                                onClick={handleFontSizeDec}>-</p>
                            <input 
                                className={`py-1 px-5 text-center rounded-[4px] w-[100%] mt-1 text-[20px] font-[600] border-[2px] border-[#334851] text-[#334851]`}
                                value={fontSize} 
                                type={"number"}
                                onChange={(e)=>{(setFontSize(Number(e.target.value)))}}
                            />
                            <p className='text-[22px] font-[700] py-2 cursor-pointer'
                            onClick={handleFontSizeInc}>+</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='col-span-12 pt-8'>
                <SaveChangesES text={"Save Changes"} type={"submit"} />
            </div>
        </form>
    </>
  )
}

export default GeneralSettingsEmail