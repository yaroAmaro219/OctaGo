import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import octago from '../images/logo-white 2.png'


const Register = (props) => {
  const { handleRegister, registerFormData, handleChange } = props
  return (
    <>
      <img src={octago}  class='octago-lrg'/>
     <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h1 className="sign-in-title">Sign Up</h1>
          <div className="input-container">
            <h2 class='sign-up'>Name</h2>
          <input name="name" type="text" onChange={handleChange} value={registerFormData.name} className="input" placeholder="Enter your full name"/>
          <h2 class='sign-up'>Email</h2>
            <input name="email" type="text" onChange={handleChange} value={registerFormData.email} className="input" placeholder="Enter your email address" />
            <h2 class='sign-up'>Password</h2>
          <input name="password" type="password" onChange={handleChange} value={registerFormData.password} className="input" placeholder="Enter your password"/>
        </div>
        <button className='submit-button'>Sign Up</button>
        </form>
        </div>
      <div className='right-container'>
          <div className="need-account">
            <h4 className='already'><Link to='/login'>Already A Member?</Link></h4>
            {/* <button onClick={() => { props.history.push('/events') }} className='submit-button'>Sign In</button> */}
        </div>
        </div>
    </>
  )
}

export default withRouter(Register);
