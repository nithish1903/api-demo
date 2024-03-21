"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import InputPassword from '@/components/common/InputPassword'
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars'
import useAPi from '@/hooks/useApi'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const ProfilePreferences = () => {
    const { 
        userData , 
        isLoading:user_isLoading,
        errorMessage:user_errorMessage,
        isError:user_isError,
        isSuccess:user_isSuccess,
    } = useSelector((state)=>{
        return state.user
    })

    const account_id = userData && userData.account_id
    const is_user = userData && Object.keys(userData) && userData



    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [currentPassword,setCurrentPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [profilePic, setProfilePic] = useState(null);
    const [formError,setFormError] = useState({})
    const fileInputRef = useRef(null);

    let formErr = {}

    useEffect(()=>{
        if(is_user){
            setName(is_user&&is_user.name?is_user.name:"")
            setEmail(is_user&&is_user.email?is_user.email:"")
        }
    },[is_user])

   

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
        if(name.toString().trim().length<3){
            formErr.name = "Name should be more then or equal to 3 charater"
        }
        if(currentPassword.toString().trim().length<6){
            formErr.currentPassword = "Current Password should be more then or equal to  6 charater"
        }
        if(newPassword.toString().trim().length<6){
            formErr.newPassword = "New Password should be more then or equal to  6 charater"
        }
    }

    const resolve = ()=>{
        setCurrentPassword("")
        setNewPassword("")
        setProfilePic(null); 
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
                name,
                "current_password":currentPassword,
                "new_password":newPassword,
                "id": account_id,
                profilePic
            }
            console.log(data)
            // handleForgotPswRequest(data)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setProfilePic(file); // Set the selected file to state
      };

    const handleForgotPswRequest = async (data)=>{
        try {
            setLoadingTrue()
            const response  = await axios.post("http://localhost:9024/v1/user/get-user-details",data ,{withCredentials: true} )
            const resData = response.data
            console.log(response)
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
            }
            resolve()
            setLoadingFalse()
        } catch (error) {
            setErrorMessage(error.data.data)
            setIsErrorTrue()
            setLoadingFalse()
        }
    }

  return (
    <div>
        <ErrorSnackbar open={isError} handleCloseSnack={setIsErrorFalse} message={errorMessage}/>
        <SuccessSnackbars open={isSuccess} handleCloseSnack={setIsSuccessFalse} message={successMessage} />
        <form onSubmit={handleFormSubmit} className='grid grid-cols-12 gap-5 px-5 py-5 bg-[#fff] border-[1px] border-[#CFD5E1] rounded-[10px] '>
            <div className='col-span-12'>
                <h5>Change Porfile</h5>
            </div>
            <div className='col-span-12'>
                <div className='flex flex-col gap-4 items-center cursor-pointer' onClick={()=>{ fileInputRef.current.click();}}>
                    <div className='w-[170px] md:w-[200px] h-[170px] md:h-[200px] border-[2px] border-[#CFD5E1] grid grid-cols-2 gap-0 content-between overflow-hidden rounded-full'>
                        <div className='col-span-2 flex justify-center items-center pt-4 pb-3 lg:pt-10 lg:pb-8'>
                            {/* Display the selected profile picture if available */}
                            {profilePic ? (
                            <Image src={URL.createObjectURL(profilePic)} alt='Selected Profile Pic' width={0} height={0} className='w-[100px] h-auto' />
                            ) : (
                            <Image src={"/assets/images/emailSetting/company-logo.svg"} alt='company-logo'  width={0} height={0} className='w-[100px] h-auto' />
                            )}
                            {/* File input for selecting profile picture */}
                            <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange}style={{ display: 'none' }} />
                        </div>
                        <div className='col-span-2 bg-[#0266E1] w-full pt-4 lg:pt-3 pb-4 lg:pb-8 flex justify-center items-center'>
                            <button type="submit" className='text-[16px] font-[700] text-[#fff] text-center bg-[#0266E1] '>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12'>
                <FormInputFiled 
                    inuputProps={{ readOnly: true }} 
                    value={name} 
                    placeholder={"Name"}
                />
            </div>
            <div className='col-span-12'>
                <FormInputFiled 
                    inuputProps={{ readOnly: true }} 
                    value={email} 
                    placeholder={"Email"}
                />
            </div>
            <div className='col-span-12'>
                <InputPassword
                    htmlFor={"currentPassword"}
                    id={"currentPassword"}
                    placeholder={"Current Password"}
                    classNameInput={"border-[#CFD5E1]"}
                    onCopy={(e)=>{e.preventDefault()}}
                    onPaste={(e)=>{e.preventDefault()}}
                    value={currentPassword} 
                    onChange={(e)=>{
                        setCurrentPassword(e.target.value)
                    }} 
                    // error={(Object.keys(formError).length>0&&formError.password2)?true:false}
                    // errorMsg={Object.keys(formError).length>0&&formError.password2}
                />
            </div>
            <div className='col-span-12'>
                <InputPassword
                    htmlFor={"NewPassword"}
                    id={"NewPassword"}
                    placeholder={"New Password"}
                    classNameInput={"border-[#CFD5E1]"}
                    onCopy={(e)=>{e.preventDefault()}}
                    onPaste={(e)=>{e.preventDefault()}}
                    value={newPassword} 
                    onChange={(e)=>{
                        setNewPassword(e.target.value)
                    }} 
                    // error={(Object.keys(formError).length>0&&formError.password2)?true:false}
                    // errorMsg={Object.keys(formError).length>0&&formError.password2}
                />
            </div>
            <div className='col-span-12'>
                <SaveChangesES type={"submit"} text={"Save Changes"}/>
            </div>
            {/* <div className='col-span-12'>
                <button className='text-[20px] font-[700] text-[#0266E1] bg-none p-0 m-0 border-0 outline-0'>Change Password</button>
            </div> */}
        </form>
    </div>
  )
}

export default ProfilePreferences