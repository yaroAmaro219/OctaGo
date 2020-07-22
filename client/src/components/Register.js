import React from 'react'
import { withRouter } from 'react-router-dom'


const Register = (props) => {
  const { handleRegister, registerFormData, handleChange } = props
  return (
    <>
     <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h1 className="sign-in-title">Register</h1>
        <div className="input-container">
          <input name="email" type="text" onChange={handleChange} value={registerFormData.email} className="input" placeholder="Email"/>
          <input name="phone" type="text" onChange={handleChange} value={registerFormData.phone} className="input" placeholder="Phone Number"/>
          <input name="password" type="password" onChange={handleChange} value={registerFormData.password} className="input" placeholder="Password"/>
        </div>
        <button className='submit-button'>Register</button>
      </form>

      <div className='right-container'>
          <div className="need-account">
            <h1 className='account-title' >Login</h1>
            <button onClick={() => { props.history.push('/events') }} className='register-button'>Login</button>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default withRouter(Register);
