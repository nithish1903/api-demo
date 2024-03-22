import React from 'react'
import { SaveChangesES } from './ButtonEmailSettings'

export const ErrorPageHnadleBasic = ({handleCallBack,errorMessage}) => {
    let msg_err = errorMessage && errorMessage.response && errorMessage.response.data && errorMessage.response.data.message
  return (
    <>
       <div className="w-[100%] h-[85vh] flex items-center justify-center">
            <div className="flex justify-center items-center flex-col">
                <p>{msg_err?msg_err:"Something went wrong!"}</p>
                <SaveChangesES text={"Re-try Again"} onClick={()=>{
                    handleCallBack()
                }} />
            </div>
        </div>
    </>
  )
}
 