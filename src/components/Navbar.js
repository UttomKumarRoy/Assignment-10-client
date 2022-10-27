import React, {  useEffect, useState } from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [mode , setMode]=useState('Light-Mode')

    const handleMode=()=>{
        (mode==='Light-Mode')?setMode('Dark-Mode'):setMode('Light-Mode')
    }
    useEffect(()=>{
      
           document.body.className=mode;
        
    },[mode])

   
    
    const image=require('./logo.jpg');
    
    return (
        <div className='d-flex justify-content-between align-items-center pt-5'>
            <div className='d-flex'>
                <img src={image} alt="Icon" />
                <h1 className='text-success'>Learn Programming to Earn</h1>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                <Link className='mx-2 text-decoration-none' to='/courses'>
                    Courses
                </Link>
                </div>
                <div>
                <Link className='mx-2 text-decoration-none' to='/faq'>
                    FAQ
                </Link>
                </div>
                <div>
                <Link className='mx-2 text-decoration-none' to='/blog'>
                    Blog
                </Link>
                </div>
                
                <Link className='mx-2 text-decoration-none' onClick={()=>handleMode()}>
                    {mode}
                </Link>
                
                <div>
                    
                <Link className='mx-2 text-decoration-none' to='/login'>
                        Login
                    </Link>
                </div>
               
               
            </div>
        </div>
    );
};

export default Navbar;