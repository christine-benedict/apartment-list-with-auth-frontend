import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {getApartments} from '../api'

class ApartmentList extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentWillMount(){
    getApartments().then(APIapartments => {this.setState({apartments: APIapartments})})
  }
    render(){
        return(
            <div>
            <ListGroup>
            {this.state.apartments.map( (apartment, index) => {
                return(
                    <ListGroupItem key={index} header={
                        <h4><span className="apartment-crossroad">
                        {apartment.crossroad}
                        </span></h4>
                    }>
                        <span className="manager-name">{apartment.manager_name}</span>
                        <span className="manager-phone">{apartment.manager_phone_number}</span>
                    </ListGroupItem>
                )
             })
            }
            </ListGroup>
            </div>
        )
    }
}



export default ApartmentList
