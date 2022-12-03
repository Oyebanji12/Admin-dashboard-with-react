import React from 'react'
import Mainbar from './Mainbar'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='nav-wrapper'>
        
     <div className='flex-container'>
            <h2 className='logo'>Manage</h2>
            <nav className='flex-item'>
                <li className='flex-child'>Pricing</li>
                <li className='flex-child'>Product</li>
                <li className='flex-child'>About</li>
                <li className='flex-child'>Career</li>
                <li className='flex-child'>Community</li>

            </nav>
            
        </div>
        <Mainbar />
        <Mainbar />
    </div>
    </div>
  )
}

export default Navbar