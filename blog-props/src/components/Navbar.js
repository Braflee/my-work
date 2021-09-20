import React from 'react'

function Navbar(){
    return (
        <div className='navCont'>
            <div className='brand'>
                <a>Start Bootstrap</a>
            </div>
            <div className='fLinks'>
                <a className='home'>Home</a>
                <a className='about'>About</a>
                <a className='sPost'>Sample Post</a>
                <a className='contact'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar