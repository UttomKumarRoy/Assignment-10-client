import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h1>Learn Programming to earn</h1>
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
                <div>
                <Link className='mx-2 text-decoration-none' to='/toggle'>
                    Toggle Theme
                </Link>
                </div>
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