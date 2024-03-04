"use client"
import React, { useState } from 'react'
import GeneralSettingsEmail from './tabs/GeneralSettingsEmail'
import BlacklistEmail from './tabs/BlacklistEmail'
import PromotedProductsEmail from './tabs/PromotedProductsEmail'

const TabEmailSettings = () => {
    const [currentTab,setCurrentTab] = useState("Promoted Products")

    const tabs = ["General Settings","Blacklist","Promoted Products","Looks & Feel"]

    const handelTabChange = (value)=>{
        setCurrentTab(value)
    }
  return (
    <div>
        <div className='flex flex-row gap-3'>
            {
                tabs.map((tab,t)=>{
                    return <div key={t} onClick={()=>{handelTabChange(tab)}} className={`relative col-span-3 border-[1px] border-[#334851] px-3 py-2.5 rounded-t-[8px] ${currentTab===tab && "border-b-0"}`}>
                        {
                            t !== tabs.length -1 && <div className=' absolute -bottom-[1px] -right-[14px] border-[1px] border-[#334851] w-[16px] h-[2px] '></div>
                        }
                        <p className={`text-[15px] text-center ${currentTab===tab && "font-[700]"}`}>{tab}</p>
                    </div>
                })
            }
        </div>
        <div className='pt-6'>
            {
                currentTab === "General Settings" && <GeneralSettingsEmail />
            }
            {
                currentTab === "Blacklist" && <BlacklistEmail />
            }
            {
                currentTab === "Promoted Products" && <PromotedProductsEmail />
            }
        </div>
    </div>
  )
}

export default TabEmailSettings