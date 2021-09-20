import React from 'react'
import Navbar from './Navbar'

function Header(){
    return (
        <div className='head'>
            <Navbar />
            <div className='headerCont'>
            <h1 className='title'>Clean Blog</h1>
            <span>A Blog Theme by Start Bootstrap</span>
            </div>
        </div>
    )
}

export default Header