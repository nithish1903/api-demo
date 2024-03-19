import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import InputPassword from '@/components/common/InputPassword';
import { SmallModalBox } from '@/components/common/ModalBox';
import { teammatesActionGet, teammatesAddPost } from '@/lib/redux/features/teammates/teammatesAction';
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const AddTeammates = ({open,handleModal}) => {

    const dispatch = useDispatch()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [formError,setFormError] = useState({})
    let formErr = {}

    const {userData} = useSelector((state)=>{
        return state.user
    })

    const account_id = userData && userData.account_id

    const validateEmail = (email) => {
        const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        return isValidEmail
    };

    const handleFormError = ()=>{
        if(name.toString().trim().length<3){
            formErr.name = "Name should be more then or equal to 3 charater"
        }
        if(!validateEmail(email)){
            formErr.email = "Email is incorrect"
        }
        if(password.toString().trim().length<6){
            formErr.password = "Password should be more then or equal to  6 charater"
        }
    }

    const resetAllValues  = ()=>{
        setName("")
        setEmail("")
        setPassword("")
        handleModal()
        dispatch(teammatesActionGet())
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        handleFormError()
        if(Object.keys(formErr).length>0){
            setFormError(formErr)
        }else{
            const data  = {
                account_id:account_id&&account_id,
                name,email,password
            }
            const req = {
                data,resolve:resetAllValues
            }
            dispatch(teammatesAddPost(req))
        }
    }


   
  return (
    <>
        <SmallModalBox open={open} handleModal={handleModal}>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-12 gap-5 px-2 md:px-5 py-2.5 md:py-5 bg-[#fff] border-[1px] border-[#CFD5E1] rounded-[10px] '>
                <div className='col-span-12'>
                    <div className='flex items-center justify-between'>
                        <h6 className='font-[700]'>Add Teammate</h6>
                        <div onClick={handleModal} className='w-[35px] h-[35px]'>
                            <IoIosCloseCircle  className='w-[35px] h-[35px] text-[#afb4c0] cursor-pointer hover:text-[#0266E1]'/>
                        </div>
                    </div>
                </div>
                <div className='col-span-12'>
                    <FormInputFiled
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                            delete formError.name
                        }}
                        placeholder={"Enter Name"}
                        error={(Object.keys(formError).length>0&&formError.name)?true:false}
                        errorMsg={Object.keys(formError).length>0&&formError.name}
                    />
                </div>
                <div className='col-span-12'>
                    <FormInputFiled
                        value={email}
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
                        htmlFor={"currentPassword"}
                        id={"currentPassword"}
                        placeholder={"Password"}
                        classNameInput={`${(Object.keys(formError).length>0&&formError.password)?"border-[#C7022D]":"border-[#CFD5E1]"} `}
                        onCopy={(e)=>{e.preventDefault()}}
                        onPaste={(e)=>{e.preventDefault()}}
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
                    <SaveChangesES text={"Save Teammate"} type={"submit"}/>
                </div>
            </form>
        </SmallModalBox>
    </>
  )
}

export default AddTeammates