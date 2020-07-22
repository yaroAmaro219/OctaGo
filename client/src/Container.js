import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import Login from './components/Login'
import Nav from './components/Nav'
import Events from './components/Events'
import Register from './components/Register'
import {
  loginUser,
  verifyUser,
  registerUser,
  removeToken
} from './resources/api-helper'

 class Container extends Component {
  constructor() {
    super() 
    this.state = {
      currentUser: null,
      registerFormData: {
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
    this.props.history.push('/events')
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
          currentUser={this.state.currentUser}
        />
        <h1>OctaGo</h1>
       
       
        <Switch>
          <Route exact path="/login" render={(props) => (
            <Login
            handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
              user={this.state.currentUser}
              authFormData={this.state.authFormData}
              authHandleChange={this.authHandleChange}
            handleChange={this.handleChange}
            {...props}/>
        )}/>
        <Route exact path="/events" render={(props) => (
            <Events
            {...props}/>
        )}/>
        <Route exact path="/register" render={(props) => (
            <Register
            {...props}/>
        )}/>
           
          </Switch>
        </div>
     
    )
  }
 }

 export default withRouter(Container)
