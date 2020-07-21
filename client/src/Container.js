import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import Login from './components/Login'
import Nav from './components/Nav'
import Events from './components/Events'
import { verifyUser, registerUser, removeToken } from './resources/api-helper'

import {
  loginUser
} from './resources/api-helper'

export default class Container extends Component {
  constructor() {
    super() 
    this.state = {
      currentUser: null,
      registerForm: {
        name: '',
        email: '',
        password: '',
        admin: false
      },
      authFormData: {
        email: '',
        password: ''
      },
      }
  }
  
  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser
    })
    this.props.history.push('/home')
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
    this.setState({
      currentUser
    })
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({ currentUser: null })
    removeToken();
    this.props.history.push("/login")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name] : value
      }
    }))
  }

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }
  
  render() {
    console.log('hello')
    return (
      <div>
         <Nav
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
        <h1>Octago</h1>
       
       
        <Switch>
          <Route exact path="/login" render={(props) => (
            <Login
            {...props}/>
        )}/>
        <Route exact path="/events" render={(props) => (
            <Events
            {...props}/>
        )}/>
           
          </Switch>
        </div>
     
    )
  }
}
