import React from 'react'
import Mainbar from './Mainbar'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'


const Container = () => {
  return (
    <div>
        <div className='flex-container'>
            <div className='side-bar'>
            < Sidebar />

            </div>
            <div className='navigation-bar'>
              <Navbar />
            </div>
            {/* <div className='main-bar'>
                <Mainbar />

  </div> */}
            <div className='right-bar'>
                <Rightbar />

            </div>

        </div>
    </div>
  )
}

export default Container