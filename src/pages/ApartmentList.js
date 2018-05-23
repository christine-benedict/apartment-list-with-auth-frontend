import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class ApartmentList extends Component {
    render(){
        return(
            <div>
            <ListGroup>
            {this.props.apartments.map( (apartment, index) => {
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
