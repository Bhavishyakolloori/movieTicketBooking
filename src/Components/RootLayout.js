import React from 'react'

import NavigationBar from './NavigationBar/NavigationBar'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <NavigationBar />
        <div style={{minHeight:"100vh"}}>
        <Outlet />
        </div>
    </div>
    
  )
}

export default RootLayout