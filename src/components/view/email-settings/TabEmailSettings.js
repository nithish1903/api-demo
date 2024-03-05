"use client"
import React, { useState } from 'react'
import GeneralSettingsEmail from './tabs/GeneralSettingsEmail'
import BlacklistEmail from './tabs/BlacklistEmail'
import PromotedProductsEmail from './tabs/PromotedProductsEmail'
import LooksFeelEmail from './tabs/LooksFeelEmail'

const tabs = ["General Settings","Blacklist","Promoted Products","Looks & Feel"]

const TabEmailSettings = () => {
    const [currentTab,setCurrentTab] = useState(tabs[3])
    
    const handelTabChange = (value)=>{
        setCurrentTab(value)
    }
    
  return (
    <div>
        <div className='flex flex-row gap-3 overflow-x-scroll overflow-y-hidden scroll-m-0 scroll-p-0'>
            {
                tabs.map((tab,t)=>{
                    return <div key={t} onClick={()=>{handelTabChange(tab)}} className={`relative border-[1px] border-[#334851] px-3 py-2.5 rounded-t-[8px] ${currentTab===tab && "border-b-0"}`}>
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
                currentTab === tabs[0] && <GeneralSettingsEmail />
            }
            {
                currentTab === tabs[1] && <BlacklistEmail />
            }
            {
                currentTab === tabs[2] && <PromotedProductsEmail />
            }
            {
                 currentTab === tabs[3] && <LooksFeelEmail />
            }
        </div>
    </div>
  )
}

export default TabEmailSettings