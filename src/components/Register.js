import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { createUser, updateName,  signInWithGoogle, signInWithGithub } =
    useContext(AuthContext)

  // Signup using Email & Pass
  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const photo = event.target.photo.value
    const email = event.target.email.value
    const password = event.target.password.value

    //1. Create Account
    createUser(email, password)
      .then(result => {
        

        //2. Update Name
        updateName(name, photo)
          .then((result) => {
            toast.success('Name and Photo Updated')
            

            
          })
          .catch(error => {
          console.log(error);
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

  const handleGithubSignin = () => {
    signInWithGithub().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }

  return (
    <div className='text-center border-5 bg-dark text-white'>
      
      
          <h4 className='bg-success text-white p-2 rounded-2'>Register</h4>
          <p>Create a new account</p>
        
        <form
          onSubmit={handleSubmit}
        >
          <div className=''>
            <div>
              <label htmlFor='email' className=''>
                Name :
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
              />
            </div>
            <div>
              <label htmlFor='email' className=''>
                Photo URL :
              </label>
              <input
                type='text'
                name='photo'
                id='photo'
                placeholder='Enter Your photo URL'
              />
            </div>

            <div>
              <label htmlFor='email' className=''>
                Email Address :
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
              />
            </div>
            <div>
              <div className=''>
                <label htmlFor='password' className=''>
                  Password :
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
              />
            </div>
          </div>
            <div>
              <button
                type='submit'
              >
                Sign Up
              </button>
            </div>
          
        </form>
    
          <p>
            Signup with social accounts
          </p>
        
          <button
            onClick={handleGoogleSignin}
            aria-label='Log in with Google'
          >
            Google
          </button> 
          
          <button onClick={handleGithubSignin} aria-label='Log in with GitHub' className=''>
           Github
          </button>
        
        <p className=''>
          Already have an account yet?{' '}
          <Link to='/login'>
            Sign In
          </Link>
        </p>
      
    </div>
  )
}

export default Register
