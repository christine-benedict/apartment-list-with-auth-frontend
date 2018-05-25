import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {createApartment} from '../api'
import withAuth from '../components/withAuth'

class NewApartment extends Component {
    constructor(props){
        super(props)
        this.state={
            form: {
                crossroad:"",
                city: "",
                zipcode: "",
                state: "",
                country: "",
                manager_name: "",
                manager_phone_number: "",
                manager_hours: ""
            },
            createSuccess: false
        }
    }
    handleChange(event){
        let { form } =this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }
    handleSubmit(event){
        event.preventDefault()
        createApartment(this.state.form).then( successApartment => {console.log("Create Success!", successApartment ); this.setState({createSuccess: true})
        })
    }

    render(){
        console.log(this.state.createSuccess)
        return(
            <div>
                <form>
                  <FormControl
                    type="text"
                    name="crossroad"
                    value={this.state.form.crossroad}
                    placeholder="Address"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="city"
                    value={this.state.form.city}
                    placeholder="City"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="zipcode"
                    value={this.state.form.zipcode}
                    placeholder="Zipcode"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="state"
                    value={this.state.form.state}
                    placeholder="State"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="country"
                    value={this.state.form.country}
                    placeholder="Country"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="manager_name"
                    value={this.state.form.manager_name}
                    placeholder="Manager Name"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="manager_phone_number"
                    value={this.state.form.manager_phone_number}
                    placeholder="Manager Phone Number"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="text"
                    name="manager_hours"
                    value={this.state.form.manager_hours}
                    placeholder="Manager Contact Hours"
                    onChange={this.handleChange.bind(this)}
                  />
                  <FormControl
                    type="submit"
                    name="submit"
                    value="Create Apartment"
                    onClick={this.handleSubmit.bind(this)}
                  />
                </form>{this.state.createSuccess && <Redirect to="/apartments" />}
            </div>
        )
    }
}



export default withAuth(NewApartment)
