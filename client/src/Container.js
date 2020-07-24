import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import Events from './components/Events'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'
import octago from './images/logo-white 2.png'
import Intro from './components/Intro'
import EndIntro from './components/EndIntro'
import Onboard from './components/Onboard'
import Proceed from './components/Proceed'
import CheckIn from './components/CheckIn'
import Arrived from './components/Arrived'
import Ticket from './components/Ticket'
import Approved from './components/Approved'
import {
  loginUser,
  verifyUser,
  registerUser,
  removeToken,
  showEvent,
  postEvent
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
        phone: '12',
        admin: false,
      },
      authFormData: {
        email: '',
        password: ''
      },
      event: '',
      newEvent: {
        user_id: '',
        title: '',
        date: '',
        time: '',
        location: '',
        date: '',
      }
    }
  }
  
  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    this.getEvent()
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
    this.props.history.push("/Intro")
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
   
  eventHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newEvent: {
        ...prevState.newEvent,
        [name]: value
      }
    }))
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }
   
  getEvent = async () => {
    const event = await showEvent();
    if (event) {
      this.setState({ event})
    }
  }
   
  createEvent = async () => {
    const newEvent = await postEvent({
      user: '',
      title: '',
      date: '',
      time: '',
      location: ''
    })
    this.setState(prevState => ({
      user: newEvent,
      title: "",
      date: "",
      time: '',
      location: "",
    }))
  }
  
  render() {
    console.log('event', this.state.event)
    return (
      <div>
         <Nav
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        {/* <Intro />
        <EndIntro />
        <Onboard /> */}
        {/* <img src={octago} class="octago"/> */}
        <Switch>
          <Route exact path="/login" render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              user={this.state.currentUser}
              authFormData={this.state.authFormData}
              authHandleChange={this.authHandleChange}
              handleChange={this.handleChange}
            />)}/>
        <Route exact path="/events" render={(props) => (
            <Events
              getEvent={this.getEvent}
              event={this.state.event}
              currentUser={this.state.currentUser}
              addEvent={this.addEvent}
              createEvent={this.createEvent}
              handleChang={this.eventHandleChange}
              newEvent={this.state.newEvent}
            />)}/>
        <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.registerHandleChange}
              registerFormData={this.state.registerFormData}
            />)}/>
        <Route exact path="/" render={(props) => (
            <Home
              handleRegister={this.handleRegister}
              handleChange={this.registerHandleChange}
              registerFormData={this.state.registerFormData}
              currentUser={this.state.currentUser}
              getEvent={this.getEvent}
              event={this.state.event}
            />)}/>
        <Route exact path="/profile" render={(props) => (
            <Profile
              handleRegister={this.handleRegister}
              handleChange={this.registerHandleChange}
              registerFormData={this.state.registerFormData}
              currentUser={this.state.currentUser}
              getEvent={this.getEvent}
              event={this.state.event}
            />)}/>
        <Route exact path="/Intro" render={() => <Intro />} />
        <Route exact path="/EndIntro" render={() => <EndIntro />} />
        <Route exact path="/Onboard" render={() => <Onboard />} />
        <Route exact path="/proceed" render={() => <Proceed />} />
        <Route exact path="/arrived" render={() => <Arrived />} />
        <Route exact path="/approved" render={() => <Approved />} />
          <Route exact path="/checkin" render={(props) =>
            <CheckIn
            currentUser={this.state.currentUser}
            />} />
        <Route exact path="/ticket" render={() => <Ticket />} />
        </Switch>
        
        </div>
    )
  }
 }

 export default withRouter(Container)
