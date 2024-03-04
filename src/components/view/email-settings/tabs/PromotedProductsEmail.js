import FormInputFiled from '@/components/common/FormInputFiled'
import  {SelectOptions, SelectPlaceholder } from '@/components/common/SelectOptions';
import SwitchGreen from '@/components/common/SwitchGreen'
import React from 'react'

const PromotedProductsEmail = () => {
   
    const [productOptions,setProductOptions] = React.useState(["Product 1","Product 2","Product 3","Product 4"])
    const [currentProduct, setCurrentProduct] = React.useState("Product 1");

    const handleSelectChange = (event)=>{
        const {
            target: { value },
          } = event;
          setCurrentProduct(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
    }
    
  return (
    <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-12'>
            <div className='flex gap-4'>
                <div className='mt-2'>
                    <SwitchGreen value={true} />
                </div>
                <div className='col-span-12'>
                    <h6 className='font-[700]'>Activate Promoted Products</h6>
                    <p className='text-[16px]'>
                        Choose the products you would like to promote in your Kasplo emails. If none are chosen, we’ll automatically display the products which are most likely to be purchased.
                    </p>
                </div>
            </div>
            <div className='col-span-12'>
                
            </div>
        </div>
        <div className='col-span-12 pb-7 border-b-2 border-[#CFD5E1]'>
            <FormInputFiled classbox={"flex items-center gap-2"} label={"Title:"} placeholder={"Type an Email"}/>
        </div>
        <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-4'>
                <div className=' col-span-4 flex items-center gap-1'>
                    <p className='text-[16px]'>Product:</p>
                    <SelectOptions options={productOptions} placeholder={"Select product"} handleChange={handleSelectChange}  value={currentProduct} />
                </div>
                <div className='col-span-4 flex items-center gap-2'>
                    <div className='w-[50px]'>
                        <input  className='py-3 text-center px-2 border-2 border-[#0266E1] rounded-[6px] w-[50px] ' />
                    </div>
                    <div>
                        <FormInputFiled classbox={"flex items-center gap-2"} label={"Title:"}/>
                    </div>
                </div>
                <div className=' col-span-3 flex items-center gap-1'>
                    <p className='text-[14px]'>Color:</p>
                    <SelectOptions options={productOptions} placeholder={"Select product"} handleChange={handleSelectChange}  value={currentProduct} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromotedProductsEmail