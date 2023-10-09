import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text"  />
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Confirm Password"
        />
        <input type="submit" value="Login" />
        <p>
          Have an account? <a href="/">Login here</a>
        </p>
      </form>
    </div>
  )
}

export default RegisterPage
