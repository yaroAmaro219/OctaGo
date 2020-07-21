import React from 'react'

const Login = (props) => {
  const { handleLogin, authFormData, handleChange } = props
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="sign-in-title">Sign In</h1>
        <div className="input-container">
          <input name="email" onChange={handleChange} value={authFormData} className="input" placeholder="Email"/>
          <input name="email" onChange={handleChange} value={authFormData} className="input" placeholder="Password"/>
        </div>
        <button className='submit-button'> Login</button>
      </form>

      <div className='right-container'>
          <div className="need-account">
            <h1 className='account-title' >Need An Account?</h1>
            <button onClick={() => { props.history.push('/register') }} className='register-button'>Register</button>
          </div>
        </div>
       
      </div>
    
  )
}

export default Login;
