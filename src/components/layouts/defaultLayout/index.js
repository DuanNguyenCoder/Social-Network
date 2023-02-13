import React from 'react'
import Header from "./header/index";
import Sidebar from "./sideBar/index";

const DefaultLayout = ({children}) => {
  return (
  <div>
      <Header/>
      <div className="container">
        <Sidebar/>
        <div className='content'>
        {children}
        </div>
      </div>

  </div>
)
}

export default DefaultLayout