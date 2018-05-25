import React, {Component} from 'react'
import '../App.css';
import {Button} from 'react-bootstrap'



class UserGreeting extends Component {
  render(){
    return (
      <div className="user-header">
        <span id="user-header">
           Welcome, {this.props.user.name}!<br />
           {this.props.user.email}<br />
           Your Roles:
          {this.props.user.roles.map( role => {
            return(
              <span key={role.name}> {role.name} </span>
            )
            })}
            <br/>

        </span>
        <button type="button" className="form-submit" id="log-out" onClick={this.props.logoutUser.bind(this)}>Logout</button>
      </div>
    )
  }
}
export default UserGreeting
