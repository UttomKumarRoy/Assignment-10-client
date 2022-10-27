import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'

const Login = () => {
  
  const [err, setErr]=useState('')
  // const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { signin,  signInWithGoogle, signInWithGithub } = useContext(AuthContext)

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
      .catch(error => {
        toast.error(error.message)
        setErr(error.message);}
      )
  }

  // Google Signin
  const handleGoogleSignIn = () => {
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
  

  return (
    <div className='text-center border-5 bg-dark text-white'>
      
        <div>
          <h4 className='bg-success text-white p-2 rounded-2'>Sign In</h4>
          <p className=''>
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>
                Email Address: 
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'

              />
            </div>
            <div>
              
                <label htmlFor='password' className=''>
                  Password: 
                </label>
              
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
              />
            </div>
          

          <div>
            <button
              type='submit'
            >
              Sign in
            </button>
            <p className='text-danger'>{err}</p>
          </div>
        </form>
        
        <div className=''>
          
          <p>
            Login with social accounts
          </p>
          
        </div>
        <div className=''>
          <button
            onClick={handleGoogleSignIn}
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
            Sign Up
          </Link>
        </p>
      
    </div>

  )
}

export default Login
