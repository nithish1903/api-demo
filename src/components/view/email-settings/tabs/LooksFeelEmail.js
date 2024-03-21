
import React, { useEffect } from 'react'

import { SaveChangesES } from '@/components/common/ButtonEmailSettings';
import SettingsLooksFeelES from './LooksFeelEmail/SettingsLooksFeelES';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingSkeletonBasic } from '@/components/common/LoadingSkeleton';
import { settingsActionGet, settingsActionPost } from '@/lib/redux/features/settings/settingsAction';


const LooksFeelEmail = () => {
   const dispatch = useDispatch()
    const [fontOptions,setFontOptions] = React.useState(["inherit","Poppins Sans","Sans","Roboto","Time New Roman"])

    const [title_prd,settitle_prd] = React.useState("")
    const [status_prd,setStatus_prd] = React.useState(false)
    const [starColor_prd,setStarColor_prd] =  React.useState("#F9C612");
    const [currentFont_prd, setCurrentFont_prd] = React.useState(fontOptions[1]);
    const [color1_prd, setColor1_prd] = React.useState("#00A3FF");
    const [color2_prd, setColor2_prd] = React.useState("#00FFA3");

    const [title_site,settitle_site] = React.useState("")
    const [status_site,setStatus_site] = React.useState(false)
    const [starColor_site,setStarColor_site] =  React.useState("#F9C612");
    const [currentFont_site, setCurrentFont_site] = React.useState(fontOptions[1]);
    const [color1_site, setColor1_site] = React.useState("#00A3FF");
    const [color2_site, setColor2_site] = React.useState("#00FFA3");
    const [btnPositionOptions ,setbtnPositionOptions ] = React.useState(["right","left"])
    const [btnPosition_site, setbtnPosition_site] = React.useState(btnPositionOptions[1]);

    useEffect(()=>{
        dispatch(settingsActionGet())
      },[dispatch])

    const {settingsData,isError,errorMessage,isLoading,isSuccess} = useSelector((state)=>{
        return state.settings
    })
    const is_product_reviews = isSuccess && settingsData && Object.keys(settingsData).length > 0 && settingsData.data && Object.keys(settingsData.data).length>0 && settingsData.data.product_reviews
    const is_site_reviews = isSuccess && settingsData && Object.keys(settingsData).length > 0 && settingsData.data && Object.keys(settingsData.data).length>0 && settingsData.data.site_reviews  

    console.log(settingsData)
// inherit
    useEffect(()=>{
        if(settingsData && is_product_reviews){
            settitle_prd(is_product_reviews.title?is_product_reviews.title:"Product Reviews")
            const position1 = fontOptions.indexOf(is_product_reviews.font_family);
            setCurrentFont_prd( position1? fontOptions[position1] :"" )
            setColor1_prd(is_product_reviews.button_bg_color?is_product_reviews.button_bg_color:"")
            setColor2_prd(is_product_reviews.button_title_color?is_product_reviews.button_title_color:"")
            setStatus_prd(is_product_reviews.status&&is_product_reviews.status===1?true:false)
            setStarColor_prd(is_product_reviews.star_color?is_product_reviews.star_color:"#F9C612")
        }
        if(settingsData && is_site_reviews){
            settitle_site(is_site_reviews.button_title?is_site_reviews.button_title:"Site Reviews")
            const position2 = fontOptions.indexOf(is_site_reviews.font_family);
            setCurrentFont_site( position2? fontOptions[position2] :"")
            setColor1_site(is_site_reviews.button_bg_color?is_site_reviews.button_bg_color:"")
            setColor2_site(is_site_reviews.button_title_color?is_site_reviews.button_title_color:"")
            setStatus_site(is_site_reviews.status&&is_site_reviews.status===1?true:false)

            const position3 = fontOptions.indexOf(is_site_reviews.button_position);
            setbtnPosition_site(position3? btnPositionOptions[position3] :"")
        }
    },[settingsData])

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        const formData  = {
            "product_reviews": {
                "star_color":starColor_prd,
                "status":status_prd?1:0,
                "button_bg_color": color1_prd,
                "button_title_color": color2_prd,
                "font_family":  currentFont_prd
            },
            "site_reviews": {
                "button_bg_color": color1_site,
                "status":status_site?1:0,
                "button_title_color": color2_site,
                "button_position": btnPosition_site, //left, right
                "font_family": currentFont_site,
                "star_color":starColor_site
            },
        }
        dispatch(settingsActionPost(formData))

    }
    
  return (
    <form className="grid grid-cols-12 gap-5 lg:gap-10" onSubmit={handleFormSubmit}>
        {
            isLoading ? (
                <>
                    <div className="col-span-12 w-full h-auto xl:h-[100vh] grid grid-cols-12 gap-4 py-14">
                        {
                            [...Array(5)].map((e,i)=>{
                            return <div className='col-span-12 lg:col-span-6' key={i}><LoadingSkeletonBasic /></div>
                            })
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className='col-span-12'>
                        <SettingsLooksFeelES
                            title={title_prd}
                            fontOptions={fontOptions} 
                            currentFont={currentFont_prd} 
                            setCurrentFont={setCurrentFont_prd}
                            status={status_prd}
                            handleStatus={()=>{setStatus_prd(!status_prd)}}
                            starColor={starColor_prd}
                            setStarColor={setStarColor_prd}
                            color1={color1_prd}
                            setColor1={setColor1_prd}
                            color2={color2_prd}
                            setColor2={setColor2_prd}
                            check_data={is_product_reviews}
                        />
                    </div>
                    <div className='col-span-12'>
                        <SettingsLooksFeelES 
                            title={title_site}
                            fontOptions={fontOptions} 
                            currentFont={currentFont_site} 
                            setCurrentFont={setCurrentFont_site}
                            status={status_site}
                            handleStatus={()=>{setStatus_site(!status_site)}}
                            starColor={starColor_site}
                            setStarColor={setStarColor_site}
                            color1={color1_site}
                            setColor1={setColor1_site}
                            color2={color2_site}
                            setColor2={setColor2_site}
                            btnPosition={btnPosition_site}
                            setbtnPosition={setbtnPosition_site}
                            btnPositionOptions = {btnPositionOptions}
                            check_data={is_site_reviews}
                        />
                    </div>
                    <div className='col-span-12'>
                        <SaveChangesES type={"submit"} text={"Save Changes"} />
                    </div>
                </>
            )
        }
       
    </form>
  )
}

export default LooksFeelEmail