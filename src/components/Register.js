import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { createUser, updateName, verifyEmail, signInWithGoogle } =
    useContext(AuthContext)

  // Signup using Email & Pass
  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    //1. Create Account
    createUser(email, password)
      .then(result => {
        console.log(result.user)

        //2. Update Name
        updateName(name)
          .then(() => {
            toast.success('Name Updated')

            //3. Email verification
            verifyEmail()
              .then(() => {
                toast.success('Please check your email for verification link')
                navigate(from, { replace: true })
              })
              .catch(error => {
                toast.error(error.message)
              })
          })
          .catch(error => {
            toast.error(error.message)
          })
      })
      .catch(error => console.log(error))
  }

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <h1 className=''>Register</h1>
          <p className=''>Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className=''
        >
          <div className=''>
            <div>
              <label htmlFor='email' className=''>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className=''
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className=''>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className=''
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className=''>
                <label htmlFor='password' className=''>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
                className=''
              />
            </div>
          </div>
          <div className=''>
            <div>
              <button
                type='submit'
                className=''
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className=''>
          <div className=''></div>
          <p className=''>
            Signup with social accounts
          </p>
          <div className=''></div>
        </div>
        <div className=''>
          <button
            onClick={handleGoogleSignin}
            aria-label='Log in with Google'
            className=''
          >
            Google
          </button>
          
          <button aria-label='Log in with GitHub' className=''>
           Github
          </button>
        </div>
        <p className=''>
          Already have an account yet?{' '}
          <Link to='/login' className=''>
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register
