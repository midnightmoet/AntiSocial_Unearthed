import React from 'react'
import "./index.css";

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404</h1>
        <p>Page not found</p>
        <p className='backHome'>Go back to <a href="#">Login</a></p>
    </div>
  )
}

export default NotFound
