import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../index'
import './Layout.css'



function Layout() {

    return (
        <>
       
        <div>
            <div>
                <Navigation  />
            </div>
            <div className="Outlet">
                <Outlet />
            </div>

            </div>
          

        </>
    )
}

export default Layout
