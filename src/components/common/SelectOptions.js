
import React, { useRef } from 'react'

import { TiArrowSortedDown } from "react-icons/ti";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material';


const styles = {
  select: {
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    msExpand: {
      display: 'none',
    },
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,  
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "100%",
    backgroundPositionY: "10px"
  }
}
export const SelectOptions = ({value,options,handleChange,placeholder}) => {
  const refSelect = useRef()
  return (
    <div className=''>
      <select ref={refSelect} style={styles.select} 
        className='py-3 px-2 rounded-[6px] border-2 border-[#CFD5E1]'
        onChange={(e)=>{
          handleChange(e)
        }}
        value={value}
      >
        <option>{placeholder}</option>
       {
        options.map((ele,e)=>{
          return <option key={e} >{ele}</option>
        })
       }
      </select>
    </div>
  )
}




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, value, theme) {
  return {
    fontWeight:
      value.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function SelectPlaceholder({value,options,handleChange,classBox}) {
  const theme = useTheme();

  return (
    <>
      <>
        <Select
          displayEmpty
          value={value}
          onChange={(e)=>{handleChange(e)}}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-[130px] py-3 px-3 rounded-[6px] border-2 border-[#CFD5E1]'
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </>
    </>
  );
}