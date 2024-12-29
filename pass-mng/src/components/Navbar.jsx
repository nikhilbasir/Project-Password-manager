import React from 'react'

const Navbar = () => {
    return (

        <nav  className=' bg-slate-700 text-white'>
            <div className='flex justify-between  mycontainer items-center px-4 py-5 h-14 text-white'>
            
                <div className='font-bold text-2xl text-white' >
                    <span className='text-green-600'>&lt;</span>
                    <span>Pass</span><span className='text-green-600'>OP/</span>
                    <span className='text-green-600'>&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'> 
                        <a className='' href="/">Home</a>
                        <a className='' href="/About">About</a>
                        <a className='' href="/Contact">Contact</a>
                    </li>
                </ul> */}

                <button className='text-white  bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className='invert  w-10 p-1' src="/icons/github.png" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar
