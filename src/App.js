import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import ApartmentList from './pages/ApartmentList'
import NewApartment from './pages/NewApartment'
import NewUser from './pages/NewUser'
import Header from './components/Header'
import {getApartments} from './api'
import Login from './components/Login'
import AuthService from './api/AuthService'

const Auth = new AuthService()

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            apartments: [],
            user: null,
        }
    }
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login')
    }

    componentWillMount(){

        console.log(Auth.loggedIn());
        if(Auth.loggedIn()){
            const userId = Auth.getUserId()
            Auth.fetch(`http://localhost:3000/users/${userId}`).then( response =>
                var loggedUser = response
            )
        }
        console.log(loggedUser)
        getApartments().then( APIapartments => {this.setState({apartments: APIapartments, user: loggedUser})
        })
    }


  render() {
    debugger
    return (
      <div className="App">
        <Header logoutUser={this.handleLogout.bind(this)} user={this.state.user}/>
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
