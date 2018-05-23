import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApartmentList from './pages/ApartmentList'
import NewApartment from './pages/NewApartment'
import NewUser from './pages/NewUser'
import {getApartments} from './api'
import Login from './components/Login'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            apartments: [],
        }
    }
    componentWillMount(){
        getApartments().then( APIapartments => {this.setState({apartments: APIapartments})
        })
    }


  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" render={ (props) => <ApartmentList apartments={this.state.apartments} />}/>
                <Route exact path="/apartments" component={NewApartment}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={NewUser}/>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App
