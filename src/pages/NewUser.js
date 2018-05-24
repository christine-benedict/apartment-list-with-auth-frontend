import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {createUser} from '../api'


class NewUser extends Component {
    constructor(props){
        super(props)
        this.state={
            user: {
                email:"",
                name: "",
                password: "",
                password_confirmation: ""
            },
            createSuccess: false
        }
    }

    handleChange(event){
        let { user } =this.state
        user[event.target.name] = event.target.value
        this.setState({user: user})
    }

    handleSubmit(event){
        event.preventDefault()
        createUser(this.state.user).then( successUser => {
            console.log("Create Success!", successUser ); this.setState({createSuccess: true})
        })
    }

    render(){
        return(
            <div>
                <form>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.user.name}
                    placeholder="Name"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="email"
                    value={this.state.user.email}
                    placeholder="Email"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    placeholder="Password"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="password"
                    name="password_confirmation"
                    value={this.state.user.password_confirmation}
                    placeholder="Confirm Password"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="submit"
                    name="submit"
                    value="Create User"
                    onClick={this.handleSubmit.bind(this)}
                  />
                </form>{this.state.createSuccess && <Redirect to="/login" />}
            </div>
        )
    }
}



export default NewUser
