import React, { useState } from "react";
import Select, { components } from "react-select"

const CustomOption = (props) => {
  const [submenu, setSubmenu] = useState(false)
  const [height, setHeight] = useState(0)
  const handleOption = (e) => {
    if(submenu) {
      setSubmenu(false)  
    } else {
      setHeight(e.clientY)
      setSubmenu(true)  
    }
    
  }
  const handleSubOption = (e) => {
    console.log('clicked')
  }
  const { data } = props;
  return data.custom ? (
    <>
      <div onClick={handleOption} className="customs">
        {data.label} <span className="caret"/>
          {
            submenu && (
              <div className="dropdown-submenu bg-white">
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 1
                </div>
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 2
                </div>
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 3
                </div>
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 1
                </div>
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 2
                </div>
                <div className="drops" onClick={handleSubOption}>
                  Test dropdown 3
                </div>
              </div>
            )
          }
      </div>
      <style jsx>{`
        .customs {
          height: 36px;
          padding: 8px;
          position: relative;
          background-color:"#fff"
        }
        
        .drops {
          height: 36px;
          padding: 8px;
        }

        .customs:hover, .drops:hover {
          background-color: #17cf76;
        }

        .dropdown-submenu {
          position: fixed;
          top: ${height - 10}px;
          left: 410px;
          min-height: 36px;
          overflow: auto;
          border: 1px solid hsl(0,0%,80%);
          border-radius: 4px;
          color: #212529;
          background-color:"#fff"
        }
      `}</style>
    </>
  ) : (
    <components.Option {...props} />
  );
};

const options = [
  { custom: true, label: "I'm a custom link", value: "cust" }
];

function AppOne() {
    return (
      <>
        <Select classNamePrefix="category-select" className="w-30" components={{ Option: CustomOption }} options={options} />
        <style jsx global>{`
          * {
            font-family: sans-serif;
            text-align: center;
          }
          .w-30 {
            width: 30% !important;
          }
        `}</style>
      </>
    )
  }
  
  export default AppOne