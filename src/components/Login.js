import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  // const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { signin, resetPassword, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    signin(email, password)
      .then(result => {
        toast.success('Login Success!')
        navigate(from, { replace: true })
        console.log(result.user)
      })
      .catch(error => toast.error(error.message))
  }

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }

  const handleGoogleGithub = () => {
    signInWithGithub().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }
  //Reset Pass
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Reset link has been sent, please check email')
      })
      .catch(error => toast.error(error.message))
  }

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <h1 className=''>Sign in</h1>
          <p className=''>
            Sign in to access your account
          </p>
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
                Email address
              </label>
              <input
                onBlur={event => setUserEmail(event.target.value)}
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
                // type={showPass ? 'text' : 'password'}
                type='password'
                name='password'
                id='password'
                placeholder='*******'
                className=''
              />

              {/* <button onClick={() => setShowPass(!showPass)}>
                Show Password
              </button> */}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className=''
            >
              Sign in
            </button>
          </div>
        </form>
        <div className=''>
          <button
            onClick={handleReset}
            className=''
          >
            Forgot password?
          </button>
        </div>
        <div className=''>
          
          <p className=''>
            Login with social accounts
          </p>
          
        </div>
        <div className=''>
          <button
            onClick={handleGoogleSignin}
            aria-label='Log in with Google'
            className=''
          >
           Google
          </button>
          
          <button onClick={handleGoogleGithub} aria-label='Log in with GitHub' className=''>
            Github
          </button>
        </div>
        <p className=''>
          Don't have an account yet?{' '}
          <Link to='/register' className=''>
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>

  )
}

export default Login
