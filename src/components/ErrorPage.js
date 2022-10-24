import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='text-center border'>
        <h1 className='text-primary'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className='text-danger'>{error.statusText || error.message}</p>
            <p >{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
