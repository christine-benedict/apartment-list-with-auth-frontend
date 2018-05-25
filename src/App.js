import React, { Component } from 'react';
import './App.css';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'
import ApartmentList from './pages/ApartmentList'
import NewApartment from './pages/NewApartment'
import NewUser from './pages/NewUser'
import Header from './components/Header'
import Login from './components/Login'
import AuthService from './api/AuthService'

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
        this.props.history.push("/")
    }

    componentWillMount(){
        if(Auth.loggedIn()){
            const userId = Auth.getUserId()
            Auth.fetch(`https://apartment-list-backend.herokuapp.com/users/${userId}`).then( results => this.setState({user: results}))
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

export default withRouter(App)
