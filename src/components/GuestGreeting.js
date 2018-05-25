import React, {Component} from 'react'
import '../App.css';
import {Button} from 'react-bootstrap'



class GuestGreeting extends Component {
  render(){
    return (
      <div>
        <span>
          <button type="button" className="form-submit" href="/">Log In</button>
        </span>
      </div>
    )
  }
}
export default GuestGreeting
