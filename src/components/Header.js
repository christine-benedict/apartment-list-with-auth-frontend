import React, {Component} from 'react'
import '../App.css';
import withAuth from './withAuth'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'



class Header extends Component {
  render(){
    if(this.props.user){
      return(
        <div>
          <div className="header">
            <h1>Apartment Finder</h1>
          </div>
          <UserGreeting user={this.props.user} logoutUser={this.props.logoutUser.bind(this)} />
        </div>
      )
    } else {
      return(
        <div>
          <div className="header">
            <h1>Apartment Finder</h1>
          </div>
          <GuestGreeting />
        </div>
      )
    }
  }
}
export default Header
