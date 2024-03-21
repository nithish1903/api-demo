import React from 'react'
import Select from 'react-select'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

export const SelectReact = ({options,value,handleChange,className,placeholder}) => {
    return <Select className={className} value={value} onChange={(e)=>{handleChange(e)}} options={options} placeholder={placeholder}/>
  }