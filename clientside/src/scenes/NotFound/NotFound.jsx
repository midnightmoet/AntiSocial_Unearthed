import React from 'react'
import './notfound.css';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404</h1>
      <p>Page not found</p>
      <p>Go Back to <a href="/">Login</a></p>
    </div>
  )
}

export default NotFound
