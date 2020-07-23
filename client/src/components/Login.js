import React from 'react'
import { Link } from 'react-router-dom'
import octago from '../images/logo-white 2.png'

const Login = (props) => {
  const { handleLogin, authFormData, authHandleChange } = props
  return (
    <div class="login-co">
      <img src={octago} class='octago-lrg' />
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="sign-in-title">Sign In</h1>
        <div className="input-container">
          <input name="email" type="text" onChange={authHandleChange} value={authFormData.email} className="input" placeholder="Email"/>
          <input name="password" type="password" onChange={authHandleChange} value={authFormData.password} className="input" placeholder="Password"/>
        </div>
        <button className='submit-button'> Login</button>
      </form>
      </div>
      <div className='right-container'>
          <div className="need-account">
            <h1 className='account-title'><Link class='link' to="/register" >Need An Account?</Link></h1>
          {/* <button onClick={() => { props.history.push('/register') }} className='register-button'>Register</button> */}
          {/* <button class="submit-button"><Link to="/register" >Sign Up</Link></button> */}
          </div>
        </div>
    </div>
  )
}

export default Login;
