import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import ApartmentList from './pages/ApartmentList'
import NewApartment from './pages/NewApartment'
import NewUser from './pages/NewUser'
import Header from './components/Header'
import Login from './components/Login'
import AuthService from './api/AuthService'
import history from './history'

const Auth = new AuthService()

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            user: null,
        }
    }
    handleLogout(){
        Auth.logout()
        this.props.history.replace("/")
    }

    componentWillMount(){
        if(Auth.loggedIn()){
            const userId = Auth.getUserId()
            Auth.fetch(`http://localhost:3000/users/${userId}`).then( results => this.setState({user: results}))
        }
    }


  render() {
    return (
      <div className="App">
        <Header logoutUser={this.handleLogout.bind(this)} user={this.state.user}/>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/apartments" component={ (props) => <ApartmentList apartments={this.state.apartments} />}/>
              <Route exact path="/createapartment" component={NewApartment}/>
              <Route exact path="/register" component={NewUser}/>
            </Switch>
      </div>
    )
  }
}

export default App
