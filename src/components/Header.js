import React, {Component} from 'react'
import '../App.css';
import withAuth from './withAuth'
import {Button} from 'react-bootstrap'



class Header extends Component {
    render(){
        return (
            <div className="App">
                <h1 className="App-title">Apartment Finder</h1>
                {this.props.user &&
                    <div>
                    <h2>Your Account</h2>
                    <div>Name: {this.props.user.name}</div>
                    <div>Email: {this.props.user.email}</div>

                    <h3>Your Roles</h3>
                    <ul>
                      {this.props.user.roles.map( role => {
                        return(
                          <li key={role.name}>{role.name}</li>
                        )
                        })}
                    </ul>
                    <button type="button" className="form-submit" onClick={this.props.logoutUser.bind(this)}>Logout</button>
                    </div>
                }

            </div>
        )
    }
}
export default Header
