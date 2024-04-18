import React from 'react'
import Siderbar from './Siderbar'

const Layout = ({child}) => {
  return (
   <>
   <div className="layout">
      <Siderbar  />
      <div className="content">
        {child}
      </div>
    </div>
   </>
  )
}

export default Layout