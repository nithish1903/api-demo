"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import { ErrorPageHnadleBasic } from '@/components/common/ErrorHnadle'
import FormInputFiled from '@/components/common/FormInputFiled'
import Label from '@/components/common/Label'
import { errorClearRedirct } from '@/lib/cookies/cookiesNext'
import { generalSettingsGet, publicKey_update } from '@/lib/redux/features/generalSettings/generalSettingsAction'
// import { SelectOptions } from '@/components/common/SelectOptions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GeneralSettingsLayout = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(generalSettingsGet())
    },[dispatch])

    const generateToken = () => {
        let generatedToken = '';
        const characters = 'a0b1c2d3e4f5g6h7i8j9k0l1mN2O3P4Q5R6S7T8U9V0W1X2Y3ZnAoBpCqDrEsFtGuHvIwJxKyLzM';
        for (let i = 0; i < 9; i++) {
            generatedToken += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const formData = {
            "public_key":generatedToken
        }
        dispatch(publicKey_update(formData))
    };

    const {settings , isLoading , isSuccess , isError , errorMessage} = useSelector((state)=>{
        return state.generalSettings
    })

    const is_settings  = isSuccess && settings && Object.keys(settings).length>0 && settings

    if(isError){
        errorClearRedirct(errorMessage)
        if( errorMessage && errorMessage.response && errorMessage.response.status && errorMessage.response.status!==401){
            return <ErrorPageHnadleBasic handleCallBack={()=>{dispatch(generalSettingsGet({}))}} errorMessage={errorMessage}/>
        }
        //  <ErrorBasicSnackbar isError={isError} errorMessage={errorMessage} handleCallBack={()=>{dispatch(dashboardActionPost({}))}}  />
    }

  return (
    <div>
        <div className='mb-10'>
            <h5 className='font-[700]'>General Settings</h5>
        </div>
        <div className='grid grid-cols-12 gap-5 border-b-2 border-[#CFD5E1] pb-14'>
            <div className='col-span-12 grid grid-cols-12 gap-0 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Company Name:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled 
                        placplaceholder={"Company Name"} 
                        value={is_settings&&is_settings.name?is_settings.name:""} 
                        classInput={"w-full"} 
                        inuputProps={{readOnly:true}}
                    />
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Account ID:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled 
                        placplaceholder={"Account ID"} 
                        value={is_settings&&is_settings.id?is_settings.id:""} 
                        classInput={"w-full"} 
                        inuputProps={{readOnly:true}}
                    />
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Store Name:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled 
                        placplaceholder={"Store Name"} 
                        value={is_settings&&is_settings.display_name?is_settings.display_name:""} 
                        classInput={"w-full"} 
                        inuputProps={{readOnly:true}}
                    />
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Your Website:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled 
                        placplaceholder={"Website Url"} 
                        value={is_settings&&is_settings.frontend_url?is_settings.frontend_url:""} 
                        classInput={"w-full"} 
                        inuputProps={{readOnly:true}}
                    />
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <h5 className='font-[700]'>API Credentials</h5>
        </div>
        <div className='grid grid-cols-12 gap-5 pb-14 border-b-2 border-[#CFD5E1]'>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                    <Label htmlFor={""} label={"Public key:"} className={"text-[16px]"} />
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <FormInputFiled placeholder={"Key"} value={is_settings&&is_settings.public_key?is_settings.public_key:""} classInput={"w-full"} inuputProps={{readOnly:true}}/>
                </div>
            </div>
            <div className='col-span-12 grid grid-cols-12 md:gap-6 items-center'>
                <div className='col-span-12 md:col-span-3'>
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <SaveChangesES className={"w-full"} onClick={generateToken} text={"Generate New Public key"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralSettingsLayout